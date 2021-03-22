
var NAME = prompt("Please enter your name");
function hi(yourname);
{
    if (NAME === null && NAME === " ") {
        var hello = "hi ,welcome in My sweet webpage ";
    } else { var hello = "hi " + NAME + ",welcome in  My sweet webpage"; }

    alert(hello);
}


hi(NAME);





alert("Thanks for your visit");





// var sweets = prompt("Choics cookies or bakery?");

// if (sweets == 'cookies') {
//     document.write('<div><img src="picture/COOKIES.jpg" alt="cookies" style='width: 500px;height:500px ></div>');
// } else if (sweets == 'bakery') {
//     document.write('<div><img src="picture/BAKERY2.jpg" alt="bakery"  style='width: 500px;height:500px ></div>');
// } else {
//     alert("Next time be sure more about it");
// }

var sweets = prompt("Choics cookies or bakery?");
var getsweets=function(){

while (sweets !== "cookies" && sweets !== "bakery") {
    sweets = prompt('plz write cookies or bakery?');
}
var num = prompt("How many pic you want to see?");
var paint = '';
var result = '';

if (sweets == 'cookies') {
    paint = '<img src="https://handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg "></br>';

} else if (sweets == 'bakery') {
    paint = '<img src="https://images.getbento.com/accounts/a3e72eb05f5158bbaa07dab02b2d4748/media/images/60195Photo_Apr_25_8_30_36_PM.jpg?fit=max&w=1800&auto=format,compress"></br>';
}

for (var i = 0; i < num; i++) {
    result += paint;

}
document.write(result);
console.log(result);
console.log(num);
return(result);
}

getsweets();


var ar = prompt('Whatis your  the fav sweet ?');
document.write('<h2>' + ar + '</h2>');
console.log(ar);



//  var coloring = confirm("would you like to change the background-color? press ok to submit, press cancel to cancel");
// var userColor="";
// if(coloring==true)
// {
    // userColor = prompt("do you want the background-color to be black, red or blue?");
    // if(userColor=="black")
//    { document.body.style.backgroundColor = "black"; }
    // else if(userColor=="red")
    // { document.body.style.backgroundColor = "red"; }
    // else if(userColor=="blue")
    // { document.body.style.backgroundColor = "blue"; }
// }
// else alert("page will be displayed in it's original colors!");
var age = prompt("whats your age?");

function getAge(userAge) {


    if (userAge >= 18 && userAge <= 35) {

        alert('welcome to the site');

    } else if (userAge < 18 || userAge > 35) {

        alert('sorry ');

    } else {

        alert('please input a number');

    }

}



getAge(age);