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

function randomStringWithNumbers(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Functions
export function name() {
  return Math.random() > 0.5
    ? randomFromArray(personMaleNames)
    : randomFromArray(personFemaleNames);
}

export function age() {
  return randomNumber(100);
}

export function phone() {
  let number = "(xxx) xxx-xxxx";

  for (let i = 0; i < 10; i++) {
    number = number.replace("x", randomNumber(10));
  }

  return number;
}

export function job() {
  return randomFromArray(jobTitles);
}

export function pet() {
  return randomFromArray(petNames);
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

export function password() {
  return randomStringWithNumbers(8);
}

console.log(name());
console.log(age());
console.log(phone());
console.log(job());
console.log(pet());
console.log(uuid());
console.log(password());
