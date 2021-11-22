let selectY = document.getElementById('yes');
let selectN = document.getElementById('no');

let amount = document.getElementById('amount');

// get withdrawed money from localStorage
let money = localStorage.getItem('withdrawMoney');
// get balance from local Storage
let currentMoney = localStorage.getItem('currentMoney');
let maxMoney = currentMoney;

// check the money that user meant to withdraw
amount.innerText = "$" + money + "?";

// get array made previously from localStorage
// to store date, withdrawl and balance
var newArray = localStorage.getItem('array');
array = JSON.parse(newArray);
let now = new Date();

selectY.addEventListener('click', () => {
    currentMoney = String(Number(currentMoney)-Number(money));
    // if currentMoney is less than 0, 
    // it means withdrawl is over the buget
    // so show alert message and the maximum budget
    if(Number(currentMoney)<0){
        alert('Not Enough Money\nYour Balance is $' + maxMoney);
        return window.location.assign("../withdraw/withdraw.html");
    }
    // if there's enough money to withdraw
    // push the values, into the array
    // since the funds in is 0, set the value for in as 0
    // store the changed array into local Storage
    else{
        localStorage.setItem('currentMoney',currentMoney);
        array.push({time:now,out:money,in:0,balance:currentMoney});
        array = JSON.stringify(array);
        localStorage.setItem('array',array);
        return window.location.assign("../withdrawCheck/withdrawCheck.html");
    }
});

// if user does not agree with the amount of money to withdraw
// go back to withdraw page
selectN.addEventListener('click', () => {
    return window.location.assign("../withdraw/withdraw.html");
});
