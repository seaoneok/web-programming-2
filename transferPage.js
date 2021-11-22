let selectY = document.getElementById('yes');
let selectN = document.getElementById('no');
let amount = document.getElementById('amount');
let from = document.getElementById('from');
let to = document.getElementById('to');

// get the amount of transfer money from localStorage
let money = localStorage.getItem('transferMoney');
// get account numbers
const fromAccount = localStorage.getItem('fromAccount');
const toAccount = localStorage.getItem('toAccount');
// get balance from local Storage
let currentMoney = localStorage.getItem('currentMoney');

// check the money that user meant to withdraw
amount.innerText = "$" + money + "?";

from.innerText = "From " + fromAccount;
to.innerText = "To " + toAccount;

// get array made previously from localStorage
// to store date, the amount to transfer and balance
var newArray = localStorage.getItem('array');
array = JSON.parse(newArray);
let now = new Date();
let maxMoney = currentMoney;

selectY.addEventListener('click', () => {
    currentMoney = String(Number(currentMoney)-Number(money));
    // if currentMoney is less than 0, 
    // it means transfer is over the buget
    // so show alert message and the maximum budget
    if(Number(currentMoney)<0){
        alert('Not Enough Money\nYour Balance is $'+maxMoney);
        return window.location.assign("../transfer/transfer.html");
    }
    // if there's enough money to transfer
    // push the values, into the array
    // since the funds in is 0, set the value for in as 0
    // store the changed array into local Storage
    else{
        // store current Money on the local storage
        localStorage.setItem('currentMoney', currentMoney);
        array.push({time:now,out:money,in:0,balance:currentMoney});
        array = JSON.stringify(array);
        localStorage.setItem('array',array);
        return window.location.assign("../transferCheck/transferCheck.html");
    }
});

// if user does not agree with the amount of money to transfer
// go back to transfer page
selectN.addEventListener('click', () => {
    return window.location.assign("../transfer/transfer.html");
});