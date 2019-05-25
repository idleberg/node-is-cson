import { parse } from 'cson-parser';

/**
 * Determines whether a string is valid CSON
 * @param   - string CSON
 * @returns - boolean
 */
const isCSON = (input: string): boolean => {
  if (!isString(input)) return false;

  try {
    // Make sure the string isn't JSON
    JSON.parse(input);
  } catch (error) {
    try {
      parse(input);
    } catch (error) {
      return false;
    }

    return true;
  }

  return false;
};

function isString(input) {
  return Object.prototype.toString.call(input) === '[object String]';
}

export {
  isCSON
};
