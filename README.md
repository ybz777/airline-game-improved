# Airline 96

**Airline 96** is a browser-based airline management simulator where you build and operate your own airline.

Start with limited capital and grow your airline by acquiring aircraft, opening routes, managing airport gates, setting ticket prices, managing meals and cabin services, and balancing revenue, operating costs, aircraft utilization, and passenger demand.

The project focuses on combining realistic aviation concepts with an accessible management simulation.

---

## Features

### Airline Management

- Start an airline with limited capital
- Manage airline finances
- Track revenue, expenses, and profitability
- Expand your airline over time
- Manage aircraft, routes, airports, gates, crews, and passenger services

### Aircraft Management

- Buy and lease aircraft
- Manage owned and leased aircraft
- Aircraft have individual identities and configurations
- Support for multiple aircraft models and variants
- Aircraft range affects route availability
- Aircraft can be assigned to airline operations
- Player aircraft can use customized exterior colors
- Aircraft market with used-aircraft listings and aircraft information

### Aircraft Market

The aircraft market allows players to search for and acquire aircraft.

Market aircraft can include:

- Different aircraft models and variants
- New and used aircraft
- Aircraft age
- Aircraft condition
- Aircraft history
- Purchase and leasing options
- Aircraft photographs
- Different market listings

Market aircraft retain their real-world aircraft appearance and airline liveries.

Player-owned aircraft are visually separated from market aircraft and can use the player's selected aircraft color.

### Airport Network

- Global airport network
- Real-world airports
- Airport coordinates
- Airport information
- Airport demand
- Airport fees
- Route planning
- Airport-to-airport distance calculations
- Map-based airport visualization

The map uses real geographic locations to make route planning and airline expansion more realistic.

### Route Management

Create and manage airline routes between airports.

Routes take aircraft capabilities into account, including:

- Great-circle distance
- Aircraft range
- Passenger demand
- Ticket prices
- Operating costs
- Airport fees
- Competition

Aircraft that cannot realistically operate a route because of insufficient range are restricted from operating that route.

### Ticket Pricing and Passenger Demand

Players can set ticket prices for their routes.

Passenger demand responds to pricing and competition.

Lower or competitive fares can increase demand, while excessively high fares can significantly reduce passenger demand.

This creates a tradeoff between:

**Higher ticket prices → higher revenue per passenger**

and

**Lower ticket prices → stronger passenger demand**

### Gates

The **Gates** system manages airport gate capacity.

Players can:

- View airport gates
- Own or lease gates
- Assign gates to airline operations
- View gate utilization
- Connect gates to scheduled flights
- Manage airport capacity

New routes require appropriate gate capacity at the airports involved.

### Meals and Cabin Services

The **Meals** system allows airlines to configure passenger meal services.

Available meal categories include:

- Snacks
- Standard meals
- Premium meals
- Cabin meals
- Custom meals

Meals can affect:

- Cost per passenger
- Passenger service
- Cabin configuration
- Airline operations

The project includes visual meal assets for different meal categories.

### Crew and Pilot Management

Airlines require qualified crew to operate flights.

Crew management includes concepts such as:

- Pilot experience
- Flight hours
- Skill
- Fatigue
- Salary
- Reliability
- Aircraft certifications
- Training

Pilots can undergo recurrent training and simulator checks to maintain operational qualifications.

### Airline Operations

The simulator combines multiple operational systems into the airline management loop:

```text
Acquire Aircraft
       ↓
Assign Aircraft
       ↓
Obtain Airport Gates
       ↓
Create Route
       ↓
Set Ticket Price
       ↓
Assign Crew
       ↓
Operate Flights
       ↓
Generate Revenue
       ↓
Pay Operating Costs
       ↓
Evaluate Profitability
       ↓
Expand Airline
```

### Events and Operational Risks

The simulator is designed around dynamic aviation and business events.

Possible events include:

- Weather disruptions
- Aircraft maintenance issues
- Mechanical problems
- Bird strikes
- Crew issues
- Fuel price changes
- Airport disruptions
- Passenger incidents
- Financial events
- Competitor actions
- Market changes
- Operational emergencies

Events can affect aircraft availability, operating costs, passenger demand, reputation, and airline finances.

### Audio and Aviation Atmosphere

The game includes aviation-oriented interface and environmental audio.

The system is designed to support:

