let ok = document.getElementById('OK');

// if user press ok button, it goes to next page
ok.addEventListener('click', () => {
    return window.location.assign("../depositCheck/depositCheck.html");
});
