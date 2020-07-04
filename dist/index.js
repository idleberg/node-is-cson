"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCSON = void 0;
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
    var options = __assign({ strict: true }, userOptions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0M7QUFFcEM7Ozs7R0FJRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBYSxFQUFFLFdBQStCO0lBQS9CLDRCQUFBLEVBQUEsZ0JBQStCO0lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFbkMsSUFBTSxPQUFPLGNBQ1gsTUFBTSxFQUFFLElBQUksSUFDVCxXQUFXLENBQ2YsQ0FBQTtJQUVELElBQUk7UUFDRixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSTtZQUNGLG1CQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDZDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQU9BLHdCQUFNO0FBTFIsU0FBUyxRQUFRLENBQUMsS0FBSztJQUNyQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztBQUNyRSxDQUFDIn0=