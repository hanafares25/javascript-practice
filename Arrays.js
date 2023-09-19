var guestList= ["Angela", "Joe", "Lara","Jason"];

let guest= prompt(" What is your name?");


if(guestList.includes(guest)){
    alert(" Welcome to the party!")
}
else{
    alert("Sorry, You are not invited.")
}