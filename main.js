// Alert, prompt, confirm
// alert("Hello")

// let name = prompt("Enter your name: ", "Aboba")
// console.log(name)
// console.log(typeof(name))

// let isHasSportcar = confirm("Do you have a sportcar?")
// console.log(isHasSportcar)

// Преобразование

// Явное: численное, строковое, логическое

// Численное
let number = Number("123") // 123
number = Number(true) // 1
number = Number(false) // 0
number = Number(undefined) // NaN
number = Number(null) // 0
number = Number("123a") // NaN
number = Number("   12 3   ") // NaN
number = Number("   123   ") // 123
number = Number("") // 0
console.log(number, typeof(number))

// Строковое
let string = String(123) // "123"
string = String(null) // "null"
string = String(undefined) // "undefined"
string = String(true) // "true"
console.log(string, typeof(string))

// Логическое
// 0, "", null, undefined, NaN - false, остальное - true
let bool = Boolean(1) // true
bool = Boolean(0) // false
bool = Boolean("123") // true
bool = Boolean(" ") // true
bool = Boolean(-1) // true
bool = Boolean(Infinity) // true
console.log(bool, typeof(bool))

// Математические операторы
// +, -, *, /, %(остаток от деления), **
// Операнд - то, к чему применяется мат. оператор
// Операторы бывают: унарные(-1), бинарные(5 + 2), тернарные

let result = 5 / 2 // 2.5
result = 5 * 2 // 10
result = 5 - 2 // 3
result = 5 + 2 // 7
result = 5 % 2 // 1
result = 11 % 3 // 2
result = 4 ** 5 // 1024
console.log(result)

// Конкатенация - сложение строк
console.log(`Конкатенация: ${"hello" + "world"}`)

// Приведение к числу с помощью унарного "+"
// number = +prompt("Enter your number: ", 0)
// console.log(number, typeof(number))

// Неявное приведение типов:
result = '1' + 2 // '12'
result = 1 + '2' // '12'
result = 2 + 2 + '1' // '41'
result = 6 - '2' // 4
result = '6' * '2' // 12
result = '6a' * '2' // NaN
console.log(result, typeof(result))

// Присваивание по цепочке
let a
let b
let c
a = b = c = 2 + 2

// Сокращенные операторы
// +=, -=, *=, /=
number += 100 // ~ number = number + 100
console.log(number)

// Инкремент++/декремент--
let counter = 0
counter++
counter--
// ++Префиксная форма/ Постфиксная--
console.log(++counter) // Возвращает новое значение с прибавленной единицей
console.log(counter++) // Возвращает старое значение и затем увеличивает на единицу
console.log(counter)

// Задача №1
a = 1 // 2
b = 1 // 2
c = ++a // 2
let d = b++ // 1

// Задача №2
a = 4
let x = 5

// Задача №3
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // '  -9  5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2
console.log("\t eafaef \n dewadw")

// Операторы сравнения
// <, >, <=, >=, ==(оператор равенства), ===(строгое равенство), !=(неравенство), !==(строгое неравество)
// Возвращает логическое значение true/false
console.log(5 < 2)
console.log(5 == 5)

// Сравнение строк
console.log('A' > 'B')
console.log('a' > 'A')
console.log('Abdcfabc' > 'Abdcgabc')

// Неявное преобразование типов(все преобразуется к числам):
// null = undefined; null != other values, undefined != other values
// undefined - несравнимо с другими значениями
result = '2' > 1 // true
result = '01' == 1 // true
result = true == 1 // true
result = false == 0 // true
result = false === 0 // false
result = null === undefined // false
result = null == undefined // true
result = null == 0 // false
result = +null == 0 // true
result = null > 0 // false
result = null >= 0 // true
result = undefined > 0 // false
result = undefined < 0 // false
console.log(result, typeof(result))

// Условное ветвление if...else
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?')
if (year == 2015) { 
    alert('Верно')
} else if (year < 2015) {
    alert('Это слишком рано...')
} else if (year > 2015) {
    alert('Это поздновато');
} else {
    alert('Ошибка')
}

// Тернарные операторы используются для того, что бы вернуть значение из функции или присвоить значение переменной в зависимости от условия
if (year < 2015) {
    number = 0
} else {
    number = 1
}
number = (year < 2015) ? 0 : 1
console.log(number)