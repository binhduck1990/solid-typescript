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
