let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
// value to store account Number to compare if it is correct or not
let accNum = '';

// set initial funds, balance
var inMoney = 0;
var outMoney = 0;
let currentTime = new Date();
var currentMoney = 2000;
var array = new Array();

// make array of time, funds in/out, balance
array.push({time:currentTime,in:inMoney,out:outMoney,balance:currentMoney});
var newArray = JSON.stringify(array);

// store values b/c it should be used in other html, js
localStorage.setItem('array',newArray);
localStorage.setItem('currentMoney',currentMoney);

buttons.map( button => {
    button.addEventListener('click', (e) => {
        // if account Number is longer than 16, it is not displayed, also not stored
        if(display.innerText.length >= 16){
            if ((e.target.innerText) == 'Delete'){
                display.innerText = display.innerText.slice(0, -1);
                accNum = accNum.slice(0,-1);
            }
            else if ((e.target.innerText) == 'Enter'){
                // if account Number is same with value provided, go to pin page
                if(accNum == '1234567890123456'){
                    return window.location.assign("../pin/pin.html");
                }
                // if it is not same, show alert message, 
                // and initialize the text for user to type it again
                // also initialize the storage of account Number
                else{
                    alert("That account number does not exist");
                    display.innerText = '';
                    accNum = '';
                }
            }
            // if user press number button after 16 digits are fully typed, 
            // it is not displayed anymore neither stored
            else{
                display.innerText += '';
            }
        }
        // if the length of typed account Number is shorter than 16,
        else{
            if ((e.target.innerText) == 'Delete'){
                display.innerText = display.innerText.slice(0, -1);
                accNum = accNum.slice(0,-1);
            }
            // it is explicitly not an account Number provided,
            // show alert message
            // and initialize the text and the storage
            else if((e.target.innerText) == 'Enter'){
                alert("That account number does not exist");
                display.innerText = '';
                accNum = '';
            }
            else{
                // if button is pressed without any issues
                // store it in the storage account number
                // however it should be shown with '●' on the page
                accNum += e.target.innerText;
                display.innerText += '●';
            }
        }
    });
});