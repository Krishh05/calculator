
let inputString = "";

function input(num) {
    inputString += num;
    document.getElementById("result").value = inputString;
}

function clearInput() {
    inputString = "";
    document.getElementById("result").value = inputString;
}

function calculate() {
    let result = eval(inputString);
    document.getElementById("result").value = result;
    inputString = " "; 
}
