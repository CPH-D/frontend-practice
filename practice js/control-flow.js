var user1 = {
    name: 'chris',
    age: 37,
    likes: 9
}

var user2 = {
    name: 'ashley',
    age: 16,
    likes: 12
}

var user3 = {
    name: 'tim',
    age: 17,
    likes: 5
}

// age must be 18 and older to pass

if (user3.age >= 18) {
    console.log("User is old enough.")
} else if (user3.age == 17) {
    console.log("User is almost old enough.")
} else {
    console.log("User is too young.")
}

console.log("=================================================================")

var user = "Chris"

if (user == "Chris") {
    console.log("Welcome " + user + "!")
} else if (user == "Peter") {
    console.log("Welcome Peter.")
} else {
    console.log("User unknown.")
}

console.log("=================================================================")


// switch statements can save you from doing if else functions

userFirstLetter = "J"

switch (userFirstLetter) {
    case "N":
        // code block
        console.log("Hello Nancy")
        break;
    case "B":
        // code block
        console.log("Hello Brian")
        break;
    case "J":
        // code block
        console.log("Hello James")
        break;
    default:
        // code block
        console.log("Who are you?")
}

var userLikes = 20

switch (userLikes) {
    case 2:
        // code block
        console.log("Low amount of likes")
        break;
    case 20:
        // code block
        console.log("Moderate amount of likes")
        break;
    case 200:
        // code block
        console.log("High amount of likes")
        break;
    default:
        // code block
        console.log("How many likes?")
}