// Получить доступ к кнопке пот тегу или классу
const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

// Получить доступ до текстового содержимого тега
btnAdd.textContent = 'Прибавить +';

// как отловить что я кликнул на эту кнопку
// нужно повесить слушателя событий
// добавить слушателя событий туда передаться 2 события первое это клик вторм функцию что при клике должно будет сделано
btnAdd.addEventListener('click', function () {
  console.log('Вы кликнуле по кнопке');

  // получить значение инпута при клике на кнопку
  const value = Number(valueInput.value);
  // сделали число из строки

  // приплюсовываем введеную сумму
  total += value;

  // вывели в интерфейс сумму веденную в инпут
  outputEl.textContent = total;

  // после клика очистить значение
  valueInput.value = '';
});

// 👍 😜
// если пользователь нажал на кнопку ресепт то очистить значение суммы
resetBtn.addEventListener('click', function () {
  total = 0;
  outputEl.textContent = total;
});

function hoopCount(n) {
  //your code goes here
  if (n < 10) {
    return 'Keep at it until you get it';
  } else {
    return 'Great, now move on to tricks';
  }
}

// ✅
console.log(hoopCount(11));

console.log(hoopCount(5));

function sayHello(name) {
  return `Hello, ${name}`;
}

console.log(sayHello('Mr. Spock'));

// ❌
function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  } else if (current === 'red') {
    return 'green';
  }

  //your code here!
}

console.log(updateLight('green'));
console.log(updateLight('yellow'));
console.log(updateLight('red'));

// ❤️ ✅
function boolToWord(bool) {
  //...
  if (bool === true) {
    return 'Yes';
  } else {
    return 'No';
  }
}

console.log(boolToWord(true));
console.log(boolToWord(false));

//   ✅
function testEven(n) {
  //Your awesome code here!
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(testEven(2));
console.log(testEven(2.1));
console.log(testEven(-2.1));


// ❌
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }

// console.log(findSmallestInt([34, 15, 88, 2]));
// console.log(findSmallestInt([34, -345, -1, 100]));

// ❌
// function powersOfTwo(n){
//     return Math.pow(n, 0)
//   }
  
//   console.log(powersOfTwo(0))
//   console.log(powersOfTwo(1))
//   console.log(powersOfTwo(2))


// ❌
  function findMultiples(int, limit){
    let result = []
    
    for (let i = int; i<=limit; i+=2)
      result.push(i)
      
    return result
  }

 
  console.log(findMultiples(2, 10))

  function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0] === 'R' || name[0] === 'r') {
       return name + 'plays banjo';
    } else {
       return name + 'does not play banjo';
    }
   
  }
  
  console.log(areYouPlayingBanjo('Roma'))