"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cson_parser_1 = require("cson-parser");
/**
 * Determines whether a string is valid CSON
 * @param   - string CSON
 * @returns - boolean
 */
var isCSON = function (input) {
    if (!isString(input))
        return false;
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
    return false;
};
exports.isCSON = isCSON;
function isString(input) {
    return Object.prototype.toString.call(input) === '[object String]';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFFcEM7Ozs7R0FJRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBYTtJQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRW5DLElBQUk7UUFDRixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSTtZQUNGLG1CQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDZDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQU9BLHdCQUFNO0FBTFIsU0FBUyxRQUFRLENBQUMsS0FBSztJQUNyQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztBQUNyRSxDQUFDIn0=