const text = document.getElementById('output');
var currentInput = '';
var previousInput='';
var operator = null;
var lastActionWasEquals = false;


document.querySelectorAll('.number').forEach(button=>{
    button.addEventListener('click',()=>{
        if (operator) { // Only remove highlight if an operator was previously selected
            document.querySelectorAll('.operator').forEach(button => button.classList.remove('active'));
        }
        currentInput+=button.innerText;
        text.value=currentInput;
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

        // Add highlight to the new operator
        button.classList.add('active');

        // Store the new operator **after** calculation
        operator = button.innerText;
        previousInput = currentInput;
        currentInput = "";
    });
});


document.getElementById('equals').addEventListener('click',()=>{
    if(operator && previousInput){
        calculate(); 
        document.querySelectorAll('.operator').forEach(button=>button.classList.remove('active'));
    }
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
});

let total = 0;
function calculate(){
    
    if(lastActionWasEquals==true){
        var num1=total;
    }
    else{
    var num1 = parseFloat(previousInput);
    }
    const num2 = parseFloat(currentInput);

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
    operator = null;
    
}


