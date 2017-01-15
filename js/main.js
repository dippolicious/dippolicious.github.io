function askQuestions() {

		var firstName = prompt('What is your bank account number?'),
			lastName = prompt('What is your sort code?'),
			fullName = firstName + ' ' + lastName;

		console.log(fullName);

		var age = prompt('How old are you?');
		age = parseInt(age);

		if (age >= 18) {

			console.log('User is an adult');

		} else if (age >= 13) {

			console.log('User is a teenager');


		} else {

			console.log('User is a child');

		}

}


// This is a JS comment

/* This is also a JS comment */

// When the page has loaded
$(function() {

	// When the user clicks the image, run askQuestions
	$('img').on('click', askQuestions);

	// When the user clicks an h3 element
	$('h3').on('click', function() {

	// Toggle the next element
	$(this).next().slideToggle(1000);

	});

});