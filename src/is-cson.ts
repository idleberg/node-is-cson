import { parse as parseCSON } from 'cson-parser';

/**
 * Determines whether a string is valid CSON
 * @param   - string CSON
 * @returns - boolean
 */
const isCSON = (input: string, userOptions: IsCson.Options = {}): boolean => {
  if (!isString(input)) {
		return false
	}

  const options = {
    allowJSON: false,
    ...userOptions
  };

  try {
    // Make sure the string isn't JSON
    JSON.parse(input);
  } catch (error) {
    try {
      parseCSON(input);
    } catch (error) {
      return false;
    }

    return true;
  }

  return options.allowJSON ? true : false;
};

function isString(input) {
  return Object.prototype.toString.call(input) === '[object String]';
}

export {
  isCSON
};
