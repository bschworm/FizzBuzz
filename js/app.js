$(document).ready(function(){
	var topNumber = prompt("Enter the number to which to count");

	var addItem = function(item){
			$('body').append(item + " ");
	};

	var fizzBuzzIt = function(number) {
		var result = "";

		if (number % 3 != 0 && number % 5 != 0) {
			result += number;
		}
		if (number % 3 == 0){
			result += 'fizz';
		}
		if (number % 5 == 0){
			result += 'buzz';
		}

		return result;
	};
	
	var checkValidInput = function(input){
		var message = "";

		if (isNaN(+input)){
			message = "You must enter a number.  Try again.";
		}
		else if (+input % 1 != 0){
			message = "You must enter a whole number.  Try again.";
		}
		else if (+input == 0){
			message = "You may not enter zero.  Try again.";
		}
		else{
			message = true;
		}

		return message;
	};
	

	var validInput = checkValidInput(topNumber);
	if (validInput == true){
		for(var i = 1; i <= topNumber; i++){
			addItem(fizzBuzzIt(i));
		}
	}
	else{
		addItem(validInput);
	}
});