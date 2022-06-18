"use strict";

import {
  personMaleNames,
  personFemaleNames,
  petNames,
  jobTitles,
} from "./data.js";

// Helpers
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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

export function phone() {
  let mask = "(xxx) xxx-xxxx";
  let numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }

  numbers.forEach((item) => {
    mask = mask.replace("x", item);
  });

  return mask;
}

export function age() {
  return randomNumber(100);
}

export function pet() {
  return randomFromArray(petNames);
}

export function job() {
  return randomFromArray(jobTitles);
}

console.log(name());
console.log(age());
console.log(pet());
console.log(phone());
console.log(job());
