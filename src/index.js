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

function uuid() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
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
console.log(uuid());
