let user

user = new Object()
user = {}

user = {
    // name: 'Abboa',
    age: 21,

    'login info': {
        userName: 'Aboba',
        password: 'daewdaw',
        phonenumber: '+375332332124'
    }
}

console.log(user['login info'].password)

user.name = 'ovjriajvieravjieavj'

// Удаление свойства из объекта
delete user.name

console.log(user.name)

const obj = {
    count: 1
}

obj.count = 2
console.log(obj.count)

console.log('daewdawd' in obj)

// for in
console.log('Object printing')
for (let key in user) {
    console.log(`Key: ${key}; Value: ${user[key]}`)
}

let str = 'dwaedeaw'
let str2 = str
str2 = 'aboba'
console.log(str, str2)

let obj1 = {
    name: 'Aboba',
    age: 2,

    getName: function() {
        let name = 'wedawe'
        return name
    }
}

let obj2 = {
    fullname: 'dweda', 
    phonenumber: '+321093012930'
}

// let obj2 = obj1

let emptyObj = {}
// for (let key in obj1) {
//     emptyObj[key] = obj1[key]
// }
Object.assign(emptyObj, obj1, obj2)
emptyObj.name = 'B'
console.log(emptyObj, obj1)

console.log(obj1.getName())


// obj2.name = 'A'
// console.log(obj1, obj2)

// console.log(obj1 == obj2)

function User(name) {
    // this = {}

    console.log(new.target)
    this.name = name
    this.isAdmin = false

    this.printName = function() {
        console.log(this.name)
    }

    // return this
}

user = new User('Aboba')
user.printName()
// console.log(user)