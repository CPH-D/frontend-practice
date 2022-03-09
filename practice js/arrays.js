var users = ["Adrian", "Brian", "Charlie", "Dianne", "Emily"]

// console.log(users[2])

var userData = ["Adrian", 2, { user: "Brian" }, ["array1", "array2"], "Dianne", "Emily"]

// console.log(userData)
console.log(userData[2].user)

// ================================================================================================

var fruits = ["apple", "banana", "orange"]
console.log(fruits)

fruits.push("mango")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.splice(1, 1)
console.log(fruits)

// ================================================================================================

var wweStars = ["Stone Cold", "Hulk Hogan", "Undertaker", "John Cena", "The Rock"]
console.log(wweStars)
console.log(wweStars[3])
wweStars.push("Ric Flair")
wweStars.splice(3, 1)
console.log(wweStars.reverse())