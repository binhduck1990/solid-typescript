"use strict";
exports.__esModule = true;
var dola_1 = require("./dola");
var Main = /** @class */ (function () {
    function Main(money, library) {
        this.money = money;
        this.library = library;
    }
    Main.prototype.changeMoney = function () {
        this.money = this.library.change(this.money);
        return "".concat(this.money);
    };
    Main.prototype.changeBackMoney = function () {
        this.money = this.library.changeBack(this.money);
        return "".concat(this.money);
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
        var dolaLibrary = new dola_1.Dola();
        var main_1 = new Main(money, dolaLibrary);
        dolaButton.addEventListener("click", function () {
            moneyChanged.innerHTML = main_1.changeMoney();
        });
        vndButton.addEventListener("click", function () {
            moneyChanged.innerHTML = main_1.changeBackMoney();
        });
    }
});
