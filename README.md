# is-cson

[![npm](https://flat.badgen.net/npm/license/is-cson)](https://www.npmjs.org/package/is-cson)
[![npm](https://flat.badgen.net/npm/v/is-cson)](https://www.npmjs.org/package/is-cson)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-is-cson)](https://circleci.com/gh/idleberg/node-is-cson)
[![David](https://flat.badgen.net/david/dep/idleberg/node-is-cson)](https://david-dm.org/idleberg/node-is-cson)

Determines whether a string is valid CSON

## Installation

`npm install is-cson -S`

## Usage

`isCSON(string)`

**Example:**

```js
const { isCSON } = require('is-cson');

// Generate CSON string
const inputString = `
  firstName: "John"
  lastName: "Doe"
`;

isCSON(inputString);
// => true
```

### Options

#### `strict`

Default: `true`  

Since CSON is a superset of *well-formatted* JSON, this library runs *strict* tests for CSON only. Disabling the strict option will override this behaviour.

<details>
<summary><strong>Example</strong></summary>

```js
const inputString = `{
  "firstName": "John",
  "lastName": "Doe"
}`;

isCSON(inputString, { strict: false });
// => true
```
</details>

**Note:** With strict mode disabled, several features of invalid JSON (e.g. trailing commas or single quotes) will be ignored

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-is-cson) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
