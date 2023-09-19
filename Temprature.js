function celsiusToFarenheit(cTemp){
    var fTemp = cTemp*1.8+32;
    return Math.round(fTemp);
}

function farenheitToCelsius(farTemp){
    var celTemp = (farTemp-32)/1.8;
    return Math.round(celTemp);
}

var Farenheit = celsiusToFarenheit(12);
console.log("12 C to F is: " +Farenheit+ " F");
var Celsius = farenheitToCelsius(96);
console.log("96 F to C is: " +Celsius + " C");