'use strict';

// Define the myCountry object with necessary properties
const myCountry = {
  country: 'Finland',
  population: 6,
  language: 'Finnish',
  neighbours: ['Sweden', 'Norway', 'Russia'],
  capital: 'Helsinki'
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);