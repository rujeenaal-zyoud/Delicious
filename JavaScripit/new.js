
var NAME = prompt("Please enter your name");
if (NAME === null || NAME === "") {
    var hello = "hi ,welcome in My sweet webpage ";
} else { var hello = "hi " + NAME + ",welcome in  My sweet webpage"; }



alert("Thanks for your visit")


// var sweets = prompt("Choics cookies or bakery?");

// if (sweets == 'cookies') {
//     document.write('<div><img src="picture/COOKIES.jpg" alt="cookies" style='width: 500px;height:500px ></div>');
// } else if (sweets == 'bakery') {
//     document.write('<div><img src="picture/BAKERY2.jpg" alt="bakery"  style='width: 500px;height:500px ></div>');
// } else {
//     alert("Next time be sure more about it");
// }
var sweets = prompt("Choics cookies or bakery?");
while (sweets !== "cookies" && sweets !== "bakery") {
    sweets = prompt('plz write cookies or bakery?');
}

var paint = '';
var result = '';
var num = prompt("How many pic you want to see?")
if (sweets == 'cookies') {
    paint = '<img src="picture/COOKIES.jpg/"> </br>';
}
else if (sweets == 'bakery') {
    paint = '<img src="picture/BAKER.jpg/"> </br>';
}



for (var i = 0; i < num; i++) {
    result += paint;

}
document.write = result;
console.log(result);




// var ar = prompt('Whatis your  the fav sweet ?');
// document.write('<h2>' + ar + '</h2>');
// console.log(ar);



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
