$(document).ready(function() {

	$('button').click(function(e) {
		e.preventDefault();
		input = $('#fizzbuzz-challenge-entry').val();
		parseInt(input);

		if (!input || isNaN(input)) {
			$('#feedback').text("Enter a number");
			return;
		};

		$('#fizzbuzz-challenge-entry').val('');

		counter();
		
	});

	function counter() {

		$('#shopping-list-entry').val('');

		for (var i = 1; i <= input; i++) { 
			if (i % 5 == 0 && i % 3 == 0) {
				$('.list').append("<p>Fizz Buzz</p>");
			}

			else if (i % 3 == 0){
				$('.list').append("<p>fizz</p>");
			}

			else if (i % 5 == 0){
				$('.list').append("<p>buzz</p>");
			}

			else {
			 	$('.list').append("<p>"+ i +"</p>");
			}

		};
	};
});	


