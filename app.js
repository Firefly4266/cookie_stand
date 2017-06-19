'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locationsArray = [];

function Location(name, minCustomers, maxCustomers, avgCookies, totalCookies) {
  this.name = name,
  this.minCustomers = minCustomers,
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies,
  this.totalCookies = 0,
  this.cookieArray = []
};

//generate random numbers for the different locations
Location.prototype.cookies = function() { 
  for(var i = 0; i < hours.length; i++) {
    var amount = Math.round(Math.ceil(Math.random() * ((this.maxCustomers - this.minCustomers)) + this.minCustomers) * this.avgCookies);
    this.cookieArray.push(amount);
  }
  return amount;
};

//method to calculate daily totals
Location.prototype.totals = function(){
  var total = 0;
  for (var i = 0; i < hours.length; i++) {
    total += this.cookieArray[i];
  }
    this.cookieArray.push(total);
    this.totalCookies = total;
    return total;  
};

var table_hours = [ ' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Totals'];

//creating hour fields across the top of the table
function injectHours(){
  var cookieTable = document.getElementById('cookie_table');
  var firstRow = document.createElement('tr');
  for (var i = 0; i < table_hours.length; i++) {
    var hourField = document.createElement('th');
    hourField.textContent = table_hours[i];
    firstRow.appendChild(hourField);
  }
  cookieTable.appendChild(firstRow);
};

//adding store location name fields and adding hourly cookie sales fields
Location.prototype.injection = function() {
  var cookie_table = document.getElementById('cookie_table');
  var cookie_head = document.createElement('thead');
  var cookie_row = document.createElement('tr');
  var header_row = document.createElement('th');
  header_row.textContent = this.name;
  cookie_row.appendChild(header_row);
  cookie_head.appendChild(cookie_row);
  for(var i = 0; i < this.cookieArray.length; i++){
    var table_field = document.createElement('td');
    table_field.textContent = this.cookieArray[i];
    cookie_row.appendChild(table_field);
  }
  cookie_table.appendChild(cookie_row);
};

injectHours();

//methods to run on all stores
Location.prototype.methods = function() {
  this.cookies();
  this.totals();
  this.injection();
  locationsArray.push(this);
}

//creating new store instances
var firstAndPike = new Location('1st and Pike', 23,65,6.3);
firstAndPike.methods();

var seaTacAirport = new Location('Sea Tac Airport',3,24,1.2);
seaTacAirport.methods();
  
var seattleCenter = new Location('Seattle Center',11,38,3.7);
seattleCenter.methods();

var capitolHill = new Location('Capitol Hill',20,38,2.3);
capitolHill.methods();

var alkiBeach = new Location('Alki Beach',2,16,4.6);
alkiBeach.methods();

//adding footer with hourly total
function footer() {
  var cookie_table = document.getElementById('cookie_table');
  var cookie_footer = document.createElement('tfoot');
  var cookie_row = document.createElement('tr');
  var header_row = document.createElement('th');
  header_row.textContent = 'Hourly Totals';
  cookie_row.appendChild(header_row);
  cookie_footer.appendChild(cookie_row);
  cookie_table.appendChild(cookie_footer);
  for (var i = 0; i < table_hours.length - 1; i++) {
    var total = 0;
    for (var j = 0; j < locationsArray.length; j++) {
      total += locationsArray[j].cookieArray[i];
      var table_field = document.createElement('td');
      table_field.textContent = total;   
    }
    cookie_row.appendChild(table_field);
    cookie_footer.appendChild(cookie_row);
    cookie_table.appendChild(cookie_footer);
  }
}footer();

//adding a new form
var formEl = document.getElementById('cookie-form');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
  var new_spot = event.target.name.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var average = event.target.avgCookies.value;
  var newSpot = new Location(new_spot, min, max, average);
  console.log(newSpot);
  newSpot.cookies();
  newSpot.totals();
  newSpot.injection();
  locationsArray.push(newSpot);
  formEl.reset();
  document.getElementById('cookie_table').deleteTFoot();
  footer();
});


