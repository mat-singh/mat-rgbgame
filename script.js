"use strict";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getColors(numColors) {
	var colorsArr = [];
	for (var i=0; i<numColors; i++) {
		// ex: "rgb(107, 70, 255)",
		var color = "rgb(" + getRandomInt(256) + ", " + getRandomInt(256) + ", " + getRandomInt(256) + ")";
		colorsArr.push(color)
	}
	return colorsArr;
}

function startGame() {
	console.log('Started the game');
	var colors = getColors(maxColors);
	pickedColor = colors[getRandomInt(maxColors)];	
	colorDisplay.textContent = pickedColor;
	if (!first) {
		message.textContent = "";		
	}
	setH2Color("rgb(16, 94, 108)");
	newGame.innerHTML = "COLORS <i class='fas fa-sync'></i> ";
	for (var i=0; i<maxColors; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	for (var i=maxColors; i<squares.length; i++) {
		squares[i].style.backgroundColor = "#232323";
	}
	// return pickedColor;
}

function setH2Color(color) {
	for (var i = 0; i < h2.length; i++) {
		h2[i].style.backgroundColor = color;
	}
}

var h2 = document.querySelectorAll("h2");
var message = document.querySelector("#message")
var newGame = document.querySelector("#newbtn");
var easy = document.querySelector("#easybtn");
var hard = document.querySelector("#hardbtn");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");

hard.addEventListener("click", function(){
	if (maxColors !== 6) {
		hard.classList.toggle("selected-level");
		easy.classList.toggle("selected-level");
		maxColors = 6;
		startGame();
	}
});
easy.addEventListener("click", function(){
	if (maxColors !== 3) {
		easy.classList.toggle("selected-level");
		hard.classList.toggle("selected-level");
		maxColors = 3;
		startGame();
	}
});

newGame.addEventListener("click", startGame);	// Start game with current properties

/* hard.addEventListener("mouseenter", function(){
	this.style.fontSize = "smaller";// "24px";
});
hard.addEventListener("mouseleave", function(){
	this.style.fontSize = "initial";// "20px";
});*/

// Default level is EASY
var maxColors = 3;
easy.classList.add("selected-level");
var pickedColor;
var first = true;
startGame();
first = false;

for (var i=0; i<squares.length; i++){
	// console.log('added', i);
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor === pickedColor) {
			message.textContent = "You win !!";
			for (var i=0; i<maxColors; i++) {
				squares[i].style.backgroundColor = pickedColor;
			}
			newGame.textContent = "PLAY AGAIN?";
			setH2Color(pickedColor);
		} else {
			message.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});
}


