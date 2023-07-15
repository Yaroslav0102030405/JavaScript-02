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
//     // let maxLength = 40
//     if (string.Length > 40) {
//     //    string.split("") + `...`
//     //    string.join("")
//        console.log(string.split("..."))
//     }

//     return string

// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// Задача 5

const checkForSpam = function(str) {
    let message = str.toLowerCase();

    return  message.includes('sale') || message.includes('spam');
  };
  
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true