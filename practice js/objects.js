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

console.log(student)
console.log("===============================================================")
console.log(student.lastName)
console.log("===============================================================")
console.log(student.Grade(99))
console.log("===============================================================")
console.log(student.classes[3])
console.log("===============================================================")
console.log(student.classes.push("history"))
console.log(student.classes)

// ================================================================================================

