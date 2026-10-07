import { useMemo, useState } from 'react'
import { AIRPORTS } from '../data/airports'
import { gateBoard, hourCapacity } from '../sim/gates'
import type { GameState } from '../types'
import { actions } from '../state/store'
import { money } from '../sim/util'
import { Panel } from './widgets'
import { TerminalMap } from './mapview'

export function Gates({ state, onError }: { state: GameState; onError: (s: string) => void }) {
  const served = useMemo(() => {
    const ids = new Set<string>([state.airline.home])
    for (const route of state.routes) {
      ids.add(route.origin)
      ids.add(route.dest)
      if (route.via) ids.add(route.via)
    }
    return AIRPORTS.filter((airport) => ids.has(airport.id))
  }, [state.airline.home, state.routes])
  const [id, setId] = useState(state.airline.home)
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()
  const extra = AIRPORTS.filter((airport) => !served.some((item) => item.id === airport.id) && (!query || `${airport.id} ${airport.city} ${airport.name}`.toLowerCase().includes(query))).slice(0, 12)
  const airport = AIRPORTS.find((item) => item.id === id) ?? served[0]
  const rows = gateBoard(state, airport.id)
  const peak = hourCapacity(airport, 8, state.market.slotBonus[airport.id] ?? 0)
  const off = hourCapacity(airport, 12, state.market.slotBonus[airport.id] ?? 0)
  const held = rows.filter((row) => row.use === 'owned' || row.use === 'leased')
  return (
    <div className="split wide">
      <div>
        <div className="filter-row">
          <input value={q} placeholder="Find another airport" onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="card-list">
          {served.map((item) => (
            <button key={item.id} className={`fleet-card ${item.id === airport.id ? 'on' : ''}`} onClick={() => setId(item.id)}>
              <div><b>{item.city}</b><span>{item.id} / {item.icao}</span><em>{item.size} · {heldCount(state, item.id)} gates held</em></div>
            </button>
          ))}
          {extra.map((item) => (
            <button key={item.id} className={`fleet-card ${item.id === airport.id ? 'on' : ''}`} onClick={() => setId(item.id)}>
              <div><b>{item.city}</b><span>{item.id} / {item.icao}</span><em>{item.size}</em></div>
            </button>
          ))}
        </div>
      </div>
      <Panel title={`${airport.name}`} aside={<span className="fine">{airport.id} / {airport.icao}</span>}>
        <TerminalMap airportId={airport.id} state={state} />
        <p className="fine">Esri World Imagery of the real airfield at {airport.lat.toFixed(4)}, {airport.lon.toFixed(4)}. Terminals, runways, and stands are the satellite photograph. The markers are your gate assignments on that field.</p>
        <div className="sat-legend">
          <span><i className="owned" /> Owned</span>
          <span><i className="leased" /> Leased</span>
          <span><i className="available" /> Available</span>
          <span><i className="other" /> Other airlines</span>
          <span><i className="busy" /> Occupied</span>
        </div>
        <p className="lede">{airport.city} awards you {airport.playerSlots + (state.market.slotBonus[airport.id] ?? 0)} gate slots. Peak hours (07:00–09:00 and 16:00–18:00) can take about {peak} of your movements. Midday can take about {off}. A movement is a departure or an arrival.</p>
        <div className="gate-list">
          {rows.map((row) => (
            <article key={row.stand.id} className="gate-row">
              <b>{row.stand.number}</b>
              <div>
                <span>Terminal {row.stand.terminal} · {row.use === 'other' ? 'Another airline' : row.use}{row.occupied ? ' · occupied' : ''}</span>
                <span>{row.use === 'other' ? 'Not for lease' : `${money(row.stand.leaseDaily)}/day lease · ${money(row.stand.ownPrice)} to buy`}</span>
                <span>Utilization {Math.round(row.utilization * 100)}%</span>
                {row.flights.length === 0 && row.use !== 'other' && <span>No flight assigned</span>}
                {row.flights.map((flight) => <span key={`${flight.tail}-${flight.hour}`}>{flight.tail} · {flight.label} · departs {flight.hour}</span>)}
              </div>
              {row.use === 'available' && (
                <div className="btn-row">
                  <button type="button" className="btn tiny" onClick={() => onError(actions.lease(row.stand.id, 'leased') || '')}>Lease</button>
                  <button type="button" className="btn tiny" onClick={() => onError(actions.lease(row.stand.id, 'owned') || '')}>Buy</button>
                </div>
              )}
              {(row.use === 'leased' || row.use === 'owned') && !row.occupied && (
                <button type="button" className="btn tiny" onClick={() => onError(actions.releaseGate(row.stand.id) || '')}>Release</button>
              )}
            </article>
          ))}
        </div>
        {held.length === 0 && <p className="fine">You hold no gate here yet. A new route will not file until both ends have a free gate.</p>}
      </Panel>
    </div>
  )
}

function heldCount(state: GameState, airportId: string): number {
  return (state.gates ?? []).filter((gate) => gate.airportId === airportId).length
}
