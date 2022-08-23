// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // Clear out any existing data
  tbody.html("");

  // Loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach( val => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Create a variable to keep track of all the filters as an object.
var filters = {};

// Use this function to update the filters. 
function updateFilters() {

  // Save the element that was changed as a variable.
  let changedElement = d3.select(this);
  console.log(`Changed Element: ${changedElement}`);

  // Save the value that was changed as a variable.
  let changedValue = changedElement.property("value");
  console.log(`Changed Value: ${changedValue}`);

  // Save the id of the filter that was changed as a variable.
  let filterId = changedElement.attr("id");
  console.log(`Id changed: ${filterId}`);

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (changedValue) {
    filters[filterId] = changedValue;
  }
  else { delete filters[filterId]};
  
  // Call function to apply all filters and rebuild the table
  filterTable();
  
};
  
  // Use this function to filter the table when data is entered.
  function filterTable() {
    console.log(filters);
    // Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.keys(filters).forEach( key => {
      let userInput = d3.select(`#${key}`).property("value");
      console.log(key);
      console.log(userInput);
      if (key === 'raised_total') {
        filteredData = filteredData.filter(row => row[key] > userInput);
      }
      else {filteredData = filteredData.filter(row => row[key] === userInput);}
    });
  
    // Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  
  // Attach an event to listen for changes to each filter
  d3.selectAll('input').on('change', updateFilters);

  // Build the table when the page loads
  buildTable(tableData);











  
/////////// BAR CHARTS ///////////////

var config = {responsive: true}

//// PARTY COUNT //////////////////////////////////////////////////
// Function to find counts for a key in the data
function findOcc(arr, key){
  let arr2 = [];
  
  arr.forEach( x => {
  if(arr2.some(val => { return val[key] == x[key] })) {
    arr2.forEach(k=>{
      if(k[key] === x[key]){
        k["occurrence"]++
      }
    })
  }else{
    let a = {}
    a[key] = x[key]
    a["occurrence"] = 1
    arr2.push(a);
  }
})
return arr2
}

// find number of occurences for each party
// and store as array
let key = "party"
console.log(findOcc(data, key))
let arr3 = findOcc(data, key)
console.log(arr3)

// define x and y values for horizontal bar chart
let yticks = []
let counts = []

arr3.forEach( x => {
  if (x.party === '3') {
    yticks.push("THIRD")
  }
  else if (x.party === 'R') {
    yticks.push("REP")
  }
  else if (x.party === 'D') {
  yticks.push("DEM")
  }
  console.log(typeof x.party)
  counts.push(x.occurrence)
})

///// PLOT//////
console.log("yticks: " + yticks)
console.log("count : " + counts)
// Trace 
var barData = [{
    x: counts,
    y: yticks,
    type: 'bar',
    orientation: 'h'          
}];

// Layout 
var barLayout = {
    title: {
      text: "Count of Candidates per Party",
      x: 0.10,
    },
    width: 500,
    height: 400,
    margin: {
      l: 50,
      r: 150,
      b: 115,
      t: 85
    }
};
// Plot  
Plotly.newPlot("party_count", barData, barLayout, config);



// //// BAR SUM TOTAL //////////////////////////////////////////////
var sTotal={};
sTotal = data.reduce((sTotal, object) => {
sTotal[object.party] ? sTotal[object.party] += object.raised_total : sTotal[object.party] = object.raised_total;
    return sTotal;
}, sTotal);

console.log(sTotal);

var yticks2 = []
var x = [] 

Object.keys(sTotal).forEach( k => {
  if (k === '3') {
    yticks2.push("THIRD")
  }
  else if (k === 'R') {
    yticks2.push("REP")
  }
  else if (k === 'D') {
    yticks2.push("DEM")
  }
})

Object.values(sTotal).forEach( v => {
  x.push(v)
})
console.log(yticks2)
console.log(x)

// Trace 
var barData2 = [{
  x: x,
  y: yticks2,
  type: 'bar',
  orientation: 'h',
  marker: {
    color: '#FF5733'
  }     
}];

// Layout 
var barLayout2 = {
  title: {
    text: "Total Raised per Party ($)",
    x: 0.10,
  },
  width: 500,
  height: 400,
  margin: {
    l: 50,
    r: 150,
    b: 135,
    t: 65
  }
};
// Plot  
Plotly.newPlot("party_dollars", barData2, barLayout2, config);









///// Count WINS Per Party ////////////////////////////////

// function for win/loss count
function winLossCount(arr, key, key2){
  
  let arr5 = [
    { 
      "party": '3',
      "occurrences": 0
    },
    { 
      "party": 'R',
      "occurrences": 0
    },
    { 
      "party": 'D',
      "occurrences": 0
    }
  ];

  //for each item in array
  arr.forEach( x => {
    arr5.forEach( y => {
      
      if (x[key] === y[key] && x[key2] === "W") {
        if (y["occurrences"] === 0) {
          y["occurrences"] += 1
        }
        else {
          y["occurrences"] ++
        }
      }
    })
  })
return arr5
};

// Count wins per party
key = "party";
var key2 = "preds";
let wlCounts = winLossCount(data,key,key2);
console.log(wlCounts);

/////// PLOT WINS ////////////////////////////////////////
let wins = [];
let yticks3 = [];

wlCounts.forEach(x => {
  if (x.party === '3') {
    yticks3.push("THIRD")
  }
  else if (x.party === 'R') {
    yticks3.push("REP")
  }
  else if (x.party === 'D') {
  yticks3.push("DEM")
  };
  wins.push(x["occurrences"]);
})
console.log("------")
console.log(wins, yticks3)
// Trace 
var barData3 = [{
  x: wins,
  y: yticks3,
  type: 'bar',
  orientation: 'h',
  marker: {
    color: 'green'
  }           
}];

// Layout 
var barLayout3 = {
  title: {
    text: "Total Wins per Party",
    x: 0.10,
  },
  width: 500,
  height: 400,
  margin: {
    l: 50,
    r: 150,
    b: 175,
    t: 25
  }
};
// Plot  
Plotly.newPlot("win_counts", barData3, barLayout3, config);





////////////// HEATMAP /////////////////////

d3.csv("states_raised_totals.csv", function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var mapData = [{
          type: 'choropleth',
          locationmode: 'USA-states',
          locations: unpack(rows, 'State'),
          z: unpack(rows, 'Total'),
          text: unpack(rows, 'State'),
          zmin: 100,
          zmax: 100000000,
          colorscale: [
              [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
              [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
              [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
          ],
          colorbar: {
              title: 'USD',
              thickness: 5
          },
          marker: {
              line:{
                  color: 'rgb(255,255,255)',
                  width: 2
              }
          }
      }];


      var layout = {
        title: {
          text: "Total Raised by State ($)",
          x: 0.10,
        },
          geo:{
              scope: 'usa',
              showlakes: true,
              lakecolor: 'rgb(255,255,255)'
          },
          width: 500,
          height: 375,
          margin: {
            l: 20,
            r: 200,
            b: 60,
            t: 100
          }
      };

      Plotly.newPlot("chloropleth", mapData, layout, config);
});