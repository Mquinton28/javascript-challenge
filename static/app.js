// from data.js
var tableData = data;

//Get references
var tbody = d3.select('tbody')
var columns = ["datetime", "city", "state", "country", "shape", "comments"]
var inputData = d3.select('#datetime')
var button = d3.select('filter-btn')

function findData(data) {
    tbody.text('')
    data.forEach(function(sighting){
        input_tr = tbody.append('tr')
        Object.entries(sighting).forEach(function([key, vlaue]){
            input_td = input_tr.append('td').text(value)
        })
    })
}

findData(tableData)

// filter data to find date
function findDate() {
    d3.event.preventDefault();
    console.log(inputData.property('value'));var updatedTable = tableData.filter(sighting => sighting.datetime===inputData.property('value'))
    findData(updatedTable);
}

//event listener
inputData.on('change', changeHandler)
button.on('click', changeHandler)