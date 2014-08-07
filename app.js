$(document).ready(function() {
	var question = 1;
	var answer = "";
	var numberCorrect = 0;
	$('#introButton').on('click', function() {
		$('#introPage').hide();
		showQuest1();
	});

		//Show functions to show the next question
	function showQuest1() {
		$('#quest1').show();
		correctAnswer = "Snow";
		console.log(correctAnswer);
	}
	function showQuest2() {
		$('#quest2').show();
		answer = "";
		question++;
		correctAnswer = "Jaime";
		console.log(correctAnswer);
	}
	function showQuest3() {
		$('#quest3').show();
		answer = "";
		question++;
		correctAnswer = "The Mad King";
		console.log(correctAnswer);
	}
	function showQuest4() {
		$('#quest4').show();
		answer = "";
		question++;
		correctAnswer = "Drogo";
		console.log(correctAnswer);
	}
	function showQuest5() {
		$('#quest5').show();
		answer = "";
		question++;
		correctAnswer = "Gregor Clegan";
		console.log(correctAnswer);
	}
	function showQuest6() {
		$('#quest6').show();
		answer = "";
		question++;
		correctAnswer = "Eddard";
		console.log(correctAnswer);
	}
	function showQuest7() {
		$('#quest7').show();
		answer = "";
		question++;
		correctAnswer = "Bear";
		console.log(correctAnswer);
	}
	function showQuest8() {
		$('#quest8').show();
		answer = "";
		question++;
		correctAnswer = "Grey Worm";
		console.log(correctAnswer);
	}
	function showQuest9() {
		$('#quest9').show();
		answer = "";
		question++;
		correctAnswer = "Stannis Baratheon";
		console.log(correctAnswer);
	}
	function showQuest10() {
		$('#quest10').show();
		answer = "";
		question++;
		correctAnswer = "The Queen of Thorns";
		console.log(correctAnswer);
	}

	function showScore() {
		$('#score').show();
		if (numberCorrect >= 10) {
			$('#statement').text('You were born to be a King');
			$('#finalScore').text("You got " + numberCorrect +"/10!");
		} 
		else if (numberCorrect >= 8) {
			$('#statement').text('You are a Game of Thrones Wiz');
			$('#finalScore').text("You got " + numberCorrect +"/10");
		}
		else if (numberCorrect >=6) {
			$('#statement').text('Better Luck Next Time!');
			$('#finalScore').text("You got " + numberCorrect +"/10");
		}
		else {
			$('#statement').text('You know nothing Jon Snow');
			$('#finalScore').text("You got " + numberCorrect +"/10");
		}
	}

	//Submit function to hide current question and call function to show next question
	$('#s1').on('click',function() {
		if (answer.length > 0) {
			$('#quest1').hide();
			checkAnswer();
			showQuest2();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s2').on('click',function() {
		if (answer.length > 0) {
			$('#quest2').hide();
			checkAnswer();
			showQuest3();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s3').on('click',function() {
		if (answer.length > 0) {
			$('#quest3').hide();
			checkAnswer();
			showQuest4();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s4').on('click',function() {
		if (answer.length > 0) {
			$('#quest4').hide();
			checkAnswer();
			showQuest5();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s5').on('click',function() {
		if (answer.length > 0) {
			$('#quest5').hide();
			checkAnswer();
			showQuest6();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s6').on('click',function() {
		if (answer.length > 0) {
			$('#quest6').hide();
			checkAnswer();
			showQuest7();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s7').on('click',function() {
		if (answer.length > 0) {
			$('#quest7').hide();
			checkAnswer();
			showQuest8();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s8').on('click',function() {
		if (answer.length > 0) {
			$('#quest8').hide();
			checkAnswer();
			showQuest9();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s9').on('click',function() {
		if (answer.length > 0) {
			$('#quest9').hide();
			checkAnswer();
			showQuest10();
		} else {
		alert('Please select an answer.')
		}	
	});
	$('#s10').on('click',function() {
		if (answer.length > 0) {
			$('#quest10').hide();
			checkAnswer();
			showScore();
		} else {
		alert('Please select an answer.')
		}	
	});

	//Selecting the answers
	$('.answer').on('click', function() {
		$('.answer').removeClass('selectedAnswer');
		$(this).addClass('selectedAnswer');
		answer = $(this).text();
		console.log(answer);
	});

	//Check if answer is correct
	function checkAnswer() {
		if (question == 1 && answer == correctAnswer) {
			numberCorrect++
			console.log(numberCorrect);
		}
		else if (question == 2 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 3 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 4 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 5 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 6 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 7 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 8 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 9 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else if (question == 10 && answer == correctAnswer) {
			numberCorrect++;
			console.log(numberCorrect);
		}
		else {
			console.log(numberCorrect);
		}
	}

	//Try Agian
	$('#playAgain').on('click',function() {
		$('#score').hide();
		$('#introPage').show();
		correctAnswer = "";
		question = 1;
		numberCorrect = 0;
	});	
});