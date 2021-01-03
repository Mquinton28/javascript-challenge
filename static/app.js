// from data.js
var tableData = data;

//Get references table
var tbody = d3.select('tbody');
console.log(tableData);

var button = d3.select('#filter-btn-date');
var inputField = d3.select('#datetime');

varcityButton = d3.select('#filter-btn-city');
varcityInput = d3.select('#cityname');

varstatesubmitButtion = d3.select('#filter-btn-state');
var stateInput = d3.select('#statename');

var countrysubmitButtion = d3.select('#filter-btn-country');
var countryInput = d3.select('#countryname');



//Arrow function to append the tableData
data.forEach((ufo) => {
    var row = tbody.append('tr');
    Object.values(ufo).forEach((value) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

var filteredData = d3.select('filter-btn');

filteredData.on('click', function() {

    // prevent page from refreshing
    d3.event.preventDefault();

    var inputData = d3.select('#datetime');

    var inputValue = inputData.property('value');

    console.log(inputValue);

    var filteredData = tableData.filter(row => row.datetime === inputValue);

    console.log(filteredData);

});


// var columns = ["datetime", "city", "state", "country", "shape", "comments"]
// var inputData = d3.select('#datetime')

// function findData(data) {
//     tbody.text('')
//     data.forEach(function(sighting){
//         input_tr = tbody.append('tr')
//         Object.entries(sighting).forEach(function([key, vlaue]){
//             input_td = input_tr.append('td').text(value)
//         })
//     })
// }

// findData(tableData)

// // filter data to find date
// function findDate() {
//     d3.event.preventDefault();
//     console.log(inputData.property('value'));var updatedTable = tableData.filter(sighting => sighting.datetime===inputData.property('value'))
//     findData(updatedTable);
// }

//event listener
// inputData.on('change', changeHandler)
// button.on('click', changeHandler)