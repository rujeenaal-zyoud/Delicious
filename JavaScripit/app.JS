


alert("HI")
var NAME = prompt("Please enter your name");
if(NAME===null||NAME===""){
    var hello ="hi ,welcome in My sweet webpage ";
}else{var hello ="hi "+NAME+",welcome in  My sweet webpage";}

var sweets = prompt("Choics cookies or bakery?");

if (sweets == 'cookies') {
    document.write('<div><img src="picture/COOKIES.jpg" alt="cookies" style="width: 500px;height:500px ></div>');
} else if (sweets == 'bakery') {
    document.write('<div><img src="picture/BAKERY2.jpg" alt="bakery"  style="width: 500px;height:500px ></div>');
    document.write('<div><img src="picture/BAKER.jpg" alt="bakery"  style="width: 500px;height:500px ></div>');

} else {
    alert("Next time be sure more about it");
}
alert("Thanks for your visit")

 var ar = prompt('Whatis your  the fav sweet ?');
 
 document.write('<h2>'+ ar +'</h2>');


var Sweet = true;


if (Sweet == true) {
    console.log('new ');
}
else {
    console.log('Be sure ');
}