'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// displays individual store data for my Salmon Cookie Shops

var firstAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  sumCookies: [],
  cookies: function() { 
    var amount = Math.round(Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers)) + this.minCustomers) * this.avgCookies);
    this.sumCookies.push(amount);
    return amount;
  }
};

//use object-oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand  

var injection = document.getElementById('firstAndPike');
console.log(injection);


for (var i = 0; i < hours.length; i++) { // represent the store data in a list format on the sales page
  var listElement = document.createElement('li');
  listElement.setAttribute('class', 'hours');
  listElement.textContent = hours[i] + ': ' + firstAndPike.cookies() + ' cookies sold';
  injection.appendChild(listElement);
}

var total = 0;
for (var i = 0; i < firstAndPike.sumCookies.length; i++) {
  total += firstAndPike.sumCookies[i];
};

console.log(firstAndPike.sumCookies);
console.log(total);


let seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2
};

let seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7
};

let capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3
};

let alkiBeach = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6
};


