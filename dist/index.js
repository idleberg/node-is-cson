'use strict';

exports.__esModule = true;
exports.isCSON = void 0;
var tslib_1 = require("tslib");
var cson_parser_1 = require("cson-parser");
/**
 * Determines whether a string is valid CSON
 * @param   - string CSON
 * @returns - boolean
 */
var isCSON = function (input, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    if (!isString(input))
        return false;
    var options = tslib_1.__assign({ strict: true }, userOptions);
    try {
        // Make sure the string isn't JSON
        JSON.parse(input);
    }
    catch (error) {
        try {
            cson_parser_1.parse(input);
        }
        catch (error) {
            return false;
        }
        return true;
    }
    return options.strict ? false : true;
};
exports.isCSON = isCSON;
function isString(input) {
    return Object.prototype.toString.call(input) === '[object String]';
}
