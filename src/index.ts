"use strict";

import {
  personMaleNames,
  personFemaleNames,
  petNames,
  jobTitles,
  countryNames,
  emailDomains,
  stateNames,
  interests,
  colors,
} from "./data.js";

import {
  randomElementFromArray,
  randomNumber,
  randomStringWithNumbers,
} from "./helpers.js";

export function name() {
  return Math.random() > 0.5
    ? randomElementFromArray(personMaleNames)
    : randomElementFromArray(personFemaleNames);
}

export function age() {
  return randomNumber(18, 100);
}

export function phone() {
  let number: any = "(xxx) xxx-xxxx";
  for (let i = 0; i < 10; i++) {
    number = number.replace("x", randomNumber(0, 10));
  }
  return number;
}

export function job() {
  return randomElementFromArray(jobTitles);
}

export function interest() {
  return randomElementFromArray(interests);
}

export function color() {
  return randomElementFromArray(colors);
}

export function pet() {
  return randomElementFromArray(petNames);
}

export function uuid() {
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
  let charNumber = randomNumber(2, 5);
  nameOne = nameOne.slice(0, charNumber);
  nameTwo = nameTwo.slice(0, charNumber);
  return `${nameOne}${nameTwo}`.toLowerCase();
}

export function ip() {
  let ip: any = "x.x.x.x";
  for (let i = 0; i < 12; i++) {
    ip = ip.replace("x", randomNumber(127, 0));
  }
  return ip;
}

export function country() {
  return randomElementFromArray(countryNames);
}

export function state() {
  return randomElementFromArray(stateNames);
}

export function latitude() {
  return `${randomNumber(11, 99)}.${randomNumber(1111, 9999)}`;
}

export function longitude() {
  return `-${randomNumber(11, 99)}.${randomNumber(1111, 9999)}`;
}

export function email() {
  let u = username();
  let email = randomElementFromArray(emailDomains);
  return `${u}@${email}`;
}
