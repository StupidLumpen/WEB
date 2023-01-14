// Методы и свойства чисел
let number = 100..toString(10)
number = 12.34.toFixed()
console.log(number, typeof(number))

console.log(isFinite(15))
console.log(isNaN(2 * 'a'))
console.log(parseInt('45px6'))
console.log(parseFloat('45.5px5'))
console.log(parseInt('a123'))

// Методы и свойства строк
let string = 'string'
console.log(string.length)
console.log(string[0])
console.log(string[6])
console.log(string[string.length - 1])
// string[0] = 'w'
// console.log(string)
console.log(string.toLowerCase())
console.log(string.toUpperCase())
console.log(string.indexOf('ing', 4))
// .lastIndexOf
console.log(string.includes('infefeg' /* position */))
console.log(string.startsWith('st'))
console.log(string.endsWith('ty'))
console.log(string.slice(-4, 5))
console.log(string.substring(-4, 5))
console.log(string.substr(-4, 5))

// Массивы
let array = [1, 2, 3]
let brestCityName = 'Brest'
let minskCityName = 'Minsk'
let grodnoCityName = 'Grodno'
let citiesArray = [brestCityName, minskCityName, grodnoCityName, 1, { name: 'Aboba' }]
console.log(`Array = ${citiesArray}`)
console.log(citiesArray[citiesArray.length - 1])

let emptyArray = [5, 6, 7]
emptyArray.push(1, 2, 3)
emptyArray.pop()
emptyArray.unshift('a', 'b', 'c')
emptyArray.shift()
console.log(emptyArray)
emptyArray.splice(1, 1, 'a', 'a', 'a', 'a')
console.log(emptyArray)
console.log(emptyArray.slice(0, 5))
emptyArray = [1, 2, 3].concat([4, 5], [6, 7], ['a'], [{}, {}, {}])
emptyArray.forEach((element) => {
    console.log(element)
})