function GCD(a,b) {
    let gcd;
    //if GCD is one of both numbers
   if(a % b === 0 && a<b ){
        gcd=a;
   }
   else if(a%b === 0 && a>b ){
       gcd=b;
   }
   //    
   else{
       while(a%b !== 0)
           {
               let temp = b;
               b = a%b;
               a = b;
           }
       gcd=a;
   }
    return gcd;
    
}

var result = GCD(24,18);
console.log(" GCD between 24 and 18 is: " + result);
