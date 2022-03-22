var n;

for (n = 0; n < 11; n++) {
    console.log(n)
}

console.log("============================================================")

var names = ["Joe", "Charlie", "Stephanie", "Peter"]
var i;

for (i = 0; i < 4; i++) {
    if (i == 3) {
        console.log(names[i] + " -- This is the last one.")
    } else {
        console.log(names[i])
    }
}

console.log("============================================================")

// while loop
var car = ["honda", "benz", "bmw"]
var c = 0;

while (c < car.length) {
    console.log(car[c])
    c++
}

console.log("============================================================")

// do / while loop
var car2 = ["honda", "benz", "bmw"]
var c2 = 0

do {
    console.log(c2)
    c2++
}
while (c2 < 21)

console.log("============================================================")

// for-in-loop
var stars = [
    { name: "steve" }, { name: "bret" }, { name: "eddie" }, { name: "chris" }
]

var s = 0

for (s in stars) {
    console.log(stars[s].name)
}

console.log("============================================================")

// for-of-loop
var mentors = [
    { name: "jonathon" }, { name: "richard" }, { name: "rollo" }, { name: "stirling" }
]

var m = 0

for (m of mentors) {
    console.log(m.name)
}

console.log("============================================================")
console.log("=======================EXCERCISE============================")
console.log("============================================================")

// print your name 3 times in a loop


// create an array named brands with 4 of your favorite name brands then choose whatever loop you like to print all 4 brands


// create an array with objects inside that contain information of each brand but it must have name, product, and price inside.  then print a sentence that says "(brandname)'s product cost (price)"

