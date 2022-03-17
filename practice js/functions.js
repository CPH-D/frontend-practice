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