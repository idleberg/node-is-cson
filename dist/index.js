"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCSON = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQW9DO0FBRXBDOzs7O0dBSUc7QUFDSCxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQWE7SUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUVuQyxJQUFJO1FBQ0Ysa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUk7WUFDRixtQkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2Q7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFPQSx3QkFBTTtBQUxSLFNBQVMsUUFBUSxDQUFDLEtBQUs7SUFDckIsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssaUJBQWlCLENBQUM7QUFDckUsQ0FBQyJ9