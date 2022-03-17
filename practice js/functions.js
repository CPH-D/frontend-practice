lastName("Hernandez")

// variable coding must input first before running it
var usersName = function (name) {
    return 'This user\'s first name is ' + name
}

console.log(usersName("Chris"))

// functions automatically goes to memory before anything else on the page runs
function lastName(last) {
    console.log('This user\'s last name is ' + last)
}

console.log("============================================================")

var add = function (a, b) {
    return a + b
}

var c = add(2, 3)

console.log(c)

console.log("============================================================")

var grades = function (name, lastname, grade) {
    var name = name.toUpperCase()
    var lastname = lastname.toLowerCase()
    return {
        name: name,
        lastname: lastname,
        grade: grade
    }
}

var person = grades('Chris', 'Hernandez', 88)

console.log(person)

console.log("============================================================")
console.log("=======================EXCERCISE============================")
console.log("============================================================")

// declare a variable with a function that prints your name
var test = function (name) {
    return name
}
console.log(test("Chris"))

// declare a function that takes 2 arguments then multiplies then and return the answer
function multiply(x, y) {
    return x * y
}
console.log(multiply(3, 4))

// then create a function that takes the last function you created divides the last result by 2 and then return the answer.
var divides = function (a) {
    return a / 2
}
console.log(divides(multiply(20, 5)))