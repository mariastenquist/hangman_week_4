function init(){
	printGuessfield();
};
window.onload = init; 

var wordBank = [
["C", "H", "I", "P", "M", "U", "N", "K"],
  ["F", "O", "X"],
  ["D", "E", "E", "R"],
  ["S", "Q", "U", "I", "R", "R", "E", "L"],
  ["M", "A", "R", "M", "O", "T"],
  ["P", "I", "K", "A"],
];

var random = Math.floor((Math.random()*(wordBank.length-1))); 

var randomizer = wordBank[random];
var guessfield = new Array(randomizer.length);
var counter = 0;

for (var i = 0; i < guessfield.length; i++){
	guessfield[i] = "_ ";
};

function printGuessfield(){
	for (var i = 0; i < guessfield.length; i++){
	let dashes = document.getElementById("dashes");
	let letterbox = document.createTextNode(guessfield[i]);
	dashes.appendChild(letterbox);
	};
};

var checkCharacter = function(){
	let selection = document.rounds; 
	let checking = selection.elements["guess_character"]; 
	let character = checking.value;
	character = character.toUpperCase();

	for (var i = 0; i < randomizer.length; i++){
		if(randomizer[i] === character){
			guessfield[i] = character + " ";
			var correct = true;
		};
	checking.value = "";
	};
	
	var dashes = document.getElementById("dashes").innerHTML = "";
	printGuessfield();
	
	if(!correct){
		var wrongLetters = document.getElementById("wrongLetters");
		var letter = document.createTextNode(" " + character);
		wrongLetters.appendChild(letter); 
		var hangman = document.getElementById("hangman");
		counter++;
	};
	
	var match = true;
	for (var i = 0; i < guessfield.length; i++){
		if(guessfield[i] === "_ "){
			match = false;
		};
	};

	if(match){
		document.getElementById("success").innerHTML = "You win this round!";
	};	
	if(counter === 6){
		document.getElementById("failure").innerHTML = "Sorry, you've been hanged!!";
	};
};


