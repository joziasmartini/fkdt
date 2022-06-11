"use strict";

// Helpers
function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Functions
export function personName(genre) {
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

export function personAge() {
  return randomNumber(100);
}

export function petName() {
  return randomFromArray(petNames);
}

export function phoneNumber() {
  return randomFromArray(phoneNumbers);
}

console.log(personName());
console.log(personAge());
console.log(petName());
console.log(phoneNumber());
