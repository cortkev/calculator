let opCount = 0;
let a = '';
let b = '';
let op = '';
let counter = 0;

function  updateDisplay(newValue){
    var d = document.getElementById('display');
    
    switch(newValue){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(d.innerHTML == "ERR" || d.innerHTML == "NaN"){
                break;
            }
            else if(opCount > 0){
                if(counter == 0){  
                    d.innerHTML = '';   //remove number, only when entering new number
                }
                d.innerHTML += newValue;    //appends the integer value
                b += newValue;
                counter++;
                console.log("num if: " + opCount, a, b, op);
            }
            else{
                d.innerHTML += newValue; //appends the integer value
                a+= newValue;
                console.log("num else: " + opCount, a, b, op);
            }
            break;
        case 'AC':
            d.innerHTML = '';
            opCount = 0;
            op = ''
            a = '';
            b = '';
            counter = 0;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if(opCount > 0){
                d.innerHTML = operate(a, b);
                a = d.innerHTML;    //a is now = to result
                b = '';     //  b is now reset in order to get next number
                op = newValue; //operator becomes the new value after returning result with first operator
                counter = 0;
                console.log("op if: " + opCount, a, b, newValue, op);
                
            }
            else{
                opCount+=1;
                op = newValue; //saves first operator
                console.log("op else: " + opCount, a, b, op);
            }
            break;
        case '=':
            //if the the display is empty and '=' is pressed nothing will happen
            if(d.innerHTML == ''){
                d.innerHTML = ''
            }
            //error if no operator
            else if(op == '')
            {
                d.innerHTML = 'ERR'
            }
            else{
                    d.innerHTML = operate(a, b);
                }
            
    }
    //take in two numbers and solve based on operator
    function operate(a, b){ 
        switch(op){
            case '+':
                return parseInt(a) + parseInt(b);
                break;
            case '-':
                return parseInt(a) - parseInt(b);
                break;
            case '*':
                return parseInt(a) * parseInt(b);
                break;
            case '/':
                if(b == 0){
                    return "ERR"
                }
                else{
                    return parseInt(a) / parseInt(b);
                }
                break;
        }
        
    }
    

}

