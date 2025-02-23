const text = document.getElementById('output');
var currentInput = '';
var previousInput='';
var operator = null;
var lastOperator= null;
var lastActionWasEquals = false;
var lastResult = 0;
var num1;
var num2;
var save;
document.querySelectorAll('.number').forEach(button=>{
    button.addEventListener('click',()=>{
        if (operator) { // Only remove highlight if an operator was previously selected
            document.querySelectorAll('.operator').forEach(button => button.classList.remove('active'));
        }
        currentInput+=button.innerText;
        text.value=currentInput;
        lastActionWasEquals=false;
    });
});


document.querySelectorAll('.operator').forEach(button =>{
    button.addEventListener('click',()=>{
        // Perform calculation only if there was a previous input
        if (operator && previousInput){
            calculate();
        }

        // Remove highlight from all operators
        document.querySelectorAll('.operator').forEach(btn => btn.classList.remove('active'));

        
        button.classList.add('active');

      
        operator = button.innerText;
        if (operator!='='){
            lastOperator=operator
            lastActionWasEquals=false;
        }
        
        previousInput = currentInput;
        currentInput = "";
        
    });
});


document.querySelector('.equals').addEventListener('click',()=>{
    if(operator && previousInput){
        calculate(); 
        document.querySelectorAll('.operator').forEach(button=>button.classList.remove('active'));
    }
    previousInput=total.toString();
    currentInput="";
    lastActionWasEquals=true;
});

document.querySelector('.clear').addEventListener('click',()=>{
    document.querySelectorAll('.operator').forEach(button=>button.classList.remove('active'));
    lastActionWasEquals = false;
    currentInput=''
    previousInput=''
    operator = null;
    text.value='';
});

document.querySelector('.decimal').addEventListener('click',()=>{
    if(!currentInput.includes('.')){
    currentInput+='.';
    text.value=currentInput;
    }
    lastActionWasEquals = false;
});


function doubleEquals(num1,num2,lastOperator){
    switch(lastOperator){
        case '+':
            total=num1+num2;
            break;
        case '-':
            total=num1-num2;
            break;
        case 'X':
            total=num1*num2;
            break;
        case '/':
            total = num1/num2;
            break;
    }
    currentInput=total.toString();
    text.value = total;
}

let total = 0;
function calculate(){
    
    if(lastActionWasEquals==true){
        num1=total;
        save=num2;
        doubleEquals(num1,num2,lastOperator);
        return;
    }
    else{
        num1 = parseFloat(previousInput);
        save=num2;
        num2 = parseFloat(currentInput);
    }
        
    switch(operator){
        case '+':
            total =num1+num2;
            break;
        case '-':
            total = num1-num2;
            break;
        case 'X':
            total = num1*num2;
            break;
        case '/':
            total = num1/num2;
            break;
    }
    currentInput=total.toString();
    text.value = total;
    // operator = null;
    
}


