let home = document.getElementById('home');
let again = document.getElementById('again');
let returnCard = document.getElementById('return');

// if user presses each button
// the pages change to where it is allocated early
home.addEventListener('click', () => {
    // go to menu page
    return window.location.assign("../menu/menu.html");
});

again.addEventListener('click', () => {
    // go to withdraw funds page
    return window.location.assign("../withdraw/withdraw.html");
});

returnCard.addEventListener('click', () => {
    // go to start page (account Number)
    return window.location.assign("../start/start.html");
});

