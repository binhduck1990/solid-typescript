"use strict";
exports.__esModule = true;
exports.Dola = void 0;
var Dola = /** @class */ (function () {
    function Dola() {
    }
    Dola.prototype.change = function (money) {
        return money / (23 * 100);
    };
    Dola.prototype.changeBack = function (money) {
        return money * 23 * 100;
    };
    return Dola;
}());
exports.Dola = Dola;
