// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// console.log(data);



// Step 3:  Use `Object.entries` to console.log each weather report value
 data.forEach(function(ufoSighting) {
  // console.log(ufoSighting);
    var row = tbody.append("tr");

Object.entries(ufoSighting).forEach(function([key, value]) {
      // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
   });
 });

// Assign the data from `data.js` to a descriptive variable
//

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log('inputValue',inputValue);
 // console.log('tableData',tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log('filteredData',filteredData);
  tbody.html("")
  filteredData.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
      var row = tbody.append("tr");
  
  Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
     });
   });
};
     
