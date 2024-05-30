// var generateName = require('sillyname');
import generateName from "sillyname"; //same as above in EJS

var sillyName = generateName();
console.log(`My name is ${sillyName}.`);


import {randomSuperhero} from 'superheroes';

const name = randomSuperhero();
console.log(`I am ${name}!`);

