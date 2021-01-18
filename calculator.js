const input = document.querySelector('.input');
const output = document.querySelector('.output');
const btns = document.querySelectorAll('.btn');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const sign = document.querySelector('.sign');


// taking input from buttons
btns.forEach
(btn => {
    btn.addEventListener('click' , () => {

        let content = btn.getAttribute('number');
        
        // doing operations on number buttons
        if(btn.getAttribute('number') == "1" || btn.getAttribute('number') == "2" 
        || btn.getAttribute('number') == "3" || btn.getAttribute('number') == "4"
        || btn.getAttribute('number') == "5" || btn.getAttribute('number') == "6"
        || btn.getAttribute('number') == "7" || btn.getAttribute('number') == "8"
        || btn.getAttribute('number') == "9" || btn.getAttribute('number') == "0"
        || btn.getAttribute('number') == ".")
        {

            // handling multiple number buttons after output
            if(output.textContent.slice(-1) ==  "1" || output.textContent.slice(-1) == "1" || output.textContent.slice(-1) == "2" 
                || output.textContent.slice(-1)== "3" || output.textContent.slice(-1)== "4" || output.textContent.slice(-1) == "5"
                || output.textContent.slice(-1)== "6" || output.textContent.slice(-1)== "7" || output.textContent.slice(-1) == "8"
                || output.textContent.slice(-1)== "9" || output.textContent.slice(-1)== "0")
                {
                    if(content==  "1" || content == "1" || content == "2" 
                    || content == "3" || content == "4" || content == "5"
                    || content == "6" || content == "7" || content == "8"
                    || content == "9" || content == "0")
                    {
                        output.textContent = '';
                        input.textContent = '';
                    }
                    else
                    {
                        input.textContent += content;
                    }
                }
            
            // checking . does not repeat
            if(!input.textContent.includes('.'))
            {
                input.textContent += content;
            }

            else if(input.textContent.includes('.') && content!='.')
            {
                input.textContent += content;
            }
        }

        // doing operations on operator buttons
        else
        {
            if(output.textContent.slice(-1) ==  "1" || output.textContent.slice(-1) == "1" || output.textContent.slice(-1) == "2" 
            || output.textContent.slice(-1)== "3" || output.textContent.slice(-1)== "4" || output.textContent.slice(-1) == "5"
            || output.textContent.slice(-1)== "6" || output.textContent.slice(-1)== "7" || output.textContent.slice(-1) == "8"
            || output.textContent.slice(-1)== "9" || output.textContent.slice(-1)== "0")
            {
                if(input.textContent.split('')[0] ==  "1" || input.textContent.split('')[0] == "1" || input.textContent.split('')[0] == "2" 
                || input.textContent.split('')[0] == "3" || input.textContent.split('')[0] == "4" || input.textContent.split('')[0] == "5"
                || input.textContent.split('')[0] == "6" || input.textContent.split('')[0] == "7" || input.textContent.split('')[0] == "8"
                || input.textContent.split('')[0] == "9" || input.textContent.split('')[0] == "0")
                {
                    output.textContent = input.textContent;
                    input.textContent = '';
                }
            }
            
            // handling - sign operator with + and - sign operator
            if(output.textContent.slice(-1) ==  "-")
            {
                if(input.textContent.split('')[0] ==  "-")
                {
                    let str = output.textContent;
                    let arr = str.split('');
                    arr.pop();
                    output.textContent = arr.join('');
                    output.textContent+="+";
                    input.textContent = input.textContent.substring(1);
                }

                else if(input.textContent.split('')[0] ==  "+")
                {
                    let str = output.textContent;
                    let arr = str.split('');
                    arr.pop();
                    output.textContent = arr.join('');
                    output.textContent+="-";
                    input.textContent = input.textContent.substring(1);
                }
            }

            // handling + sign operator with + and - sign operator
            else if(output.textContent.slice(-1) ==  "+")
            {
                if(input.textContent.split('')[0] ==  "-")
                {
                    let str = output.textContent;
                    let arr = str.split('');
                    arr.pop();
                    output.textContent = arr.join('');
                    output.textContent+="-";
                    input.textContent = input.textContent.substring(1);
                }

                else if(input.textContent.split('')[0] ==  "+")
                {
                    let str = output.textContent;
                    let arr = str.split('');
                    arr.pop();
                    output.textContent = arr.join('');
                    output.textContent+="+";
                    input.textContent = input.textContent.substring(1);
                }
            }

            output.textContent += input.textContent;
            
            // replacing multiply operator's entry simultaneously
            if(output.textContent.slice(-1) ==  "+" || output.textContent.slice(-1) == "+" || output.textContent.slice(-1) == "*" 
            || output.textContent.slice(-1)== "/" || output.textContent.slice(-1)== "%" || output.textContent.slice(-1) == "-")
            {
                if(content ==  "+" || content == "+" || content == "*" 
                || content == "/" || content == "%" || content == "-")
                {
                    let str = output.textContent;
                    let arr = str.split('');
                    arr.pop();
                    output.textContent = arr.join('');
                    output.textContent += input.textContent;
                }
            }

            output.textContent += content;
            input.textContent = '';  
        }
    })
})


// clearing output field
clear.addEventListener
('click' , () => {
    input.textContent = '';
    output.textContent = '';
})


// converting sign
sign.addEventListener
('click' , () => {
    if(input.textContent == 0 || input.textContent == "0")
    {
        input.textContent = "-";  
    }

    else
    {
        input.textContent = input.textContent * -1;
    }
})


// calculating result
equal.addEventListener
('click' , () => {
    if(output.textContent.slice(-1) ==  "+" || output.textContent.slice(-1) == "+" || output.textContent.slice(-1) == "*" 
    || output.textContent.slice(-1)== "/" || output.textContent.slice(-1)== "%" || output.textContent.slice(-1) == "-")
    {
        output.textContent += input.textContent;
        input.textContent = ''; 
        let expression = output.textContent;
        input.textContent = eval(expression);
    }

    // handling multiple = button press
    else
    {
        if(input.textContent)
        {
                    output.textContent = input.textContent;
                    input.textContent = '';
        }
    }
    
})
