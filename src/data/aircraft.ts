import type { AircraftType } from '../types'
import { EXTRA_AIRCRAFT } from './aircraftExtra'
import { MARKET_PHOTOS, READY_TYPES } from './marketPhotos'

export const AIRCRAFT: AircraftType[] = [
  {
    id: 'b737-200', manufacturer: 'Boeing', model: '737-200', variant: '737-200', family: '737classic',
    category: 'narrowbody', era: 'classic', productionYear: 1978, productionStart: 1967, productionEnd: 1988,
    seatCapacity: 120, cargoTons: 1.6, rangeNm: 1900, cruiseSpeedKt: 430, fuelBurnGph: 1080, fuelIndex: 1.72,
    purchasePrice: 650_000, leaseMonthly: 14_000, maintenancePerFlight: 2800, checkCost: 240_000,
    reliability: 58, passengerAppeal: 38, noise: 86, crewPayMonthly: 7600, engines: 2, minRunwayFt: 5800,
    typicalAskAge: 46, illustrated: true, visual: 'classic737',
  },
  {
    id: 'md-82', manufacturer: 'McDonnell Douglas', model: 'MD-82', variant: 'MD-82', family: 'md80',
    category: 'narrowbody', era: 'aging', productionYear: 1988, productionStart: 1981, productionEnd: 1997,
    seatCapacity: 143, cargoTons: 2.2, rangeNm: 2050, cruiseSpeedKt: 439, fuelBurnGph: 980, fuelIndex: 1.55,
    purchasePrice: 1_200_000, leaseMonthly: 22_000, maintenancePerFlight: 2500, checkCost: 310_000,
    reliability: 66, passengerAppeal: 48, noise: 74, crewPayMonthly: 8200, engines: 2, minRunwayFt: 6400,
    typicalAskAge: 36, illustrated: true, visual: 'md80',
  },
  {
    id: 'b737-300', manufacturer: 'Boeing', model: '737-300', variant: '737-300', family: '737classic',
    category: 'narrowbody', era: 'aging', productionYear: 1992, productionStart: 1984, productionEnd: 1999,
    seatCapacity: 132, cargoTons: 2.0, rangeNm: 2300, cruiseSpeedKt: 440, fuelBurnGph: 820, fuelIndex: 1.28,
    purchasePrice: 2_400_000, leaseMonthly: 36_000, maintenancePerFlight: 1900, checkCost: 340_000,
    reliability: 76, passengerAppeal: 58, noise: 62, crewPayMonthly: 8600, engines: 2, minRunwayFt: 6300,
    typicalAskAge: 32, illustrated: true, visual: 'classic737',
  },
  {
    id: 'crj200', manufacturer: 'Bombardier', model: 'CRJ-200', variant: 'CRJ-200', family: 'crj',
    category: 'regional', era: 'aging', productionYear: 1998, productionStart: 1996, productionEnd: 2006,
    seatCapacity: 50, cargoTons: 0.6, rangeNm: 1700, cruiseSpeedKt: 420, fuelBurnGph: 360, fuelIndex: 1.35,
    purchasePrice: 1_100_000, leaseMonthly: 18_000, maintenancePerFlight: 980, checkCost: 160_000,
    reliability: 70, passengerAppeal: 44, noise: 58, crewPayMonthly: 7000, engines: 2, minRunwayFt: 5300,
    typicalAskAge: 26, illustrated: true, visual: 'crj',
  },
  {
    id: 'b757-200', manufacturer: 'Boeing', model: '757-200', variant: '757-200', family: '757',
    category: 'narrowbody', era: 'mature', productionYear: 1995, productionStart: 1982, productionEnd: 2004,
    seatCapacity: 200, cargoTons: 4.2, rangeNm: 3900, cruiseSpeedKt: 461, fuelBurnGph: 1120, fuelIndex: 1.18,
    purchasePrice: 4_800_000, leaseMonthly: 68_000, maintenancePerFlight: 2300, checkCost: 520_000,
    reliability: 80, passengerAppeal: 70, noise: 60, crewPayMonthly: 11200, engines: 2, minRunwayFt: 6800,
    typicalAskAge: 29, illustrated: true, visual: 'b757',
  },
  {
    id: 'md-11', manufacturer: 'McDonnell Douglas', model: 'MD-11', variant: 'MD-11', family: 'md11',
    category: 'widebody', era: 'aging', productionYear: 1996, productionStart: 1990, productionEnd: 2000,
    seatCapacity: 285, cargoTons: 12, rangeNm: 6800, cruiseSpeedKt: 475, fuelBurnGph: 2450, fuelIndex: 1.62,
    purchasePrice: 5_500_000, leaseMonthly: 78_000, maintenancePerFlight: 5200, checkCost: 980_000,
    reliability: 68, passengerAppeal: 54, noise: 70, crewPayMonthly: 14800, engines: 3, minRunwayFt: 9200,
    typicalAskAge: 28, illustrated: true, visual: 'md11',
  },
  {
    id: 'b767-300', manufacturer: 'Boeing', model: '767-300ER', variant: '767-300ER', family: '767',
    category: 'widebody', era: 'mature', productionYear: 1998, productionStart: 1986, productionEnd: 2014,
    seatCapacity: 261, cargoTons: 8.5, rangeNm: 6000, cruiseSpeedKt: 470, fuelBurnGph: 1650, fuelIndex: 1.22,
    purchasePrice: 7_200_000, leaseMonthly: 92_000, maintenancePerFlight: 3400, checkCost: 760_000,
    reliability: 82, passengerAppeal: 72, noise: 55, crewPayMonthly: 14200, engines: 2, minRunwayFt: 8000,
    typicalAskAge: 26, illustrated: true, visual: 'wideclassic',
  },
  {
    id: 'b737-800', manufacturer: 'Boeing', model: '737-800', variant: '737-800', family: '737ng',
    category: 'narrowbody', era: 'modern', productionYear: 2003, productionStart: 1998, productionEnd: 2019,
    seatCapacity: 162, cargoTons: 2.6, rangeNm: 2950, cruiseSpeedKt: 455, fuelBurnGph: 720, fuelIndex: 0.96,
    purchasePrice: 11_800_000, leaseMonthly: 155_000, maintenancePerFlight: 1450, checkCost: 410_000,
    reliability: 88, passengerAppeal: 80, noise: 42, crewPayMonthly: 10800, engines: 2, minRunwayFt: 7500,
    typicalAskAge: 18, illustrated: true, visual: 'ng737',
  },
  {
    id: 'b777-200', manufacturer: 'Boeing', model: '777-200ER', variant: '777-200ER', family: '777',
    category: 'widebody', era: 'modern', productionYear: 2001, productionStart: 1997, productionEnd: 2013,
    seatCapacity: 305, cargoTons: 14, rangeNm: 7700, cruiseSpeedKt: 490, fuelBurnGph: 1980, fuelIndex: 1.05,
    purchasePrice: 16_000_000, leaseMonthly: 210_000, maintenancePerFlight: 3900, checkCost: 1_100_000,
    reliability: 90, passengerAppeal: 86, noise: 40, crewPayMonthly: 16200, engines: 2, minRunwayFt: 9000,
    typicalAskAge: 22, illustrated: true, visual: 'widemodern',
  },
  {
    id: 'a319', manufacturer: 'Airbus', model: 'A319', variant: 'A319-100', family: 'a320ceo',
    category: 'narrowbody', era: 'modern', productionYear: 2005, productionStart: 1996, productionEnd: 2021,
    seatCapacity: 124, cargoTons: 1.8, rangeNm: 3700, cruiseSpeedKt: 450, fuelBurnGph: 660, fuelIndex: 0.9,
    purchasePrice: 8_700_000, leaseMonthly: 118_000, maintenancePerFlight: 1280, checkCost: 360_000,
    reliability: 89, passengerAppeal: 82, noise: 40, crewPayMonthly: 10400, engines: 2, minRunwayFt: 6000,
    typicalAskAge: 19, illustrated: true, visual: 'a320',
  },
  {
    id: 'a320', manufacturer: 'Airbus', model: 'A320', variant: 'A320-200', family: 'a320ceo',
    category: 'narrowbody', era: 'modern', productionYear: 2006, productionStart: 1988, productionEnd: 2020,
    seatCapacity: 150, cargoTons: 2.4, rangeNm: 3300, cruiseSpeedKt: 450, fuelBurnGph: 700, fuelIndex: 0.92,
    purchasePrice: 12_500_000, leaseMonthly: 148_000, maintenancePerFlight: 1360, checkCost: 380_000,
    reliability: 89, passengerAppeal: 83, noise: 40, crewPayMonthly: 10800, engines: 2, minRunwayFt: 6800,
    typicalAskAge: 18, illustrated: true, visual: 'a320',
  },
  {
    id: 'atr72', manufacturer: 'ATR', model: 'ATR 72-600', variant: '72-600', family: 'atr',
    category: 'turboprop', era: 'modern', productionYear: 2011, productionStart: 1989, productionEnd: null,
    seatCapacity: 72, cargoTons: 1.4, rangeNm: 900, cruiseSpeedKt: 275, fuelBurnGph: 190, fuelIndex: 0.62,
    purchasePrice: 6_400_000, leaseMonthly: 52_000, maintenancePerFlight: 540, checkCost: 140_000,
    reliability: 84, passengerAppeal: 60, noise: 64, crewPayMonthly: 6400, engines: 2, minRunwayFt: 4200,
    typicalAskAge: 14, illustrated: true, visual: 'atr',
  },
  {
    id: 'e175', manufacturer: 'Embraer', model: 'E175', variant: 'E175', family: 'ejet',
    category: 'regional', era: 'modern', productionYear: 2012, productionStart: 2004, productionEnd: null,
    seatCapacity: 76, cargoTons: 1.1, rangeNm: 2000, cruiseSpeedKt: 430, fuelBurnGph: 420, fuelIndex: 0.84,
    purchasePrice: 14_200_000, leaseMonthly: 98_000, maintenancePerFlight: 860, checkCost: 220_000,
    reliability: 90, passengerAppeal: 78, noise: 36, crewPayMonthly: 8600, engines: 2, minRunwayFt: 5500,
    typicalAskAge: 12, illustrated: true, visual: 'e175',
  },
  {
    id: 'a330-300', manufacturer: 'Airbus', model: 'A330-300', variant: 'A330-300', family: 'a330',
    category: 'widebody', era: 'modern', productionYear: 2009, productionStart: 1994, productionEnd: null,
    seatCapacity: 277, cargoTons: 11, rangeNm: 6350, cruiseSpeedKt: 470, fuelBurnGph: 1720, fuelIndex: 1.02,
    purchasePrice: 22_000_000, leaseMonthly: 230_000, maintenancePerFlight: 3600, checkCost: 920_000,
    reliability: 90, passengerAppeal: 86, noise: 38, crewPayMonthly: 15600, engines: 2, minRunwayFt: 8800,
    typicalAskAge: 15, illustrated: true, visual: 'a330',
  },
  {
    id: 'b737-max8', manufacturer: 'Boeing', model: '737 MAX 8', variant: 'MAX 8', family: '737max',
    category: 'narrowbody', era: 'current', productionYear: 2019, productionStart: 2017, productionEnd: null,
    seatCapacity: 178, cargoTons: 2.8, rangeNm: 3550, cruiseSpeedKt: 453, fuelBurnGph: 580, fuelIndex: 0.72,
    purchasePrice: 32_000_000, leaseMonthly: 290_000, maintenancePerFlight: 1100, checkCost: 390_000,
    reliability: 91, passengerAppeal: 88, noise: 30, crewPayMonthly: 12400, engines: 2, minRunwayFt: 8000,
    typicalAskAge: 6, illustrated: true, visual: 'max737',
  },
  {
    id: 'a321neo', manufacturer: 'Airbus', model: 'A321neo', variant: 'A321neo', family: 'a320neo',
    category: 'narrowbody', era: 'current', productionYear: 2021, productionStart: 2017, productionEnd: null,
    seatCapacity: 196, cargoTons: 3.1, rangeNm: 4000, cruiseSpeedKt: 450, fuelBurnGph: 620, fuelIndex: 0.7,
    purchasePrice: 46_000_000, leaseMonthly: 380_000, maintenancePerFlight: 1180, checkCost: 420_000,
    reliability: 94, passengerAppeal: 92, noise: 28, crewPayMonthly: 12800, engines: 2, minRunwayFt: 7800,
    typicalAskAge: 4, illustrated: true, visual: 'a321neo',
  },
  {
    id: 'b727-200', manufacturer: 'Boeing', model: '727-200', variant: '727-200', family: '727',
    category: 'narrowbody', era: 'classic', productionYear: 1974, productionStart: 1967, productionEnd: 1984,
    seatCapacity: 155, cargoTons: 2, rangeNm: 2200, cruiseSpeedKt: 470, fuelBurnGph: 1500, fuelIndex: 1.9,
    purchasePrice: 480_000, leaseMonthly: 12_000, maintenancePerFlight: 3600, checkCost: 260_000,
    reliability: 52, passengerAppeal: 34, noise: 92, crewPayMonthly: 7800, engines: 3, minRunwayFt: 7000,
    typicalAskAge: 50, illustrated: true, visual: 'classic737',
  },
  {
    id: 'dc-9-30', manufacturer: 'McDonnell Douglas', model: 'DC-9-30', variant: 'DC-9-30', family: 'dc9',
    category: 'narrowbody', era: 'classic', productionYear: 1972, productionStart: 1965, productionEnd: 1982,
    seatCapacity: 115, cargoTons: 1.4, rangeNm: 1500, cruiseSpeedKt: 430, fuelBurnGph: 920, fuelIndex: 1.7,
    purchasePrice: 420_000, leaseMonthly: 11_000, maintenancePerFlight: 2400, checkCost: 200_000,
    reliability: 55, passengerAppeal: 32, noise: 84, crewPayMonthly: 7200, engines: 2, minRunwayFt: 5600,
    typicalAskAge: 52, illustrated: false, visual: 'md80',
  },
  {
    id: 'e190', manufacturer: 'Embraer', model: 'E190', variant: 'E190', family: 'ejet',
    category: 'regional', era: 'modern', productionYear: 2010, productionStart: 2004, productionEnd: null,
    seatCapacity: 100, cargoTons: 1.5, rangeNm: 2400, cruiseSpeedKt: 440, fuelBurnGph: 520, fuelIndex: 0.88,
    purchasePrice: 13_000_000, leaseMonthly: 110_000, maintenancePerFlight: 980, checkCost: 240_000,
    reliability: 88, passengerAppeal: 76, noise: 38, crewPayMonthly: 9000, engines: 2, minRunwayFt: 6200,
    typicalAskAge: 14, illustrated: false, visual: 'e175',
  },
  {
    id: 'crj900', manufacturer: 'Bombardier', model: 'CRJ-900', variant: 'CRJ-900', family: 'crj',
    category: 'regional', era: 'modern', productionYear: 2008, productionStart: 2001, productionEnd: null,
    seatCapacity: 90, cargoTons: 1.2, rangeNm: 1550, cruiseSpeedKt: 430, fuelBurnGph: 480, fuelIndex: 0.98,
    purchasePrice: 9_200_000, leaseMonthly: 86_000, maintenancePerFlight: 1100, checkCost: 210_000,
    reliability: 84, passengerAppeal: 66, noise: 44, crewPayMonthly: 8200, engines: 2, minRunwayFt: 6200,
    typicalAskAge: 16, illustrated: false, visual: 'crj',
  },
  {
    id: 'a350-900', manufacturer: 'Airbus', model: 'A350-900', variant: 'A350-900', family: 'a350',
    category: 'widebody', era: 'current', productionYear: 2018, productionStart: 2015, productionEnd: null,
    seatCapacity: 325, cargoTons: 16, rangeNm: 8100, cruiseSpeedKt: 488, fuelBurnGph: 1550, fuelIndex: 0.78,
    purchasePrice: 78_000_000, leaseMonthly: 620_000, maintenancePerFlight: 2800, checkCost: 1_200_000,
    reliability: 95, passengerAppeal: 96, noise: 24, crewPayMonthly: 17200, engines: 2, minRunwayFt: 9000,
    typicalAskAge: 6, illustrated: true, visual: 'a330',
  },
  {
    id: 'b787-9', manufacturer: 'Boeing', model: '787-9', variant: '787-9', family: '787',
    category: 'widebody', era: 'current', productionYear: 2017, productionStart: 2014, productionEnd: null,
    seatCapacity: 296, cargoTons: 14, rangeNm: 7635, cruiseSpeedKt: 488, fuelBurnGph: 1480, fuelIndex: 0.76,
    purchasePrice: 72_000_000, leaseMonthly: 580_000, maintenancePerFlight: 2700, checkCost: 1_150_000,
    reliability: 93, passengerAppeal: 95, noise: 24, crewPayMonthly: 17000, engines: 2, minRunwayFt: 9200,
    typicalAskAge: 7, illustrated: true, visual: 'widemodern',
  },
  {
    id: 'b747-400', manufacturer: 'Boeing', model: '747-400', variant: '747-400', family: '747',
    category: 'widebody', era: 'aging', productionYear: 1993, productionStart: 1989, productionEnd: 2009,
    seatCapacity: 416, cargoTons: 18, rangeNm: 7260, cruiseSpeedKt: 490, fuelBurnGph: 3400, fuelIndex: 1.7,
    purchasePrice: 8_500_000, leaseMonthly: 140_000, maintenancePerFlight: 7200, checkCost: 1_600_000,
    reliability: 74, passengerAppeal: 70, noise: 68, crewPayMonthly: 18000, engines: 4, minRunwayFt: 10000,
    typicalAskAge: 31, illustrated: true, visual: 'wideclassic',
  },
  {
    id: 'a380', manufacturer: 'Airbus', model: 'A380-800', variant: 'A380-800', family: 'a380',
    category: 'widebody', era: 'modern', productionYear: 2012, productionStart: 2007, productionEnd: 2021,
    seatCapacity: 525, cargoTons: 12, rangeNm: 8000, cruiseSpeedKt: 488, fuelBurnGph: 3600, fuelIndex: 1.35,
    purchasePrice: 55_000_000, leaseMonthly: 540_000, maintenancePerFlight: 9000, checkCost: 2_200_000,
    reliability: 88, passengerAppeal: 90, noise: 42, crewPayMonthly: 19000, engines: 4, minRunwayFt: 9800,
    typicalAskAge: 12, illustrated: true, visual: 'a330',
  },
  {
    id: 'dc-10', manufacturer: 'McDonnell Douglas', model: 'DC-10-30', variant: 'DC-10-30', family: 'dc10',
    category: 'widebody', era: 'classic', productionYear: 1979, productionStart: 1971, productionEnd: 1989,
    seatCapacity: 270, cargoTons: 12, rangeNm: 5200, cruiseSpeedKt: 470, fuelBurnGph: 2800, fuelIndex: 1.85,
    purchasePrice: 900_000, leaseMonthly: 28_000, maintenancePerFlight: 6400, checkCost: 1_100_000,
    reliability: 54, passengerAppeal: 40, noise: 88, crewPayMonthly: 15000, engines: 3, minRunwayFt: 9500,
    typicalAskAge: 45, illustrated: true, visual: 'wideclassic',
  },
]

