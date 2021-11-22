let amount = document.getElementById('amount');
let back = document.getElementById('backPage');
// get balance of user from storage
let money = localStorage.getItem('currentMoney');
// we need array go store items 
// which is used for adding into the table dynamically
var newArray = localStorage.getItem('array');
var array = JSON.parse(newArray);
// empty html string to add to existing html
var html = '';

// text which shows current balance of user
amount.innerText = "Current Balance: $" + money;

// using iteration to add items into the table dynamically
// get time, funds out, funds in, balance from array
// which is stored independently through each steps such as withdraw, deposit, transfer
// the table is created every time when the page is loaded
for (var i=0; i<array.length;i++){
    html += '<tr>';
    html += '<td>'+array[i].time+'</td>';
    html += '<td>'+array[i].out+'</td>';
    html += '<td>'+array[i].in+'</td>'; 
    html += '<td>'+array[i].balance+'</td>';
    html += '</tr>';
}
document.getElementById('body').innerHTML+=html;

// if user press back button, 
// the page changes to menu page
back.addEventListener('click', () => {
    return window.location.assign("../menu/menu.html");
});