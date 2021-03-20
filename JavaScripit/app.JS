



var NAME = prompt("Please enter your name");
if (NAME === null || NAME === "") {
    var hello = "hi ,welcome in My sweet webpage ";
} else { var hello = "hi " + NAME + ",welcome in  My sweet webpage"; }



alert("Thanks for your visit")


var sweets = prompt("Choics cookies or bakery?");

if (sweets == 'cookies') {
    document.write('<div><img src="picture/COOKIES.jpg" alt="cookies" style="width: 500px;height:500px ></div>');
} else if (sweets == 'bakery') {
    document.write('<div><img src="picture/BAKERY2.jpg" alt="bakery"  style="width: 500px;height:500px ></div>');
} else {
    alert("Next time be sure more about it");
}


var ar = prompt('Whatis your  the fav sweet ?');
console.log(ar);

document.write('<h2>' + ar + '</h2>');



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
