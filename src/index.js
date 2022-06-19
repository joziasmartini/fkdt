"use strict";

import {
  personMaleNames,
  personFemaleNames,
  petNames,
  jobTitles,
  countryNames,
  vowels,
  consonants,
} from "./data.js";

// Helpers
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
export function generatedName() {
  let name = [
    randomFromArray(vowels).toUpperCase(),
    randomFromArray(consonants),
    randomFromArray(vowels),
    randomFromArray(consonants),
    randomFromArray(vowels),
  ];
  return name.join("");
}

export function name() {
  return Math.random() > 0.5
    ? randomFromArray(personMaleNames)
    : randomFromArray(personFemaleNames);
}

export function age() {
  return randomNumber(100, 18);
}

export function phone() {
  let number = "(xxx) xxx-xxxx";

  for (let i = 0; i < 10; i++) {
    number = number.replace("x", randomNumber(10, 0));
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
  let charNumber = randomNumber(5, 2);
  nameOne = nameOne.slice(0, charNumber);
  nameTwo = nameTwo.slice(0, charNumber);
  return `${nameOne}${nameTwo}`.toLowerCase();
}

export function ip() {
  let ip = "x.x.x.x";

  for (let i = 0; i < 12; i++) {
    ip = ip.replace("x", randomNumber(127, 0));
  }

  return ip;
}

export function country() {
  return randomFromArray(countryNames);
}

export function latitude() {
  return `${randomNumber(99, 11)}.${randomNumber(9999, 1111)}`;
}

export function longitude() {
  return `-${randomNumber(99, 11)}.${randomNumber(9999, 1111)}`;
}

console.log(generatedName());
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

for (let i = 0; i < 100; i++) {
  console.log(generatedName() + " " + generatedName());
}
