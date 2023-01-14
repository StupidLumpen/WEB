// Методы для получения элемента из HTML
// 1) .getElementById(id) - возвращает элемент с идентификатором id
// 2) .querySelector(class/tagName/id) - возвращает элемент с class/tagName/id
// 3) .querySelectorAll(class/tagName/id) - возвращает массив элементов с class/tagName/id
// * getElementsByName, getElementsByClassName, getElementsByTagName
let container = document.getElementById('container')
container = document.querySelector('.container') // ('.container'), ('div')
let containers = document.querySelectorAll('.container')
const mainInput = document.querySelector('.main__input')
const button = document.querySelector('.button')

// События мыши
// 1) 'click' - нажатие на элемент
// 2) 'contextMenu' - нажатие правой кнопки на элемент
// 3) 'mouseOver/mouseDown' - наведение/покидание на элемент
// 4) 'mouseMove' - любое движение мыши
// 5) 'mousedown/mouseup' - нажатие и отжатие клавиши мыши с кнопки
// 6) 'keydown/keyup' - нажатие и отжатие клавиши клавиатуры
const buttonTapped = () => {
    mainInput.setAttribute('type', 'password')
    mainInput.removeAttribute('placeholder')
}

button.addEventListener('keydown', buttonTapped)

// .innerHTML - свойство любого DOM-элемента, которое содержит все содержимое тега в строковом виде
container.innerHTML += '<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fesawebb.org%2Fimages%2F&psig=AOvVaw2WcYvSEL68pJDK04TBkEwL&ust=1673780644759000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCKwvf0xvwCFQAAAAAdAAAAABAE">'
// .outerHTML - свойство любого DOM-элемента, которое содержит все содержимое тега + сам тег в строковом виде
console.log(container.innerHTML, '\n\n\n\n\n',  container.outerHTML)
// .textContent - свойство, которое содержит все текстовое содержимое тега
console.log(container.textContent)
// .hidden - логическое свойство, которое обозначает скрыт элемент или показан
container.hidden = false
// .value - свойство, которое содержит текст внутри тега input
console.log(mainInput.value)

// Методы для работы с атрибутами
// 1) .hasAttribute('attribute') - возвращает true/false в зависимости от наличия атрибута в теге
console.log(mainInput.hasAttribute('type'))
// 2) .getAttribute('attribute') - возвращает значение атрибута 
console.log(mainInput.getAttribute('type'))
// 3) .setAttribute('attribute', 'value') - устанавливает значение определенного атрибута
// mainInput.setAttribute('type', 'password')
// 4) .removeAttribute('attribute') - удаляет атрибут
// mainInput.removeAttribute('placeholder')

// .attributes - возвращает все атрибуты элемента
console.log(mainInput.attributes)

// DOMElement.createElement('html-tag-name') - создает тег в элементе
const newButton = document.createElement('button')
document.body.append(newButton)

// .insertAdjacentHTML('type', 'html markup') - создает и размещает html разметку в каком-либо теге
container.insertAdjacentHTML('beforebegin', '<p>dwakeawkdoawkdeoaw</p>')

// .remove() - удаляет html элемент
container.remove()

// Стили и классы
const block = document.querySelector('.block')
const blockButton = document.querySelector('.block__button')

const blockButtonTapped = () => {
    // .className - возвращает строку с классами элемента
    // .classList.add/remove('class') - добавляет/убирает класс элемента
    // .classList.toggle('class') - добавляет/убирает класс элемента
    // .classList.contains('class') - возвращает true/false в зависимости от наличия класса у элемента
    
    block.classList.toggle('disabled-element')
}

blockButton.addEventListener('click', blockButtonTapped)

// block.style.backgroundColor = '#000'
// block.style.width = '500px'
// block.style.height = '500px'



