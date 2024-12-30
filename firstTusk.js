let money, time;

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true
}

// appData.expenses.a1=a2;
// appData.expenses.a3=a4;
console.log(appData);

  // версия с for

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



function detectDayBudget() {
   money = +prompt("Ваш бюджет на месяц?", "");
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

   while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
   }

   if (appData.savings == true) {
      let howManyMoney = +prompt("Как много у вас сбережений", ""),
         percent = +prompt("На каком проценте?", "");
      
         appData.monthIncome = howManyMoney/100/12*percent;
         alert("Ваш ежедневный заработок с депозита: " + appData.monthIncome);
   } else {
      return false;
   }
}
detectDayBudget();

function chooseExpenses() {
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
   }
}
chooseExpenses();
let userBudgetPerDay = (money + appData.monthIncome) / 30;
alert("Ваш бюджет: " + userBudgetPerDay.toFixed(0));
function detectLevel() {
   if (userBudgetPerDay < 100) {
      console.log("Минимальный прожиточный");
   } else if (userBudgetPerDay > 100 && userBudgetPerDay < 2000) {
      console.log("Средний уровень");
   } else if (userBudgetPerDay > 2000) {
      console.log("Высокий уровень");
   } else {
      console.log("Произошла ошибка");
   };
}

function chooseOptExpenses() {
   for(let i = 0; i < 3; i++) {
      let firstAsk = prompt("Необязательная статья расходов?", ""),
         secondAsk = +prompt("Во сколько обойдется?", "");
   
         appData.optionalExpenses [firstAsk] = secondAsk;
      }
}
chooseOptExpenses();