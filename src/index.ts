import { parse } from 'cson-parser';

/**
 * Determines whether a string is valid CSON
 * @param   - string CSON
 * @returns - boolean
 */
const isCSON = (input: string, userOptions: IsCsonOptions = {}): boolean => {
  if (!isString(input)) return false;

  const options = {
    strict: true,
    ...userOptions
  };

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

  return options.strict ? false : true;
};

function isString(input) {
  return Object.prototype.toString.call(input) === '[object String]';
}

export {
  isCSON
};
