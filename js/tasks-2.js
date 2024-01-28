/**
 * ? Задача 1 Напиши скрипт выбора стоимости отеля по количеству звезд
 */
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120

// Если в переменной stars что-то кроме чисел 1-5, выведи строку
// Такого количества звезд нет
// const stars = 4
// let price

// if (stars === 1) {
//     price = 20
// } else if (stars === 2) {
//     price = 30
// } else if (stars === 3) {
//     price = 50
// } else if (stars === 4) {
//     price = 70
// } else if (stars === 5) {
//     price = 120
// } else {
//     console.log('Такого количество звезд нет')
// }

// console.log(price)

/**
 * ? Задача 2 с улучшением switch
 */
// Если вы сравниваете на равенство то вам подойдет конструкция
// switch () case - это случай
// default это кейс по умолчанию
// break - прервать исполнения свеча если найдется совпадение
// Между case и break может быть произвольное количество строк
// в switch уже проверка на равенство стоит под капотом за нас
// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;

//     case 3:
//         price = 50;
//         break;

//     case 4:
//         price = 70;
//         console.log('like')
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такого количество звезд нет')
// }

// console.log(price)

/**
 * ? Задача 3 Напиши скрипт выбора стоимости отеля по количеству звезд
 */
// 1,2 - 20$, 3,4 - 30$, 5 - 120$

// const stars = 4;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет')
// }

// console.log(price)

/**
 * ? Задача 4 Улучшеине с switch
 */
// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;

//     case 3:
//     case 4:
//         price = 50;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такого количество звезд нет')
// }

// console.log(price)
// switch используется для равенства
// if else используете для > <

/**
 * ? Задача 5
 */
// Напиши скрипт выбора опции доставки товара
// Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта

// В переменную masage записать сообщение в зависимости от опции
// - "Вы можете забрать товар завтра с 12:00 в нашем офисе"
// - "Курьер доставит заказ завтра с 9:00 до 18:00"
// - "Посылка будет отправлена сегодня"
// - "Вам перезвонит менеджер"

// 1. сделать переменные
// const option = 1;
// let message = '';

// 2. сделать switch 1, 2, 3
// 3. в каждом кейсе записать message строку
// switch (option) {
//     case 1:
//         message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе';
//         break;

//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00'
//         break;

//     case 3:
//         message = 'Посылка будет отправлена сегодня'
//         break;

//     default:
//         message = 'Вам перезвонит менеджер'
// }

// // 4. сделать лог message
// console.log(message);

/**
 * ? Задача 6
 */
// Напиши скрипт который подсчитывает общую сумму зарплат работников.
// Количество работников храниться в переменной employees
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

// 1. создать переменную
const minSalary = 500;
const maxSalary = 5000;
const employees = 3;
let totalSalary = 0;

// 2. перебрать работнико в цикле for
for (let i = 1; i <= employees; i += 1) {
  // 3. сгенерить случайную зарплату (число)
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary,
  );
  console.log(`ЗП работника номер ${i} - ${salary}`);

  // 4. прибавить к totalSalary
  totalSalary += salary;
}

// 5. лог
console.log('totalSalary: ', totalSalary);

/**
 * ? Задача 7
 */
// как узнать что число счетное? Остаток от деления
// console.log(10 % 3)
// остаток 1 Три раза по 3 это 9 и 1 остается
// console.log(14 % 2)
// полность влезает и никакого остатка нет
// Четное число это когда число делиться без остатка или остаток 0

// Напиши скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапозон чисел в переменных от min до max
// Например, если min=0 и max=5, то диапазон 0-5, и в нем два четных числа - 2 и 4
// их сумма 6

// 1. обьявить переменные
// const min = 3;
// const max = 13;
// let total = 0;

// // 2. for от min до max с шагом +1
// for (let i = min; i <= max; i += 1) {
//     // console.log(i);

//     // 3. проверяем остаток от деления
//     if (i % 2 === 0) {
//         console.log('четное ', i);

//         // 4. пишем сумму
//         total += i;
//     }
// }

// console.log('total ', total);

/*
 * Вариант задачи 2 улучшение кода. Логика от обратного. Вы проверяете если не равно ?
 */
// Вы проверяете самый плохой случай. Если это не четное чило то пропускай
// continue говорит иди на следующую операцию и следующий код если не четное просто не выполнится
// Сначала вы проверяете плохой кейс и в случае плохой кейс не выполнися идет выполнение всего вашего кода
const min = 0;
const max = 5;
let total = 0;

// 2. for от min до max с шагом +1
for (let i = min; i <= max; i += 1) {
  // console.log(i);

  // 3. проверяем остаток от деления
  if (i % 2 !== 0) {
    // console.log('Не четное: ', i);
    continue;
  }
  console.log('четное: ', i);
  // 4. пишем сумму
  total += i;
}

console.log('total: ', total);

/**
 * ? Задача 8 Напиши скрипт обработки покупки в магазине
 */
// Баланс пользователя з=хранится в переменной balance
// Сумма покупки хранится в переменной payment

// Перед проверкой вывести сообщение
// Общая стоимость заказа (число) кредитов. Проверяем количество доступных средств на счету

// Если сумма покупки не превышает баланс:
// - Вычесть из баланса сумму покупки
// - Вывести сообщение "На счету осталось (число) кредитов"
// Если сумма покупки превышает баланс:
// - вывести сообщение "На счету недостаточно средств для проведения операции"
// В конце вывести сообщение "Операция завершена"

// 1. Обьявить переменные
// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов.
// Проверяем количество доступных средств на счету`);

// if (payment <= balance) {
//     balance -= payment;
//     // balance = balance - payment
//     console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('На счету недостаточно средств для проведения операции');
// }

// console.log('Операция завершена');
// 2. условие если <= balance
//

/**
 * ? Задача 9
 */
// Напиши скрипт который подсчета суммы покупки со скидкой в зависимост
// от потраченной суммы за все время (партнерская программа)

// Общая сумма потращенного хранится в переменной totalSpent
// Сумма текущего платежа хранится в переменной payment
// Скидка хранится в переменной discount

// - Если потращено от (100 - 1000) - бронзовый партнер, скидка 2%
// - Если потращено от (1000 - 5000) - серебряный партнер, скидка 5%
// - Если потращено больше 5000 - золотой партнер, скидка 10%
// - Если потращено мешьне 100 - не партнер, скидка 0%

// В результате вывести сообщение
// "Оформляем заказ на сумму (сумма) со скидкой (скидка)%"

let totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовый партнер, скидка 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Серебряный партнер, скидка 5%');
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log('Золотой партнер, скидка 10%');
  discount = 0.1;
} else {
  console.log('Не партнер, скидка 0%');
}

payment -= payment * discount;
// payment = payment - payment * discount;

console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
);

totalSpent += payment;

console.log(`Общая ссума потращенного в магазине: ${totalSpent}`);
