// Функции
// 3 вида:
// Function Declaration

function printMessage(message) {
    alert(message)
}

function sum(n) {
    let result = 0

    for (let i = 0; i < n; i++) {
        result += i
    }

    return result

    // Не выполнится, так как return завершает функцию
    console.log(1)
}

// printMessage("Message")

// printMessage("Hello world!")

// printMessage("1")

let result = sum(5)
console.log(result)

result = sum(10)
console.log(result)

result = sum(100)
console.log(result)

// Function Expression
// Всегда надо объявлять до использования
let multiply = function(a = 5, b = 10) {
    return a * b
}

result = multiply(10)
console.log(result)

// Стрелочные функции
let division = (a, b) => {
    return a / b
}

result = division(6, 3)
console.log(result)