for (const extra of EXTRA_AIRCRAFT) AIRCRAFT.push(extra)

export function getType(id: string): AircraftType {
  const t = AIRCRAFT.find((a) => a.id === id)
  if (!t) throw new Error(`Unknown aircraft ${id}`)
  return t
}

/** Types with a finished player livery, plus any later variant whose art is ready. */
const EXTRA_SALE = new Set<string>(READY_TYPES)

export function allowSale(typeId: string) {
  EXTRA_SALE.add(typeId)
}

export function forSaleTypes(): AircraftType[] {
  return AIRCRAFT.filter((t) => t.illustrated || EXTRA_SALE.has(t.id))
}

export function marketShot(typeId: string, roll: number): string {
  const shots = MARKET_PHOTOS[typeId]
  if (shots?.length) return shots[Math.abs(roll) % shots.length]
  return `/assets/aircraft/${typeId}/exterior.jpg`
}

export function illustratedTypes(): AircraftType[] {
  return AIRCRAFT.filter((a) => a.illustrated)
}

export const VISUAL_LABEL: Record<AircraftType['visual'], { cabin: string; cockpit: string; maintenance: string }> = {
  md80: { cabin: 'md80', cockpit: 'md80', maintenance: 'classic' },
  classic737: { cabin: 'classic737', cockpit: 'classic737', maintenance: 'classic' },
  ng737: { cabin: 'ng737', cockpit: 'ng737', maintenance: 'modern' },
  max737: { cabin: 'max737', cockpit: 'max737', maintenance: 'modern' },
  a320: { cabin: 'a320', cockpit: 'a320', maintenance: 'modern' },
  a321neo: { cabin: 'a321neo', cockpit: 'a321neo', maintenance: 'modern' },
  e175: { cabin: 'e175', cockpit: 'ejet', maintenance: 'regional' },
  crj: { cabin: 'crj', cockpit: 'crj', maintenance: 'regional' },
  atr: { cabin: 'atr', cockpit: 'atr', maintenance: 'turbo' },
  b757: { cabin: 'ng737', cockpit: 'b757', maintenance: 'modern' },
  wideclassic: { cabin: 'wideclassic', cockpit: 'wideclassic', maintenance: 'wide' },
  widemodern: { cabin: 'widemodern', cockpit: 'widemodern', maintenance: 'wide' },
  a330: { cabin: 'a330', cockpit: 'a330', maintenance: 'wide' },
  md11: { cabin: 'wideclassic', cockpit: 'md11', maintenance: 'wide' },
}

