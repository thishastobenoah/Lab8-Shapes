let getAreaOfCircle = (radius) => Math.PI * Math.pow(radius, 2);

let getCircumferenceOfCircle = (radius) => 2 * Math.PI * radius;

let getAreaOfSquare = (side) => side * side;

let getAreaOfTriangle = (base, height) => (base * height)/2;


console.log(getAreaOfCircle(10));
console.log(getCircumferenceOfCircle(10));
console.log(getAreaOfSquare(10));
console.log(getAreaOfTriangle(10, 10));