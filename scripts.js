var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bgColor = document.getElementById('gradient');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');

console.log(btn1);
console.log(btn2);

function colorPicker() {
	bgColor.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = bgColor.style.background + ";";
}

function randomColorL() {
	var a = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var c = Math.floor(Math.random() * 255);
	bgColor.style.background = "linear-gradient(to right, rgb(" + a + "," + b + "," + c + ")," + color2.value;
}

function randomColorR() {
	var d = Math.floor(Math.random() * 255);
	var e = Math.floor(Math.random() * 255);
	var f = Math.floor(Math.random() * 255);
	bgColor.style.background = "linear-gradient(to right," + color1.value + ", rgb(" + d + "," + e + "," + f + ")";
}


color1.addEventListener("input", colorPicker);
color2.addEventListener("input", colorPicker);

btn1.addEventListener('click', randomColorL);
btn2.addEventListener('click', randomColorR);


function isUserValid(bool) {
	return bool;
}

var automatedAnswer =
		"Your account # is " + (isUserValid(false) ? "1234" : "not available");