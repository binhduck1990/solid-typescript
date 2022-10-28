import { Dola } from "./dola";

interface MoneyService {
    change(money: number): number
    changeBack(money: number): number
}

class Main {
    private money: number
    private library: MoneyService;

    constructor(money: number, library: MoneyService) {
        this.money = money
        this.library = library
    }

    changeMoney(): number {
        this.money = this.library.change(this.money)
        return this.money
    }

    changeBackMoney(): number {
        this.money = this.library.changeBack(this.money)
        return this.money
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const moneyInput = document.getElementById("money");
    const dolaButton = document.getElementById("dola");
    const vndButton = document.getElementById("vnd");
    const moneyChanged = document.getElementById("moneyChanged");

    if (moneyInput instanceof HTMLInputElement) {
        const money = parseInt(moneyInput.value)
        const dolaLibrary = new Dola();
        const main = new Main(money, dolaLibrary);

        dolaButton.addEventListener("click", function () {
            moneyChanged.innerHTML = main.changeMoney().toString()
        })

        vndButton.addEventListener("click", function () {
            moneyChanged.innerHTML = main.changeBackMoney().toString()
        })
    }
});




