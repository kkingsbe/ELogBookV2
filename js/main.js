var flights_sample_data = 
[
  {
    id: "1",
    date: "2020-2-1",
    tailnum: "N2277T",
    type: "C-172SP",
    origin: "KGAI",
    destination: "KWWD",
    fltTime: "1.7",
    aircraftCategory: "Airplane SEL",
    instActual: "0.0",
    instSim: "0.0",
    instApproaches: "none",
    instHolds: "none",
    instNavTrack: "none",
    simOrFTD: "0.0",
    landingsDay: "1",
    landingsNight: "0",
    groundTraining: "0.0",
    flightTraining: "1.7",
    xc: "1.7",
    night: "0.0",
    solo: "0.0",
    pic: "1.7"
  },
  {
    id: "2",
    date: "2020-2-2",
    tailnum: "N2277T",
    type: "C-172SP",
    origin: "KGAI",
    destination: "KWWD",
    fltTime: "1.7",
    aircraftCategory: "Airplane SEL",
    instActual: "0.0",
    instSim: "0.0",
    instApproaches: "none",
    instHolds: "none",
    instNavTrack: "none",
    simOrFTD: "0.0",
    landingsDay: "1",
    landingsNight: "0",
    groundTraining: "0.0",
    flightTraining: "1.7",
    xc: "1.7",
    night: "0.0",
    solo: "0.0",
    pic: "1.7"
  },
  {
    id: "3",
    date: "2020-2-3",
    tailnum: "N2277T",
    type: "C-172SP",
    origin: "KGAI",
    destination: "KWWD",
    fltTime: "1.7",
    aircraftCategory: "Airplane SEL",
    instActual: "0.0",
    instSim: "0.0",
    instApproaches: "none",
    instHolds: "none",
    instNavTrack: "none",
    simOrFTD: "0.0",
    landingsDay: "1",
    landingsNight: "0",
    groundTraining: "0.0",
    flightTraining: "1.7",
    xc: "1.7",
    night: "0.0",
    solo: "0.0",
    pic: "1.7"
  }
]

var tableCols = [["id","ID"], ["date","Date"], ["tailnum","Tail #"], ["type","Type"], ["origin","Origin"], ["destination","Destination"], ["fltTime","Flight Time"]]

var table = $(".flights-table")

function loadFlights() {
  loadHeaders()
  flights_sample_data.forEach(flight => {
    let row = document.createElement("div")
    row.classList.add("flights-table-item")

    tableCols.forEach(col => {
      let cell = document.createElement("div")
      cell.classList.add("flights-table-cell")
      
      cell.innerHTML = (`<p>${flight[col[0]]}</p>`)
      row.appendChild(cell)
    })
    console.log(row)
    table.append(row)
  })
}

function loadHeaders() {
  let headers = document.createElement("div")
  headers.classList.add("flights-table-header")
  tableCols.forEach(col => {
    let cell = document.createElement("div")
    cell.classList.add("flights-table-cell")
    cell.innerHTML = (`<p>${col[1]}</p>`)
    headers.appendChild(cell)
  })
  table.append(headers)
}

loadFlights()