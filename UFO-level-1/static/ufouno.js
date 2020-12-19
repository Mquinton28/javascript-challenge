// from data.js
var tableData = data;

// Setting up table data and the columns
var tbody = d3.select('tbody');
var button = d3.select('#filter-btn');
var inputField1 = d3.select('#datetime-input');
var inputField2 = d3.select('#city');
var resetbtn = d3.select('#reset-btn');
var columns = ['datetime', 'city', 'state', 'country', 'shape', 'comment'];

var populate = (dataInput) => {
    dataInput.forEach(ufo_sightings => {
        var row = tbody.append('tr');
        columns.forEach(column => row.append('td').text(ufo_sightings[column])
        )
    });
}


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.