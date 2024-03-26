/*Write a simple calculator application. 
Ask the user for the following input, one by one: 
two numbers and a character representing a mathematical operation, 
one of "+", "-", "*", "/". If the user input is valid, 
calculate the result and show it to the user. 
If the user input is invalid, display a message that informs the user that an error has occurred.
Remember that the value returned by the prompt function is of the type string.
You can use the Number.isNaN method to check if you get the correct number after conversion. 
For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
*/
let proceed = true;

    while( proceed === true ){
let n1 = prompt("Insert here the first number.");
let n2 = prompt("Insert here the second number.");
    if(Number.isNaN(Number(n1)) === true || Number.isNaN(Number(n2)) === true){
        alert("Insert a valid number.");
    }
    else{
    let op = prompt("Insert here the mathematical operator.");
    
    let tn1 = Number(n1);
    let tn2 = Number(n2);
    
        if(op === "+"){
        let result = (tn1 + tn2);
            alert( `The result is ${result}` );
        }
        else if(op === "-"){
            let result = (tn1 - tn2);
            alert( `The result is ${result}` );
        }
        else if(op === "*" || op == "X"){
            let result = (tn1 * tn2);
            alert( `The result is ${result}` );
        }
        else if(op === "/"){
            let result = (tn1 / tn2);
            alert( `The result is ${result}` );
        }
        else{
            alert("Insert a valid simple mathematical operator");
        }
    
        proceed = confirm("Do you wish to do more operations?");
    }
}
