function EvenOdd(a) {
    if (a % 2 === 0) {
        console.log(a + " is even.");
    } else {
        console.log(a + " is odd.");
    }
}

EvenOdd(5);
EvenOdd(10);

function CapitalizeLetter(str) {
    console.log(str.toUpperCase());
}

CapitalizeLetter("knox pinkman");

function CalculateArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("Area of the circle with radius " + radius + " is: " + area.toFixed(2));
}       

CalculateArea(5);

function addition(a, b) {
    console.log(a + b);
}
addition(10, 20);