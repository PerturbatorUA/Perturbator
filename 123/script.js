'use strict'
/*
let damage = prompt('Gun damage');
let rateOfFire = prompt ('Rate of Fire');
alert(`DPS of Weapon = ${damage*rateOfFire/60}`);
let boss = confirm("Are you gay?");
alert(boss);
*/
/*
let stats = +prompt('Стата артефакта');
let artifactLvL = +prompt("Уровень вашего артефакта");
let artifactStats = (artifactLvL)*0.02*(stats);
let finalArtStat = (artifactStats)+(stats);
alert(`Стата вашего артефакта ${finalArtStat}`);
*/
/*
let boba = "123";
alert(typeof boba);

boba = Number(boba);
alert(boba); */
/*
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("Chocolate")); //true
console.log(Boolean("")); //false
console.log(Boolean("0")); //true, так как ноль это строка
let zero = 0;
console.log(Boolean(zero)); //false
let zero1 = "0";
console.log(Boolean(zero1)); //true
*/
/*
let a = 1;
let b = 2;
let c;

c = 3 - (a = b + 1);
*/
/*
let n = 2;
n *= 2; //n = n * 2
++n;
alert(n++); // выдает что n = 5 (так как подставляет прошлую n) но повышает все так же n на 1
alert(n); // показывает что n = 6 как и должно быть
*/
/*
let a;
let b;
let c;
(a = 3, b = 4, c = a + b);
*/
/*
let a = 0
alert(Boolean(a)); //false (так как false = 0)
let b = "0";
alert(Boolean(b)); //true (так как любая надпись в строке = 1)

alert(a == b); //true (так как строка изменяется на число при сравнении)
*/
/*
alert (0 == false); //true так как идет преобразование
alert ("" == false); //true так как идет преобразование

alert (0 === false); //false так как идет строгое сравнение без преобразования

alert(null == undefined); //true так как они равны, это спец правило языка
*/
//РЕЗУЛЬТАТ СРАВНЕНИЯ И ЕСТЬ БУЛИАН, IF РАБОТАЕТ С БУЛИАНАМИ
/*
let x;
let y;
let you = confirm("Are you gay?");
if (you) {
    x = +prompt("Введите число для проверки на чётность");
    y = ( x % 2);
    if ( y == 0) {
    alert("Число чётное");
    } else {
        alert("Число не чётное");
    }
} else {
    alert("Тебе тут не рады");
}
*/
/*
let age = prompt("Введите ваш возраст");
let message = ( age < 10 ) ? "Малой иди домой" :
(age < 20) ? "Ждём на заводе" :
(age < 30 ) ? "готовим уже гроб" :
"ждём в могиле";
alert(message);

let age = prompt("Введите ваш возраст");
if (age < 3) {
    message = 'Здравствуй, малыш!';
  } else if (age < 18) {
    message = 'Привет!';
  } else if (age < 100) {
    message = 'Здравствуйте!';
  } else {
    message = 'Какой необычный возраст!';
  }
  */
// let a = prompt("Введите число")
// if (a > 0) {
//     alert("1");
// } else if (a < 0) {
//     alert("-1");
// } else alert("0");


// let result = (a + b < 4) ? 'Мало' : 'Много';  //более менее применение тернарного оператора


//let message=(login=='Сотрудник')?'Привет':(login == 'Директор')?'Здравствуйте':(login=='')?'Нет логина':''; //пиздец

// let hour = 10;
// let isWeekend = true;
// if (hour < 10 || hour > 18 || isWeekend) {
//   alert("Офис закрыт");
// }

// let currentUser = null;
// let defaultUser = "John";

// let name = currentUser || defaultUser || "unnamed";

// alert( name ); // выбирается "John" – первое истинное значение

// let a;
// let b = confirm("Посчитать 2+2?");
// b || (a = 1);
// if (b) {
//   alert("2+2=4");
// } else {
//   alert(a);
// }

// Если первый операнд истинный,
// И возвращает второй:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

//(a && b) || (c && d). //как вариант

// let age = +prompt("Введите возраст");
// if (age >= 14 && age <= 90) {
//   alert("Возраст удовлетворительный");
// } else {
//   alert("Возраст не подходит");
// }

// let age = +prompt("Введите возраст");
// if (!(age >= 14 && age <= 90)) { // "!" инвертирует, то что выводит "&&", если "&&" выводит true - то будет false и наоборот
//   alert("Правильно, возраст не в диапазоне");
// } else {
//   alert("Возраст находится в диапазоне, вы не правы, всего доброго");
// }

// let login = prompt("Кто там?");
// let password;
// if (login == "Админ") {
//   password = prompt("Введите пароль");
//   if (password == "OralCumshot") {
//     alert("Ну, здарова, Сталкер!");
//   } else if (password != "OralCumshot" && password != null) {
//     alert("Пароль неверный");
//   } else {
//     alert("Отменено");
//   }
// } else if (login != "Админ" && login != null) {
//   alert("Я вас не знаю");
// } else { 
//   alert("Отменено");
// }
// НИЖЕ ВАРИАНТ БОЛЕЕ УПРОЩЕННЫЙ
// let login = prompt("Кто там?");
// let password;
// if (login == "Админ") {
//   password = prompt("Введите пароль");
//   if (password == "OralCumshot") {
//     alert("Ну, здарова, Сталкер!");
//   } else if (password == null) {
//     alert("Отменено");
//   } else {
//     alert("Пароль не верный");
//   }
//
// } else if (login == null) {
//   alert("Отменено");
// } else { 
//   alert("Я вас не знаю");
// }