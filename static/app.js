// from data.js
var tableData = data;

<<<<<<< HEAD
// select tbody frmo index.html
=======
//Get references table
var tbody = d3.select('tbody');
console.log(tableData);
>>>>>>> 07c0b6d4e1cbd1bad1fd0c68ee1e8b7e84f2282d

tbody = d3.select("tbody")

// use Object.entries to get key, value data inside of the table

// and loop through them to add to the table in html

function displayData(data) {

<<<<<<< HEAD
    tbody.text("")

    data.forEach(function (sighting) {
=======
>>>>>>> 07c0b6d4e1cbd1bad1fd0c68ee1e8b7e84f2282d

        new_tr = tbody.append("tr")

<<<<<<< HEAD
        Object.entries(sighting).forEach(function ([key, value]) {

            new_td = new_tr.append("td").text(value)
=======
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
>>>>>>> 07c0b6d4e1cbd1bad1fd0c68ee1e8b7e84f2282d

        })

    })
}

displayData(tableData)

//select the user's input and the filter button

<<<<<<< HEAD
var dateInputText = d3.select("#datetime")

var button = d3.select("filter-btn")

// filter data with user input date

function clickSelect() {

    //don't refresh the page!

    d3.event.preventDefault();

    //print the value that was input

    console.log(dateInputText.property("value"));

    //create a new table showing only the filterd data

    var new_table = tableData.filter(sighting => sighting.datetime === dateInputText.property("value"))

    //display the new table

    displayData(new_table);

}

// event listener to handle change and click

dateInputText.on("change", clickSelect)
=======
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
>>>>>>> 07c0b6d4e1cbd1bad1fd0c68ee1e8b7e84f2282d
