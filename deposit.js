let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let enter = document.getElementById('enter');
let backPage = document.getElementById('back');

let money = '';

buttons.map( button => {
    button.addEventListener('click', (e) => {
        // if user press delete button
        // delete last one digit if input money
        if ((e.target.innerText) == 'Del'){
            display.innerText = display.innerText.slice(0, -1);
        }
        // else enter the button number to the display
        else{
            display.innerText += e.target.innerText;
        }
    });
});

// when the user press enter button
enter.addEventListener('click', () => {
    money = display.innerText;
    // store amount of money to deposit
    localStorage.setItem('depositMoney',money);
    // change to depositPage
    return window.location.assign("../depositPage/depositPage.html");
});

// if user press back button, 
// the page changes to menu page
backPage.addEventListener('click', () => {
    return window.location.assign("../menu/menu.html");
});