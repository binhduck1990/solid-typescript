(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var dola_1 = require("./dola");
var Main = /** @class */ (function () {
    function Main(money) {
        this.money = money;
    }
    Main.prototype.changeMoney = function () {
        var changeMoney = new dola_1.Dola();
        this.money = changeMoney.change(this.money);
        return this.money;
    };
    Main.prototype.changeBackMoney = function () {
        var changeMoney = new dola_1.Dola();
        this.money = changeMoney.changeBack(this.money);
        return this.money;
    };
    return Main;
}());
document.addEventListener("DOMContentLoaded", function () {
    var moneyInput = document.getElementById("money");
    var dolaButton = document.getElementById("dola");
    var vndButton = document.getElementById("vnd");
    var moneyChanged = document.getElementById("moneyChanged");
    if (moneyInput instanceof HTMLInputElement) {
        var money = parseInt(moneyInput.value);
        var main_1 = new Main(money);
        dolaButton.addEventListener("click", function () {
            moneyChanged.innerHTML = main_1.changeMoney().toString();
        });
        vndButton.addEventListener("click", function () {
            moneyChanged.innerHTML = main_1.changeBackMoney().toString();
        });
    }
});

},{"./dola":1}]},{},[2]);
