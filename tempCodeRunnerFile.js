let money = prompt("Ваш бюджет на месяц?"),
   time = prompt("Введите дату в формате YYYY-MM-DD", "2000-12-31")

console.log(money);
console.log(time);


let firstAsk = +prompt("Введите количество обязательных расходов в этом месяце", ""),
   secondAsk = +prompt("Во сколько обойдется?", "");

console.log(firstAsk);
console.log(secondAsk);

let expenses = secondAsk;

let budget = money - expenses;
let finalBudget = budget / 30;
alert("На этот месяц у вас имеется " + Math.round(finalBudget) + " на каждый день");
let appData = {
   бюджет: money,
	данные_времени: time,
	обязательные_расходы: expenses ,
	// необязательные_расходы: optionalExpenses,133
   savings: false,
}
