// text change
function textChange(){
  document.getElementById('h2').
  innerHTML="Oh really";
}

// date
function showDate(){
  document.getElementById('dt').innerHTML=Date();
}

// img

function bulbOn(){
  document.getElementById('img').src="images/pic_bulbon.gif"
}

function bulbOff(){
  document.getElementById('img').src="images/pic_bulboff.gif"
}
// color change
function colorChange(){
  document.getElementById('cc').style.color="red";
}
// show/hide
function textShow(){
  document.getElementById('sh').style.display="block";
}

function textHide(){
  document.getElementById('sh').style.display="none";
}
// addition
let number1,number2 

number1=6
number2=4

number1 += number2;

function dataAddition(){
  document.getElementById('ss').innerHTML=number1;
}