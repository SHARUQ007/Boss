
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

switch(randomNumber1)
{
case 1:
document.querySelector("h1").innerHTML = "🚩 <br> SUKESH";
break;
case 2:
document.querySelector("h1").innerHTML = "🚩 <br> SALMAN";
break;
case 3:
document.querySelector("h1").innerHTML = "🚩 <br> SHARUQ";
break;
case 4:
document.querySelector("h1").innerHTML = "🚩 <br> KEERTHANA";
break;
case 5:
document.querySelector("h1").innerHTML = "🚩 <br> VISMAY";
break;
case 6:
document.querySelector("h1").innerHTML = "🚩 <br> MUTHU";
}
