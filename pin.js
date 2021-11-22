let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let returnPage = document.getElementById('return');
// value to store pin Number to compare if it is correct or not
let pin='';
// value to count attempt
let cnt = 1;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        // if pin Number is longer than 4, it is not displayed, also not stored
        if(display.innerText.length >= 4){
            if ((e.target.innerText) == 'Delete'){
                display.innerText = display.innerText.slice(0, -1);
                pin = pin.slice(0,-1);
            }
            else if ((e.target.innerText) == 'Enter'){
                // if pin Number is same with value provided, go to menu page
                if(pin == '1234'){
                    return window.location.assign("../menu/menu.html");
                }
                // if it is not same, show alert message with the number of attempts left, 
                // and initialize the text for user to type it again
                // also initialize the storage of pin Number
                else{
                    if (cnt<5){
                        alert("Incorrect PIN. You have "+(5-cnt)+" attempts left");
                        cnt+=1;
                        display.innerText = '';
                        pin = '';
                    }
                    // if the user enter 5 times
                    // show alert massage saying no more attempts
                    // and move back to start page (account Number page)
                    else {
                        alert("No more attempts");
                        return window.location.assign("../start/start.html");
                    }
                }
            }
            // if user press number button after 4 digits are fully typed, 
            // it is not displayed anymore neither stored
            else{
                display.innerText += '';
            }
        }
        // if the length of typed pin Number is shorter than 4,
        else{
            if ((e.target.innerText) == 'Delete'){
                display.innerText = display.innerText.slice(0, -1);
                pin = pin.slice(0,-1);
            }
            // it is explicitly not a pin Number provided,
            // show alert message with the number of attempts left,
            // and initialize the text and the storage of pin Number
            else if((e.target.innerText) == 'Enter'){
                if (cnt<5){
                    alert("Incorrect PIN. You have "+(5-cnt)+" attempts left");
                    cnt+=1;
                    display.innerText = '';
                    pin='';
                }
                // if the user enter 5 times
                // show alert massage saying no more attempts
                // and move back to start page (account Number page)
                else {
                    alert("No more attempts");
                    return window.location.assign("../start/start.html");
                }
            }
            else{
                // if button is pressed without any issues
                // store it in the storage pin number
                // however it should be shown with '●' on the page
                pin += e.target.innerText;
                display.innerText += '●';
            }
        }
    });
});

// if user press return card button, 
// the page changes to start page (account Number)
returnPage.addEventListener('click', () => {
    return window.location.assign("../start/start.html");
});