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
      filteredData = filteredData.filter(row => row[key] === userInput);
    });
  
    // Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  
  // Attach an event to listen for changes to each filter
  d3.selectAll('input').on('change', updateFilters);

  // Build the table when the page loads
  buildTable(tableData);











  
/////////// BAR CHART ///////////////

// find number of occurences for each party
function findOcc(arr, key){
  let arr2 = [];
  
  arr.forEach( x => {
  if(arr2.some(val => { return val[key] == x[key]})) {
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

let key = "party"
console.log(findOcc(data, key))

let arr3 = findOcc(data, key)
console.log(arr3)


// Create Bar Chart
// define x and y values
let yticks = []
let counts = []
arr3.forEach( x => {
  yticks.push(x.party)
  console.log(typeof x.party)
  counts.push(x.occurrence)
})


console.log("yticks: " + yticks)
console.log("count : " + counts)
// Trace 
var barData = [{
    x: counts,
    y: yticks.toString(),
    type: 'bar',
    orientation: 'h'          
}];

// Layout 
var barLayout = {
    title: "Number of Candidates per Party",
    margin: {
      l: 125,
      r: 125,
      b: 80,
      t: 90
    }
};
// Plot  
Plotly.newPlot("plotArea", barData, barLayout);
