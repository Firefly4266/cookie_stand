'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// displays individual store data for my Salmon Cookie Shops
function Location(name, minCustomers, maxCustomers, avgCookies, totalCookies) {
  this.name = name,
  this.minCustomers = minCustomers,
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies,
  this.totalCookies = 0,
  this.cookieArray = []
};

Location.prototype.cookies = function() { 
  for(var i = 0; i < hours.length; i++) {
    var amount = Math.round(Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers)) + this.minCustomers) * this.avgCookies);
    this.cookieArray.push(amount);
  }
    return amount;
};

Location.prototype.totals = function(){
  var total = 0;
  for (var i = 0; i < hours.length; i++) {
    total += this.cookieArray[i];
  }
    this.cookieArray.push(total);
    this.totalCookies = total;
    return total;
};

let firstAndPike = new Location('1st and Pike', 23,65,6.3);
// console.log(firstAndPike);

let table_hours = [ ' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function injectHours(){
  var cookieTable = document.getElementById('cookie_table');
  var firstRow = document.createElement('tr');

  for (var i = 0; i < hours.length; i++) {
    var hourField = document.createElement('th');
    hourField.textContent = table_hours[i];
    firstRow.appendChild(hourField);
  }
  cookieTable.appendChild(firstRow);
};

function injectTotals() {
  var cookie_table = document.getElementById(cookie_table);

  var second_row = document.createElement('tr');
  var mt_field = document.getElementById('th');
  mt_field.textContent = Totals;
  second_row.appendChild(mt_field);

for (var i = 0; i < table_hours.length; i++) {
  var totalHours = 0;
  
}




