import { Dola } from "./dola";

class Main {
    private money: number;
    constructor(money) {
        this.money = money
    }

    changeMoney(): string {
        const changeMoney = new Dola()
        this.money = changeMoney.change(this.money)
        return `${this.money}`
    }

    changeBackMoney(): string {
        const changeMoney = new Dola()
        this.money = changeMoney.changeBack(this.money)
        return `${this.money}`
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const moneyInput = document.getElementById("money");
    const dolaButton = document.getElementById("dola");
    const vndButton = document.getElementById("vnd");
    const moneyChanged = document.getElementById("moneyChanged");

    if (moneyInput instanceof HTMLInputElement) {
        const money = moneyInput.value
        const main = new Main(money);

        dolaButton.addEventListener("click", function () {
            moneyChanged.innerHTML = main.changeMoney()
        })

        vndButton.addEventListener("click", function () {
            moneyChanged.innerHTML = main.changeBackMoney()
        })
    }
});

