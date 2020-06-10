// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach((info) => {
  var row = tbody.append("tr");
  Object.entries(info).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(list => list.datetime === inputValue);

  console.log(filteredData);

  if (inputValue == "") {
    tbody.selectAll("td").remove();
    tableData.forEach((UFOData) => {
      var tbody = d3.select("tbody");

      var row = tbody.append("tr");
      Object.entries(UFOData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }

  else {
    tbody.selectAll("td").remove();
    filteredData.forEach((UFOData) => {
      var tbody = d3.select("tbody");

      var row = tbody.append("tr");
      Object.entries(UFOData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
};




