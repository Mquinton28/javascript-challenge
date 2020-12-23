// from data.js
var tableData = data;

//Get references table
var tbody = d3.select('#target-table-display');
console.log(tableData);

var button = d3.select('#filter-btn-date');
var inputField = d3.select('#datetime');

varcityButton = d3.select('#filter-btn-city');
varcityInput = d3.select('#cityname');

varstatesubmitButtion = d3.select('#filter-btn-state');
var stateInput = d3.select('#statename');

var countrysubmitButtion = d3.select('#filter-btn-country');
var countryInput = d3.select('#countryname');

var shapesubmitButtion = d3.select('#filter-btn-shape');
var shapesInput = d3.select('#shapename');



//Arrow function to append the tableData
data.forEach(ufo => {
    var row = tbody.append('tr');
    Object.values(ufo).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

button.on('click', function() {
    tbody.html('');

    // prevent page from refreshing
    d3.event.preventDefault();

    var inputData = d3.select('#datetime');

    var inputValue = inputData.property('value');

    console.log(inputValue);

    var inputArray = data.filter(one => one.datetime === inputElement);
    
});

inputArray.forEach((selection) => {
    var row = tbody.append('tr');
    Object.entries(selection).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

// Level 2
cityButton.on('click', function() {
    tbody.html('');
    d3.event.preventDefault();
    console.log('You just clicked the filter by city button');
    var cityInput = cityinputField.property('value');
    console.log(cityInput);
    var cityinputArray = data.filter(two => two.city === cityInput);
    console.log(cityInputArray);
    
    cityinputArray.forEach((selects) => {
    var brow = tbody.append('tr');
    Object.entries(selects).forEach([key,value]) => {
        var bcell = brow.append('td');
        bcell.text(value);
    }

    });
});

stateButton.on('click', function() {
    tbody.html('');
    d3.event.preventDefault();
    console.log('You just clicked the filter by state button');

    var stateInput = stateinputField.property('value');
    console.log(stateInput);
    var stateinputArray = data.filter(three => three.state === stateInput);
    console.log(stateinputArray);

    // Display the html file and append it
    stateinputArray.forEach((selectss) => {
        var crow = tbody.append('tr');
        Object.entries(selectss).forEach(([key,value]) => {
            var ccell = crow.append('td');
            ccell.text('value');
        });
    });
});

countryButton.on('click', function() {
    tbody.html('');
    d3.event.preventDefault();
    console.log('You just clicked the filter by country button');

    var countryInput = countryinputField.property('value');
    console.log(countryInput);
    var countryinputArray = data.filter(four => four.country === countryInput);
    console.log(countryinputArray);

    // Display the html file and append it
    countryinputArray.forEach((selectss) => {
        var drow = tbody.append('tr');
        Object.entries(selectss).forEach(([key,value]) => {
            var dcell = drow.append('td');
            dcell.text('value');
        });
    });
});

shapeButton.on('click', function() {
    tbody.html('');
    d3.event.preventDefault();
    console.log('You just clicked the filter by sshape button');

    var shapeInput = shapeinputField.property('value');
    console.log(stateInput);
    var shapeinputArray = data.filter(five => five.shape === shapeInput);
    console.log(shapeinputArray);

    // Display the html file and append it
    shapeinputArray.forEach((selectss) => {
        var erow = tbody.append('tr');
        Object.entries(selectss).forEach(([key,value]) => {
            var ecell = erow.append('td');
            ecell.text('value');
        });
    });
});

//event listener
inputData.on('change', changeHandler)
button.on('click', changeHandler)