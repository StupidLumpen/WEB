const startButton = document.querySelector('.app__start-button')
const game = document.querySelector('.app__game')
const timeInput = document.getElementById('time')
const appResultText = document.querySelector('.app__result-text')
const appResultTime = document.querySelector('.app__result-time')

let score = 0

startButton.addEventListener('click', startGame)
game.addEventListener('click', handleGameClick)

function showElement(element) {
    element.classList.remove('hide')
}

function hideElement(element) {
    element.classList.add('hide')
}

function startGame() {
    hideElement(startButton)
    hideElement(appResultText)
    showElement(game)
    showElement(appResultTime)

    let time = timeInput.value

    let interval = setInterval(function() {
        time -= 0.1

        if (time <= 0) {
            clearInterval(interval)
            stopGame()
            return
        }
        
        appResultTime.innerText = `Время игры: ${time.toFixed(1)}`
    }, 100)

    renderSquare()
}

function stopGame() {
    hideElement(game)
    showElement(startButton)
    hideElement(appResultTime)
    showElement(appResultText)

    appResultText.innerText = `Ваш результат: ${score}`
    score = 0
}

function renderSquare() {
    game.innerHTML = ''
    let square = document.createElement('div')
    const squareSize = getRandomNumber(20, 100)
    const colors = ['#CB356B', '#BD3F32', '#3A1C71', '#D76D77', '#283c86', '#45a247', '#8e44ad', '#155799', '#159957', '#000046', '#1CB5E0', '#2F80ED']
    square.style.width = square.style.height = squareSize + 'px'
    square.style.position = 'absolute'
    square.style.top = getRandomNumber(0, game.getBoundingClientRect().height - squareSize) + 'px'
    square.style.left = getRandomNumber(0, game.getBoundingClientRect().width - squareSize) + 'px'
    const randomIndex = getRandomNumber(0, colors.length)
    square.style.backgroundColor = colors[randomIndex]
    square.style.cursor = 'pointer'
    square.setAttribute('class', 'square')
    game.insertAdjacentElement('afterbegin', square)
}

function handleGameClick(event) {
    if (event.target.classList.contains('square')) {
        score++
        appResultText.innerText = `Ваш результат: ${score}`
        renderSquare()
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}