- Airport ambience
- Aircraft sounds
- ATC/radio ambience
- Passenger terminal ambience
- Boarding and airport sounds
- Interface button sounds
- Background music

Audio can be controlled through the game's interface.

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- JavaScript
- HTML
- CSS

### Development

- Node.js
- npm
- Git
- GitHub

---

## Project Structure

The project is organized into several major areas.

```text
Airline96/
│
├── public/
│   └── assets/
│       ├── meals/
│       └── other game assets
│
├── src/
│   ├── data/
│   │   └── Game data and configuration
│   │
│   ├── sim/
│   │   └── Simulation and game logic
│   │
│   ├── ui/
│   │   └── React user interface components
│   │
│   └── other application modules
│
├── package.json
├── vite.config.*
├── tsconfig.json
└── README.md
```

The exact project structure may change as development continues.

---

# How to Run

## Requirements

Before running the project, install:

- **Node.js**
- **npm**
- **Git**

Node.js includes npm.

You can verify that they are installed with:

```bash
node --version
npm --version
git --version
```

---

## 1. Clone the Repository

Clone the repository from GitHub:

```bash
git clone https://github.com/ybz777/airline-simulator-game.git
```

Then enter the project directory:

```bash
cd airline-simulator-game
```

---

## 2. Install Dependencies

Install the project's npm dependencies:

```bash
npm install
```

This reads the project's `package.json` and installs the dependencies required by the application.

---

## 3. Start the Development Server

Run:

```bash
npm run dev
```

Vite will start the local development server.

You should see an address similar to:

```text
http://localhost:5173/
```

Open that address in your browser.

---

# Development

The development server supports hot reloading, so changes to the source code can normally be viewed immediately after saving the files.

Typical development workflow:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# Production Build

To create a production build:

```bash
npm run build
```

If the build completes successfully, the production files will be generated by Vite.

To preview the production build locally:

```bash
npm run preview
```

Then open the URL provided by Vite.

---

# Updating the Project

If you already cloned the repository and want to download the latest version:

```bash
git pull origin main
```

Install any newly added dependencies if necessary:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

---

# Saving Changes to GitHub

After making changes:

```bash
git add .
git commit -m "Update Airline 96"
git push origin main
```

If Git reports that the remote repository contains commits that are not present locally, synchronize first:

```bash
git pull origin main --rebase
```

Then:

```bash
git push origin main
```

---

# Gameplay Concept

The long-term goal of Airline 96 is to build a successful airline while managing the financial and operational challenges of commercial aviation.

Players must balance:

- Aircraft acquisition costs
- Leasing costs
- Fuel costs
- Maintenance
- Airport fees
- Gate availability
- Crew costs
- Ticket prices
- Passenger demand
- Aircraft utilization
- Route profitability
- Competition
- Operational risks

A profitable airline is not simply the airline with the most aircraft.

Successful management requires choosing the right aircraft, routes, prices, airport infrastructure, and operating strategy.

---

# Current Development Status

Airline 96 is an actively developed simulation project.

Current development focuses on improving:

- Airline operations
- Aircraft management
- Airport infrastructure
- Route economics
- Passenger demand
- Aircraft market systems
- Crew management
- Meals and passenger services
- Visual presentation
- Audio
- Simulation depth
- Persistent game progression

Features and simulation mechanics may continue to change as the project develops.

---

# Roadmap

Planned or ongoing improvements include:

- Expanded aircraft database
- More aircraft variants
- More airports
- More realistic aircraft market behavior
- Improved airport infrastructure
- More detailed airline economics
- More operational events
- Improved aircraft visualization
- More realistic flight operations
- Improved save/load systems
- Additional competitor airline behavior
- Expanded simulation depth
- Deployment as a playable web application

---

# Design Goals

Airline 96 is designed around several principles:

### Realistic Aviation

Aircraft, airports, routes, and operational constraints should behave in ways that are recognizable to aviation enthusiasts.

### Strategic Management

Players should make meaningful decisions instead of simply clicking through menus.

### Accessible Simulation

The game should provide realistic systems without requiring players to understand every detail of airline operations before they can play.

### Dynamic Gameplay

Aircraft markets, passenger demand, competition, weather, and operational events should prevent every game from following exactly the same path.

---

# License

This project is currently an independent development project.

Refer to the repository for the current licensing status and distribution terms.