export type LiveryKey = 'signal' | 'brass' | 'pine' | 'tide' | 'ink'

export const CLEAN_LIVERIES: { key: LiveryKey; name: string; hex: string; description: string }[] = [
  { key: 'signal', name: 'Signal Red', hex: '#c4534a', description: 'Bold international red' },
  { key: 'brass', name: 'Desert Brass', hex: '#c9843d', description: 'Warm desert brass' },
  { key: 'pine', name: 'Alpine Pine', hex: '#3f8f56', description: 'Deep mountain pine' },
  { key: 'tide', name: 'Ocean Tide', hex: '#2f9e8f', description: 'Coastal teal tide' },
  { key: 'ink', name: 'Midnight Ink', hex: '#6d78d8', description: 'Twilight ink blue' },
]

export function getLiveryKey(color?: string): LiveryKey {
  if (!color) return 'signal'
  const c = color.toLowerCase().trim()
  if (c === 'signal' || c === '#c4534a' || c === '#c52828' || c === '#8e1d24' || c === '#7a2432' || c === '#e06a1f' || c === '#e48cae') return 'signal'
  if (c === 'brass' || c === '#c9843d' || c === '#d4a15a' || c === '#c6a15a' || c === '#e2b31a' || c === '#d8c3a5' || c === '#f3e6c8') return 'brass'
  if (c === 'pine' || c === '#3f8f56' || c === '#2f7d45' || c === '#1d4d32' || c === '#1f8a70' || c === '#8fbf3a') return 'pine'
  if (c === 'tide' || c === '#2f9e8f' || c === '#1aa6b8' || c === '#1c6e78' || c === '#7eb6e0') return 'tide'
  if (c === 'ink' || c === '#6d78d8' || c === '#14233d' || c === '#1a3f7a' || c === '#1d4e9c' || c === '#5c3d8f' || c === '#7b4fd0') return 'ink'
  
  if (/^#[0-9a-fA-F]{6}$/.test(c)) {
    const r = Number.parseInt(c.slice(1, 3), 16)
    const g = Number.parseInt(c.slice(3, 5), 16)
    const b = Number.parseInt(c.slice(5, 7), 16)
    const targets: [LiveryKey, number, number, number][] = [
      ['signal', 196, 83, 74],
      ['brass', 201, 132, 61],
      ['pine', 63, 143, 86],
      ['tide', 47, 158, 143],
      ['ink', 109, 120, 216],
    ]
    let bestKey: LiveryKey = 'signal'
    let bestDist = Infinity
    for (const [key, tr, tg, tb] of targets) {
      const dist = (r - tr) ** 2 + (g - tg) ** 2 + (b - tb) ** 2
      if (dist < bestDist) {
        bestDist = dist
        bestKey = key
      }
    }
    return bestKey
  }
  return 'signal'
}

export function getFleetAircraftImage(typeId: string, color?: string): string {
  const livery = getLiveryKey(color)
  return `/assets/aircraft/${typeId}/livery-${livery}.jpg`
}

export function aircraftImage(type: AircraftType, kind: 'exterior' | 'cabin' | 'cockpit' | 'maintenance', color?: string): string {
  if (kind === 'exterior') {
    if (color) return getFleetAircraftImage(type.id, color)
    return `/assets/aircraft/${type.id}/exterior.jpg`
  }
  const key = VISUAL_LABEL[type.visual][kind]
  return `/assets/visual/${kind}-${key}.jpg`
}
