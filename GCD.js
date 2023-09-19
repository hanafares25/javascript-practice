function findGCD(number1, number2){
    var gcd;
    if(number1%2 === 0 && number2%2 === 0)
    {
        gcd = 2;
        gcd = findGCD(number1/2, number2/2)*gcd;
        return gcd;
    }
    else if( number1%3 === 0 && number2%3 === 0){
        gcd = 3;
      gcd = findGCD(number1/3, number2/3)*gcd;
        return gcd;
    }
    else if(number1%5 === 0 && number2%5 === 0){
        gcd = 5;
        gcd = findGCD(number1/5, number2/5)*gcd;
        return gcd;
    }

    else if (number1%7 === 0 && number2%7 === 0){
        gcd = 7;
        gcd = findGCD(number1/7,number2/7)*gcd;
        return gcd;
    }

    else return 1;
}


var result = findGCD(104,14);
console.log("GCD between 104 and 14 is " + result );