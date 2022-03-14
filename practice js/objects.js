var studnt = {
    id: 85,
    firstName: "Christopher",
    lastName: "Hernandez",
    Grade: function (grade) {
        // console.log("His grade is " + grade)

        return "His grade is " + grade
    },
    classes: ["math", "english", "gym", "cooking"]
}

// console.log(studnt)
// console.log("===============================================================")
// console.log(studnt.lastName)
// console.log("===============================================================")
// console.log(studnt.Grade(99))
// console.log("===============================================================")
// console.log(studnt.classes[3])
// console.log("===============================================================")
// console.log(studnt.classes.push("history"))
// console.log(studnt.classes)
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

// console.log(men)
// console.log(men[1].name)
// men[0].props = "chain"
// var underdog = men[0].props
// console.log(men)

// ================================================================================================

// Declare a variable named student with an object inside that has properties name, age, occupation (use your information) then print the variable

var student = {
    name: "Chris",
    age: 37,
    occupation: "Email-Dev"
}

console.log(student)
console.log("===============================================================================")

// Add a property with your birthday as a string and must be like this object ["key"] then print the variable student

student["birthday"] = "2/15/85"
console.log(student)
console.log("===============================================================================")

// Add an array with all your education but using .key and inside the array you must have other objects with the information of each of the schools you went to like the name, years in the school, and graduation year and then rpint the variable student

student.education = [{
    name: "Lambda School",
    graduation: 2020
},
{
    name: "San Joaquin Valley College",
    graduation: 2014
}
]

console.log(student)
console.log("===============================================================================")

// then print one of the schools name

console.log(student.education[1].name)