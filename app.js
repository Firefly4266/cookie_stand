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

Location.prototype.cookies = function() { 
  for(var i = 0; i < hours.length; i++) {
    var amount = Math.round(Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers)) + this.minCustomers) * this.avgCookies);
    this.cookieArray.push(amount);
  }
  console.log(amount);
  return amount;
};

Location.prototype.totals = function(){
  var total = 0;
  for (var i = 0; i < hours.length; i++) {
    total += this.cookieArray[i];
  }
    this.cookieArray.push(total);
    this.totalCookies = total;
    console.log(total);
    return total;  
};

//use object-oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand  

var table_hours = [ ' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Totals'];

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

function injectTotals() {
  var cookie_table = document.getElementById(cookie_table);

  var second_row = document.createElement('tr');
  var mt_field = document.getElementById('th');
  mt_field.textContent = Totals;
  second_row.appendChild(mt_field);

  for (var i = 0; i < table_hours.length; i++) {
   var total = 0;
   for(j = 0; j < locationsArray; j++) {
    total += locationsArray[j].cookieArray[i]
   }
   var totals_field = document.createElement('td');
   totals_field.textContent = total;
   second_row.appendChild(totals_field);
  };
   cookie_table.appendChild(second_row);
};

Location.prototype.injection = function() {
  var cookie_table = document.getElementById('cookie_table');
  var cookie_row = document.createElement('tr');
  var header_row = document.createElement('th');
  header_row.textContent = this.name;
  cookie_row.appendChild(header_row);

  for(var i = 0; i < this.cookieArray.length; i++){
    var table_field = document.createElement('td');
    table_field.textContent = this.cookieArray[i];
    cookie_row.appendChild(table_field);
  }
  cookie_table.appendChild(cookie_row);
};

injectHours();

var firstAndPike = new Location('1st and Pike', 23,65,6.3);
console.log(firstAndPike);
firstAndPike.cookies();
firstAndPike.totals();
firstAndPike.injection();
locationsArray.push(firstAndPike);

var seaTacAirport = new Location('seaTacAirport',3,24,1.2,[]);
console.log(seaTacAirport);
seaTacAirport.cookies();
seaTacAirport.totals();
seaTacAirport.injection();
locationsArray.push(seaTacAirport);
  
var seattleCenter = new Location('seattleCenter',11,38,3.7,[]);
console.log(seattleCenter);
seattleCenter.cookies();
seattleCenter.totals();
seattleCenter.injection();
locationsArray.push(seattleCenter);

var capitolHill = new Location('capitolHill',20,38,2.3,[]);
console.log(capitolHill);
capitolHill.cookies();
capitolHill.totals();
capitolHill.injection();
locationsArray.push(capitolHill);

var alkiBeach = new Location('alkiBeach',2,16,4.6,[]);
console.log(alkiBeach);
alkiBeach.cookies();
alkiBeach.totals();
alkiBeach.injection();
locationsArray.push(alkiBeach);



