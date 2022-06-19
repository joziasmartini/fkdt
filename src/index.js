"use strict";

import {
  personMaleNames,
  personFemaleNames,
  petNames,
  jobTitles,
  countryNames,
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

export function username() {
  let nameOne = name();
  let nameTwo = name();
  let charNumber = 0;
  while (charNumber < 2) {
    charNumber = randomNumber(5);
  }
  nameOne = nameOne.slice(0, charNumber);
  nameTwo = nameTwo.slice(0, charNumber);
  return `${nameOne}${nameTwo}`.toLowerCase();
}

export function ip() {
  let ip = "x.x.x.x";

  for (let i = 0; i < 12; i++) {
    ip = ip.replace("x", randomNumber(127));
  }

  return ip;
}

export function country() {
  return randomFromArray(countryNames);
}

export function latitude() {
  return `${randomNumber(99)}.${randomNumber(9999)}`;
}

export function longitude() {
  return `-${randomNumber(99)}.${randomNumber(9999)}`;
}

console.log(name());
console.log(age());
console.log(phone());
console.log(job());
console.log(pet());
console.log(uuid());
console.log(password());
console.log(username());
console.log(ip());
console.log(country());
console.log(latitude());
console.log(longitude());
