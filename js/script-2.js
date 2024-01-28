/**
 * ? Цикл for
 * Цикл со счётчиком - цикл, в котором некоторая переменная изменяет своё значение
 * от заданного начального до конечного значения с некоторым шагом
 * и для каждого значения этой переменной тело цикла выполняется один раз.
 */
// Применяеться если нужно выполнить один кусочек кода много раз с минимальными изменениями
// Например если мне нужно написать 5 консолев логов а если и нужно написать 50 000 то что делать?
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// for (инициализация; условие; пост - ввыражение) {
//     тело цикла
// }
// инициализация - повторение цикла
// условие - условие прекращение цикла
// пост - выражение - тут вы увеличиваете или уменшаете сччетсчик

/**
 * ? Пример с увеличением на одно число +1
 */
// for (let i = 0; i <= 10; i += 1) {
//     console.log(i)
// }
// console.log('qwwe')

/**
 * ? Пример с увеличением на два числа +2
 */
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i)
// }
// console.log('qwwe')

/**
 * ?  Пример от 495 до 500 увеличиваем на 1 число
 */
// for (let i = 495; i <= 500; i += 1) {
//     console.log(i)
// }
// console.log('qwwe')

/**
 * ? Пример с минус 1 как посчитатать в низ
 */
// for (let i = 10; i >= 0; i -= 1) {
//     console.log(i)
// }
// console.log('qwwe')
// Уменьшать и увеличивать счетсчик можно на произвольное значение

// Домащнее задание 1
// const logItems = function (array) {
// for (let i = 0; i < array.length; i += 1 ) {
//     console.log([i + 1] + " - " + array[i])
// }
// }

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])

// Задача 2
// const calculateEngravingPrice = function (message, pricePerWord) {
//     console.log(message.split(" ").length * pricePerWord)
// }

// calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)

// Задача 3
// const findLongestWord = function(string) {
//     let items = string.split(" ")
//     let LongestWord = items[0]

//     for (const item of items) {
//         if (item.length > LongestWord.length) {
//             LongestWord = item
//         }
//     }
//     return LongestWord
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))

// console.log(findLongestWord('Google do a roll'));

// console.log(findLongestWord('May the force be with you'));

// Задача 4
// const formatString = function (string) {
//   let maxLength = 40;
//       if (string.length > maxLength) {
//         let items = string.split('');
//         items.length = maxLength;
//         string = items.join('') + `...`;
//     }
//     return string;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',),);

// Задача 5
// const checkForSpam = function(str) {
//     let message = str.toLowerCase();

//     return  message.includes('sale') || message.includes('spam');
//   };

//   console.log(checkForSpam('Latest technology news')); // false

//   console.log(checkForSpam('JavaScript weekly newsletter')); // false

//   console.log(checkForSpam('Get best sale offers now!')); // true

//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// const stars = 0
// // let price
// let message

// if (stars === 1) {
//     message = 'Price: 20$'
// } else if (stars === 2) {
//     message = 'Price: 30$'
// } else if (stars === 3) {
//     message = 'Price: 50$'
// } else if (stars === 4) {
//     message = 'Price: 70$'
// } else if (stars === 5) {
//     message = 'Price: 120$'
// } else {
//     message = 'Такого количества звезд нет'
// }

// console.log(message)

// const stars = 0
// // let price
// let message

// switch (stars) {
//     case 1:
//     message = 'Price: 20$'
//     break

//     case 2:
//     message = 'Price: 30$'
//     break

//     case 3:
//     message = 'Price: 50$'
//     break

//     case 4:
//     message = 'Price: 70$'
//     break

//     case 5:
//     message = 'Price: 120$'
//     break

//     default:
//         message = 'Такого количества звезд нет'
// }

// console.log(message)

// const stars = 5
// let message

// if (stars === 1 || stars === 2) {
//     message = 'Price: 20$'
// } else if (stars === 3 || stars === 4) {
//     message = 'Price: 30$'
// } else if (stars === 5) {
//     message = 'Price: 120$'
// } else {
//     message = 'Такого количества звезд нет'
// }

// console.log(message)
// Свичь сравнивает только на строгое равенство === он не умеет больше или меньше
// switch (stars) {
//     case 1:
//     case 2:
//     message = 'Price: 20$'
//     break

//     case 3:
//     case 4:
//     message = 'Price: 30$'
//     break

//     case 5:
//     message = 'Price: 1200$'
//     break

//     default:
//         message = 'Такого количества звезд нет'
// }

// console.log(message)

// const option = 3
// let message

// switch (option) {
//     case 1:
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
//     break

//     case 2:
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00'
//     break

//     case 3:
//     message = 'Поссылка будет отправлена сегодня'
//     break

//     default:
//     message = 'Вам перезвонит менеджер'
// }

// console.log(message)

// for (счетчик начального значения условиепрекращение цикла тут мы пишем что мы хотим увеличить или уменьшить знаяение)

// увеличить счетсчик
// for (let i = 0; i <= 10; i += 1) {
//     console.log(i)
// }

// Карточки товаров с помощью цикла FOR https://www.youtube.com/watch?v=W1zptYZhw8k
// умменьшить счетсчик
// for (let i = 10; i >= 1; i -= 1) {
//     console.log(i)
// }

// const minSalary = 500
// const maxSalary = 5000
// const employees = 5
// let totalSalary = 0

// for (let i = 1; i <= employees; i += 1) {
//     // создаем случайноую зарплату
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)

//     console.log(`Зарплата работника номер ${i} - ${salary}`)

//     // + зарплату всех работников
//     totalSalary += salary

// }
// // Результат суммы зарплаты всех работников
// console.log('totalSalary', totalSalary)

// const min = 0
// const max = 10
// let total = 0

// for (let i = min; i <= max; i += 1) {
//     // console.log(i)

// if (i % 2 === 0) {
//     console.log('Четное', i)

//     total += i
// }
// }
// console.log('total', total)

// Решение задачи сразу от плохого случая
// const min = 0
// const max = 10
// let total = 0

// for (let i = min; i <= max; i += 1) {
// if (i % 2 !== 0) {
//     // console.log('Не четное', i)
//     continue
// }
// console.log('Четное', i)
// // Запись знаения в тотал
// total += i
// }

// console.log('total', total)

// let balance = 10000
// const payment = 2000

// if (balance >= payment) {
//     // отнимает от баланса текущую ссуму срдеств
//     balance -= payment;

//     console.log(`На счету осталось ${balance} кредитов`)
// } else {
//     console.log('на счету недостаточно средств для проведения операции!')
// }

// console.log('Операция завершена')

// 2% - это 0.02
// 20% - это 0.2
// let totalSpent = 2000
// let payment = 500
// let discount = 0

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнер, скидка 2%')
//     discount = 0.02
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебряный партнер, скидка 5%')
//     discount = 0.05
// } else if (totalSpent > 5000) {
//     console.log('Золотой партнер, скидка 10%')
//     discount = 0.1
// } else {
//     console.log('Не партнер, скидка 0%')
// }

// // Онять от суммы покупки скидку
// // payment = payment - payment * discount;
// payment -= payment * discount

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}` )
// // умножили чтобы получить 2% а не 0.02

// // подсчитать общую сумму потраченных денег за весь период покупок
// totalSpent += payment

// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`)

const array = [10, 15, 25, 40];
let total = 0;

for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]);

  if (array[i] % 2 !== 0) {
    total += array[i];
  }
}

console.log(total);
