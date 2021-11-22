let display = document.getElementById('display');

let left20 = document.getElementById('left20');
let left40 = document.getElementById('left40');
let left60 = document.getElementById('left60');
let left80 = document.getElementById('left80');

let up100 = document.getElementById('up100');
let up20 = document.getElementById('up20');
let down20 = document.getElementById('down20');
let down100 = document.getElementById('down100');

let right100 = document.getElementById('right100');
let right200 = document.getElementById('right200');
let right300 = document.getElementById('right300');

let backButton = document.getElementById('back');
let enterButton = document.getElementById('enter');

let money=0;

//left
// since it is quick link
// set money and store it to use in next page
// then immediately change page
left20.addEventListener('click', () => {
    money = 20;
    localStorage.setItem("withdrawMoney",money);
    return window.location.assign("../withdrawPage/withdrawPage.html")
});
left40.addEventListener('click', () => {
    money = 40;
    localStorage.setItem("withdrawMoney",money);
    return window.location.assign("../withdrawPage/withdrawPage.html")
});
left60.addEventListener('click', () => {
    money = 60;
    localStorage.setItem("withdrawMoney",money);
    return window.location.assign("../withdrawPage/withdrawPage.html")
});
left80.addEventListener('click', () => {
    money = 80;
    localStorage.setItem("withdrawMoney",money);
    return window.location.assign("../withdrawPage/withdrawPage.html")
});

//center
// through buttons, change the amount of money
// if it is over 300 or under 0, show alert message
// else display the money
up100.addEventListener('click', () => {
    if(Number(display.innerText) + 100 > 300){
        alert("$300 is the limit to withdraw from the ATM");
    }
    else {
        display.innerText = String(Number(display.innerText) + 100);
    }
});
up20.addEventListener('click', () => {
    if(Number(display.innerText) + 20 > 300){
        alert("$300 is the limit to withdraw from the ATM");
    }
    else {
        display.innerText = String(Number(display.innerText) + 20);
    }
});
down20.addEventListener('click', () => {
    if(Number(display.innerText) - 20 >= 0){
        display.innerText = String(Number(display.innerText) - 20);
    }
});

down100.addEventListener('click', () => {
    if(Number(display.innerText) - 100 >= 0){
        display.innerText = String(Number(display.innerText) - 100);
    }
});

//right
// since it is quick link
// set money and store it to use in next page
// then immediately change page
right100.addEventListener('click', () => {
    money = 100;
    localStorage.setItem('withdrawMoney',money);
    return window.location.assign("../withdrawPage/withdrawPage.html")
});

right200.addEventListener('click', () => {
    money = 200;
    localStorage.setItem("withdrawMoney",money);
    return window.location.assign("../withdrawPage/withdrawPage.html")
});
right300.addEventListener('click', () => {
    money = 300;
    localStorage.setItem("withdrawMoney",money);
    return window.location.assign("../withdrawPage/withdrawPage.html")
});

// through enter button,
// store the money displayed into withdrawMoney
// to use it in next page
// then change the page
enterButton.addEventListener('click', () => {
    money = Number(display.innerText);
    localStorage.setItem('withdrawMoney',money);
    return window.location.assign("../withdrawPage/withdrawPage.html");
});

// if user press back button, 
// the page changes to menu page
backButton.addEventListener('click', () => {
    return window.location.assign("../menu/menu.html");
});

