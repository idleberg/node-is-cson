# is-cson

[![npm](https://flat.badgen.net/npm/license/is-cson)](https://www.npmjs.org/package/is-cson)
[![npm](https://flat.badgen.net/npm/v/is-cson)](https://www.npmjs.org/package/is-cson)
[![CI](https://img.shields.io/github/workflow/status/idleberg/node-is-cson/CI?style=flat-square)](https://github.com/idleberg/node-is-cson/actions)
[![David](https://flat.badgen.net/david/dep/idleberg/node-is-cson)](https://david-dm.org/idleberg/node-is-cson)

Determines whether a string is valid CSON

## Installation

`npm install is-cson -S`

## Usage

`isCSON(string, options?)`

**Example:**

```js
import { isCSON } from 'is-cson';

// Generate CSON string
const csonString = `
  firstName: 'John'
  lastName: 'Doe'
`;

isCSON(csonString);
// => true
```

### Options

#### `strict`

Default: `true`  

Since CSON is a superset of *well-formatted* JSON, this library runs *strict* tests for CSON only. Disabling the strict option will override this behaviour.

<details>
<summary><strong>Example</strong></summary>

```js
const jsonString = `{
  "firstName": "John",
  "lastName": "Doe"
}`;

isCSON(jsonString, { strict: false });
// => true
```
</details>

**Note:** With strict mode disabled, several features of invalid JSON (e.g. trailing commas or single quotes) will be ignored

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
