'use strict';

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
} from './data.js';

import { randomElementFromArray, randomNumber, randomStringWithNumbers } from './helpers.js';

export function name() {
  return Math.random() > 0.5 ? randomElementFromArray(personMaleNames) : randomElementFromArray(personFemaleNames);
}

export function age() {
  return randomNumber(18, 100);
}

export function phone() {
  let phoneNumber: any = '(xxx) xxx-xxxx';
  for (let i = 0; i < 10; i++) {
    phoneNumber = phoneNumber.replace('x', randomNumber(0, 10));
  }
  return phoneNumber;
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
  let dt = new Date().getTime();
  const uuidMask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line no-bitwise
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    // tslint:disable-next-line no-bitwise
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuidMask;
}

export function password() {
  return randomStringWithNumbers(8);
}

export function username() {
  let nameOne = name();
  let nameTwo = name();
  const charNumber = randomNumber(2, 5);
  nameOne = nameOne.slice(0, charNumber);
  nameTwo = nameTwo.slice(0, charNumber);
  return `${nameOne}${nameTwo}`.toLowerCase();
}

export function ip() {
  let ipMask: any = 'x.x.x.x';
  for (let i = 0; i < 12; i++) {
    ipMask = ipMask.replace('x', randomNumber(127, 0));
  }
  return ipMask;
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
  const usr = username();
  const eml = randomElementFromArray(emailDomains);
  return `${usr}@${eml}`;
}
