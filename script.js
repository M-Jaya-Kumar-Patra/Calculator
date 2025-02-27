let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";


document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        string += key;
        input.value = string;
    } else if (key === 'Enter') {
        try {
            string = eval(string) || "";
        } catch {
            string = "Error";
        }
        input.value = string;
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string || "0";
    } else if (key === 'Escape') {
        string = "";
        input.value = "0";
    }
});

let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            // string = eval(1+eval(string));
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == "GST+"){
            string = eval(string);
            string = string+(string*(18/100))
            input.value = string;
        }
        else if(e.target.innerHTML == "GST-"){
            string = eval(string) || 0;
            string /= 1.18;
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})