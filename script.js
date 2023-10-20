function getAreaOfCircle(radius){
    return Math.PI * Math.pow(radius, 2);
}

function getCircumferenceOfCircle(radius){
    return 2 * Math.PI * radius;
}

function getAreaOfSquare(side){
    return side * side;
}

function getAreaOfTriangle(base, height){
    return (base * height)/2;
}


console.log(getAreaOfCircle(10));
console.log(getCircumferenceOfCircle(10));
console.log(getAreaOfSquare(10));
console.log(getAreaOfTriangle(10, 10));