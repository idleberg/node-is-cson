'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var csonParser = require('cson-parser');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Determines whether a string is valid CSON
 * @param   - string CSON
 * @returns - boolean
 */
var isCSON = function (input, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    if (!isString(input))
        return false;
    var options = __assign({ strict: true }, userOptions);
    try {
        // Make sure the string isn't JSON
        JSON.parse(input);
    }
    catch (error) {
        try {
            csonParser.parse(input);
        }
        catch (error) {
            return false;
        }
        return true;
    }
    return options.strict ? false : true;
};
function isString(input) {
    return Object.prototype.toString.call(input) === '[object String]';
}

exports.isCSON = isCSON;
