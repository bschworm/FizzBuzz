$(document).ready(function(){
	var topNumber = prompt("Enter the number to which to count");

	var addItem = function(item){
			$('body').append(item + " ");
	};

	var fizzBuzzIt = function(number) {
		var result = " ";

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
	
	if (isNaN(+topNumber)){
		addItem("You must enter a number.  Try again.");
	}
	else if (+topNumber % 1 != 0){
		addItem("You must enter a whole number.  Try again.");
	}
	else if (+topNumber == 0)
		addItem("You may not enter zero.  Try again.");

	else{
		for(var i = 1; i <= topNumber; i++){
			addItem(fizzBuzzIt(i));
		}
	}
});