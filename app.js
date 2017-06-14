'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// displays individual store data for my Salmon Cookie Shops

var Location = function(name, minCustomers, maxCustomers, avgCookies, sumCookies) {
  this.name = name,
  this.minCustomers = minCustomers,
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies,
  this.sumCookies = sumCookies
}

Location.prototype.cookies = function() { 
  var amount = Math.round(Math.floor(Math.random() * ((this.maxCustomers - this.minCustomers)) + this.minCustomers) * this.avgCookies);
  this.sumCookies.push(amount);
  return amount;
}


let firstAndPike = new Location('1st and Pike', 23,65,6.3, []);
console.log(firstAndPike);


//use object-oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand  

function injection() {
  document.getElementById('firstAndPike');
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

} 

let seaTacAirport = new Location('seaTacAirport',3,24,1.2,[]);
console.log(seaTacAirport);
injection = document.getElementById('seaTacAirport');
console.log(injection);
  
let seattleCenter = new Location('seattleCenter',11,38,3.7,[]);
console.log(seattleCenter);
injection = document.getElementById('seattleCenter');
console.log(injection);

let capitolHill = new Location('capitolHill',20,38,2.3,[]);
console.log(capitolHill);
injection = document.getElementById('capitolHill');
console.log(injection);

let alkiBeach = new Location('alkiBeach',2,16,4.6,[]);
console.log(alkiBeach);
injection = document.getElementById('alkiBeach');
console.log(injection);



