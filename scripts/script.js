function add(number1, number2){
 return number1 + number2;
}

function substract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1/number2;
}

function operator(operator, number1, number2){
    let result =0;
    switch (operator) {
        case '+': result =add(number1,number2);            
            break;
        case '-': result = substract(number1,number2);         
            break;
        case 'x': result = multiply(number1, number2);          
            break;
        case '/': result = divide(number1,number2)        
            break;

        default:
            break;
    }
    return result;
}

/*pesudocode

-press number put to variable
-press more number cocat to variable
-press operator convert contact to whole number and save operation content
-same steps next number
-press '=' convet 2 number
-do operation and show result
-store result
-store resutl as first number

-make clear button cleat content result
*/
let numbers = document.querySelectorAll('button');

numbers.forEach(number => number.addEventListener('click',operation));

let number1 = null;
let number2 = null;
let operator1 = null;
let result= null;
let results = {};
let show ='';

let output = document.querySelector('input')
//output.value

function clear(){
    output.value = null;
    number1 = null;
    number2 = null;
    operator1 = null;
    result = null;
    results = {};
}

function operation(event){
    let textButton =event.target.textContent;

    if(isNaN(textButton)){
        if(textButton === "Clear")clear();
        else if(textButton === '=' && typeof number1 === 'number' && number2 !== null ){
            number2 = +number2;
            result = `${operator(operator1,number1,number2)}`;
            results.result =` =${result}`;
        } 
        else{
            if(number1 !== null && operator1 === null){
                operator1 = textButton
                number1 = +number1;
                results.operator = operator1;
            } 
            else if(number1 !== null && number2 !== null){
                result = `${operator(operator1,+number1,+number2)}`;
                results.result = `= ${result}`;
                operator1= textButton;
                results.operator2 = textButton;
            }
        }          
    }
    else{
        if(number1 === null){
            number1 = textButton;
            results.number1 = number1;
        } 
        else if(typeof number1 === 'string'){
            if(number1 === '0') results.number1 = number1 = textButton;
            else results.number1 = number1 = number1.concat(textButton)
        }  
        else if(typeof number1 === 'number'&& operator1 !== null){
            if(number2 === null){
                number2 = textButton;
                results.number2 = number2;
            } 
            else if(typeof number2 === 'string'){
                if(number2 === '0') results.number2 = number2 = textButton;
                else results.number2 = number2= number2.concat(textButton);  
            }                              
        }     
    }     
    show =''

    for (const key in results){
        
        show =show.concat(results[key]);
    }
    output.value = show;

    if(result !== null) {
        results ={};
        results.number1 =number1 = +result;
        number2 = null;
        operator1 = null;
        result = null;    
    }
}



