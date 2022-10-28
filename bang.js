"use strict";
exports.__esModule = true;
exports.Bang = void 0;
var Bang = /** @class */ (function () {
    function Bang() {
    }
    Bang.prototype.change = function (money) {
        return money / (4 * 100);
    };
    Bang.prototype.changeBack = function (money) {
        return money * 4 * 100;
    };
    return Bang;
}());
exports.Bang = Bang;
