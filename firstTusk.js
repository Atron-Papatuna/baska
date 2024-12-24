let money = prompt("Ваш бюджет на месяц?", ""),
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false,
}

// appData.expenses.a1=a2;
// appData.expenses.a3=a4;
console.log(appData);

for (let i = 0; i < 2; i++){
   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");
   
   if (typeof(a) === 'string' && a != null && b != null
      && a.length < 50 && b.length < 50 && a != "" && b != "") {

      appData.expenses[a] = b;

   }
   else {
      i--;
   }
      
} // версия с for

// let i = 0
// while(i < 2) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt("Во сколько обойдется?", "");
   
//    if ((typeof(a)) === 'string' && a != null && b != null
//       && a.length < 50 && b.length < 50 && a != "" && b != "") {

//       appData.expenses[a] = b;

//    }
//    else {
//       i--;
//    }

//    i++
// }  версия с while

// let i = 0;
// do {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt("Во сколько обойдется?", "");
   
//    if (typeof(a) === 'string' && a != null && b != null
//       && a.length < 50 && b.length < 50 && a != "" && b != "") {

//       appData.expenses[a] = b;

//    }
//    else {
//       i--;
//    }

// }
// while (i < 2);  версия с do while

let userBudgetPerDay = money / 30;
alert("Ваш бюджет: " + userBudgetPerDay);

if (userBudgetPerDay < 100) {
   console.log("Минимальный прожиточный");
} else if (userBudgetPerDay > 100 && userBudgetPerDay < 2000) {
   console.log("Средний уровень");
} else if (userBudgetPerDay > 2000) {
   console.log("Высокий уровень");
} else {
   console.log("Произошла ошибка");
};