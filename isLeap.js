function isLeap(year)
{
   
    if(year %4 === 0 ){

        if(year%100 !==0)
        {
             return " This is a leap year";
        }
        else if(year%400 === 0) {
            return " This is a leap year";
        }
        else{
           return " This is not a leap year";
        }
    }
    else{
        return " This is not a leap year";
    }
    
}


console.log(isLeap(1997))