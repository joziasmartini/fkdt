"use strict";

import {
  personMaleNames,
  personFemaleNames,
  petNames,
  phoneNumbers,
  jobTitles,
} from "./data.js";

// Helpers
function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Functions
export function name(genre) {
  if (genre) {
    if (genre === "male") {
      return randomFromArray(personMaleNames);
    }
    return randomFromArray(personFemaleNames);
  } else {
    if (Math.random() > 0.5) {
      return randomFromArray(personMaleNames);
    }
    return randomFromArray(personFemaleNames);
  }
}

export function age() {
  return randomNumber(100);
}

export function pet() {
  return randomFromArray(petNames);
}

export function phone() {
  return randomFromArray(phoneNumbers);
}

export function job() {
  return randomFromArray(jobTitles);
}

console.log(name());
console.log(age());
console.log(pet());
console.log(phone());
console.log(job());
