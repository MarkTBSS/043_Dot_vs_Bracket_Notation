'use strict';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

readline.question('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends\n', (interestedIn) => {
    if (jonas[interestedIn]) {
        console.log(jonas[interestedIn]);
    } else {
        console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
    }
    readline.close();
});

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);