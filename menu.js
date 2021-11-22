let buttons = Array.from(document.getElementsByClassName('button'));
let returnPage = document.getElementById('return');

// if user presses each button
// the pages change to where it is allocated early
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            // go to account information page
            case 'Account Information':
                return window.location.assign("../info/info.html");
            // go to withdraw funds page
            case 'Withdraw Funds':
                return window.location.assign("../withdraw/withdraw.html");
            // go to deposit funds page
            case 'Deposit Funds':
                return window.location.assign("../deposit/deposit.html");
            // go to tranfer funds page
            case 'Transfer':
                return window.location.assign("../transfer/transfer.html");
        }
    });
});

// if user press return card button, 
// the page changes to start page (account Number)
returnPage.addEventListener('click', () => {
    return window.location.assign("../start/start.html");
});