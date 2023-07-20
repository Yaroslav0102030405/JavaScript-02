// Получить доступ к кнопке пот тегу или классу
const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]')
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span')


let total = 0

// Получить доступ до текстового содержимого тега
btnAdd.textContent = 'Прибавить +'

// как отловить что я кликнул на эту кнопку
// нужно повесить слушателя событий
// добавить слушателя событий туда передаться 2 события первое это клик вторм функцию что при клике должно будет сделано
btnAdd.addEventListener('click', function() {
    console.log('Вы кликнуле по кнопке')

    // получить значение инпута при клике на кнопку
    const value = Number(valueInput.value)
    // сделали число из строки

// приплюсовываем введеную сумму 
    total += value

    // вывели в интерфейс сумму веденную в инпут
    outputEl.textContent = total

// после клика очистить значение
    valueInput.value = ''
})

// если пользователь нажал на кнопку ресепт то очистить значение суммы
resetBtn.addEventListener('click', function() {
    total = 0
    outputEl.textContent = total
})