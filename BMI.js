
function bmiCalculator(weight,height)
{
    var value = weight/(height*height);
    return value ;
}




var BMI = bmiCalculator(65,1.8);
   console.log(Math.round(BMI));

