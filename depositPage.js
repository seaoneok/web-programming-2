let selectY = document.getElementById('yes');
let selectN = document.getElementById('no');

let amount = document.getElementById('amount');

// get the amount of transfer money from localStorage
let money = localStorage.getItem('depositMoney');
// get balance from local Storage
let currentMoney = localStorage.getItem('currentMoney');

// get array made previously from localStorage
// to store date, withdrawl and balance
var newArray = localStorage.getItem('array');
array = JSON.parse(newArray);
amount.innerText = "$" + money + "?";

let now = new Date();

selectY.addEventListener('click', () => {
    currentMoney = String(Number(currentMoney)+Number(money));
    // store current Money on the local storage
    localStorage.setItem('currentMoney',currentMoney);
    // push the values, into the array
    // since the funds out is 0, set the value for out as 0
    // store the changed array into local Storage
    array.push({time:now,out:0,in:money,balance:currentMoney});
    array = JSON.stringify(array);
    localStorage.setItem('array',array);
    return window.location.assign("../enterMoney/enterMoney.html");
});

// if user does not agree with the amount of money to deposit
// go back to deposit page
selectN.addEventListener('click', () => {
    return window.location.assign("../deposit/deposit.html");
});
