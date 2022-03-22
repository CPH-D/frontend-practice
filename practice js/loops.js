var n;

for (n = 0; n < 11; n++) {
    console.log(n)
}

console.log("===============================================================")

var names = ["Joe", "Charlie", "Stephanie", "Peter"]
var i;

for (i = 0; i < 4; i++) {
    if (i == 3) {
        console.log(names[i] + " -- This is the last one.")
    } else {
        console.log(names[i])
    }
}

console.log("===============================================================")

// while loop
var cars = ["honda", "benz", "bmw"]
var c = 0;

while (c < cars.length) {
    console.log(cars[c])
    c++
}

console.log("===============================================================")

// do / while loop
var cars2 = ["honda", "benz", "bmw"]
var c2 = 0

do {
    console.log(c2)
    c2++
}
while (c2 < 21)