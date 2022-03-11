var student = {
    id: 85,
    firstName: "Christopher",
    lastName: "Hernandez",
    Grade: function (grade) {
        // console.log("His grade is " + grade)

        return "His grade is " + grade
    },
    classes: ["math", "english", "gym", "cooking"]
}

// console.log(student)
// console.log("===============================================================")
// console.log(student.lastName)
// console.log("===============================================================")
// console.log(student.Grade(99))
// console.log("===============================================================")
// console.log(student.classes[3])
// console.log("===============================================================")
// console.log(student.classes.push("history"))
// console.log(student.classes)
// console.log("===============================================================")
// console.log("===============================================================")

// ================================================================================================

var person = {
    name: "James",
    age: "30",
    car: {
        name: "Camry",
        year: 2010,
        price: 12000,
        type: "sedan"
    }
}
// console.log(person)
// console.log("===============================================================")
// person["birthplace"] = "mexico"
// console.log(person)
// console.log("===============================================================")
// person.graduated = 2005
// console.log(person)
// console.log("===============================================================")
// person.age = 35
// console.log(person)

// ================================================================================================

var men = [{
    name: "Chris",
    age: 37,
    car: {
        name: "ram",
        year: 2010,
        price: 30000,
        type: "truck"
    }
},
{
    name: "John",
    age: 36,
    car: {
        name: "lexus",
        year: 2022,
        price: 80000,
        type: "sedan"
    }
},
{
    name: "Richard",
    age: 48,
    car: {
        name: "mclaren",
        year: 2020,
        price: 210000,
        type: "sport"
    }
},
]

console.log(men)
// console.log(men[1].name)
men[0].props = "chain"
var underdog = men[0].props
console.log(men)