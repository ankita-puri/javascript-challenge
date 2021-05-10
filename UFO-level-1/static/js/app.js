// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
});

// Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
    var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each weather report value
 data.forEach(function(ufoSighting) {
   console.log(ufoSighting);
    var row = tbody.append("tr");

Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
   });
 });


        
