/**
 * Returns a random element from an array
 * @param {array} arr receives an array
 * @returns an element from the array
 * @example randomElementFromArray([1, 2, 3]) // returns 2
 */
export function randomElementFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Returns a random number between min and max
 * @param {number} min minimum number
 * @param {number} max maximum number
 * @returns a random number
 * @example randomNumber(1, 10) // returns 5
 */
export function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random string with letters and numbers
 * @param {number} length length of the string
 * @returns a random string with letters and numbers
 * @example randomString(10) // returns "a1b2c3d4e5"
 */
export function randomStringWithNumbers(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}