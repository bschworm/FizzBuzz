$(document).ready(function(){
	function addItem(item){
		$('body').append(item + " ");
	}

	for(var i =1; i <= 100; i++){
		if (i % 3 > 0){
			if (i % 5 > 0) {
				addItem(i);
			}
		}
		if (i % 3 == 0){
			addItem('fizz');
		}
		if (i % 5 == 0){
			addItem('buzz');
		}
	}
});