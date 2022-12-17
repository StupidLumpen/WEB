// Логические операторы
// ||(логическое ИЛИ), &&(логическое И), !(логическое НЕ)
// Сначала выполняется логичекое НЕ, затем И, затем ИЛИ
// || - возвращает первое истинное значение или последнее значение, если истинного не найдено
let booleanOr = false || 1 // 1
booleanOr = false || 0 || true // true
booleanOr = false || 0 // 0
booleanOr = null || 1 // 1
booleanOr = undefined || null || 0 // 0
console.log(booleanOr)

// Использование в условиях
let age = 71
if (age < 18 || age > 70) {
    console.log('Доступ закрыт')
}

// && - возвращает первое ложное значение или последнее, если ложных не найдено
let booleanAnd = true && true // true
booleanAnd = 1 && 5 // 5
booleanAnd = "" && 0 // ""
booleanAnd = 5 && 0 && "" // 0
// booleanAnd = 1 && 2 && null && 3 // null
console.log(booleanAnd)

// (0 > 0) && alert('Adedrae')

// ! - возвращает ОБРАТНОЕ значение
let booleanNot = !true // false
booleanNot = !0 // true
booleanNot = Boolean(5) // true
booleanAnd = !!5 // true
console.log(booleanNot)

// Оператор нулевого слияния (??)
let username = null ?? "Oleg"
console.log(username)

// Циклы
// while

// age = 1
// while (age <= 18) {
//     console.log(age)
//     age++
// }

// Итерация - один шаг цикла
// let i = 0
// while (i < 20) {
//     console.log(i)
//     i++
// }

// do...while
do {
    console.log("do...while выполнился")
} while (0 == 4)

// for (начало; условие; шаг)
for (let i = 0; i < 20; i++) {
    // Если 5 итерация - завершаем ее и переходим на следующую
    if (i == 5) {
        continue
    }

    // Если 10 итерация - завершаем цикл
    if (i == 10) {
        break
    }

    console.log(i)
}

// while (true); for (;;)