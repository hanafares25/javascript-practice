let output = [];
let number = 1;

function fizzBuzz(){
  if(number%3 === 0 && number%5 === 0 ){
      output.push("fizzBuzz");
    }
      
    else if( number%5 === 0){
         output.push("Buzz");
    }
    else if( number%3 === 0)
    {
         output.push("fizz");
    }
    else output.push(number);

    number++;
    
  console.log(output); 
}

while(count<100)
    {
        fizzBuzz();
    }
