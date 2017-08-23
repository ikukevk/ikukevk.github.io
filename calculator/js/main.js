
var number1;
var number2;
var clearScreen = false;
var operatorClicked;
var output;
//for decimals
// var multipleClicks = false;
//check for negative/positive toggle
var negative = false;
//check if number is too long
var totalLengthScreen = false;
var memoryButton;
var outputDisplayed = false;
var switchEqualsFunction = false;
var numberCounter = null;
var newEquation = false;



//Setting the intial screen to 0

Number($("#screen").html("0"));
clearScreen = true;
test = true;
decimal = false;


function fixedLength(x) {
	var stringValue = x.toString();
	if (output > 999999999999) {
		$("#screen").html(9999999999999);
	} else if (stringValue.indexOf(".",-1) == 1)  
		{
		$("#screen").html(x.toFixed(11));
	} else if (stringValue.indexOf(".",-1) == 2)  
		{
		$("#screen").html(x.toFixed(10));
	} else if (stringValue.indexOf(".",-1) == 3)  
		{
		$("#screen").html(x.toFixed(9));
	} else if (stringValue.indexOf(".",-1) == 4)  
		{
		$("#screen").html(x.toFixed(8));
	} else if (stringValue.indexOf(".",-1) == 5)  
		{
		$("#screen").html(x.toFixed(7));
	} else if (stringValue.indexOf(".",-1) == 6)  
		{
		$("#screen").html(x.toFixed(6));
	} else if (stringValue.indexOf(".",-1) == 7)  
		{
		$("#screen").html(x.toFixed(5));
	} else if (stringValue.indexOf(".",-1) == 8)  
		{
		$("#screen").html(x.toFixed(4));
	} else if (stringValue.indexOf(".",-1) == 9)  
		{
		$("#screen").html(x.toFixed(3));
	} else if (stringValue.indexOf(".",-1) == 10)  
		{
		$("#screen").html(x.toFixed(2));
	} else if (stringValue.indexOf(".",-1) == 11)  
		{
		$("#screen").html(x.toFixed(1));
	} else {
		$("#screen").html(output);
	}

	// if ($("#screen").html(stringValue.length) <= 12) {
	// 	$("#screen").html(x);
	// } else {
	// 	$("#screen").html(x.toFixed(2));
	// }
	// $("#screen").html(output);
}

function reset(){

	console.log("reset called");

	$("#screen").html("");

	output = null;
	number1 = null;
	number2 = null;
	lastOperand = 0;
	clearScreen = false;
	test = true;
	decimal = false;
	clearScreen = true;
	Number($("#screen").html("0"));
	// multipleClicks = 0;
}




function compute() {

	// if number 1 is equal to output have it be able to display it as a negative 
	// 	if the negative button is on/off
		
	// 	only for the three equations
	// 	outputDisplayed == true and both number1 and number2 is not null
	// 	switchEqualsFunction is true
	// 	switchEqualsFunction is false


	switch(operatorClicked){
		case "+":
			output = Number(addition(number1,number2));

			break;
		case "-": 
			output = Number(subtraction(number1,number2));

			break;
		case "*":
			output = Number(multiplication(number1,number2));

			break;
		case "/" :
			output = Number(division(number1,number2));

			break;
		default:
			console.log("invalid operator: " + operatorClicked);

			break;			
	}
}


$(".clear").on("click",function() {
	reset();
	});



$(".memory").on("click",function() {
	switch ($(this).val()) {
	case "MR":
		($("#screen").html(memoryButton));
		clearScreen = true;
		break;
	case "MC":
		memoryButton = 0;
		$(".memoryValue").html("");
		break;
	case "M+":
		if (memoryButton == null) {
			memoryButton = Number($("#screen").html());
			clearScreen = true;
		} else {	
		memoryButton +=(Number($("#screen").html())); 	
		}
		break;
	case "M-":
		if (memoryButton == null) {
			memoryButton = Number($("#screen").html());
			clearScreen = true;
		} else {	
		memoryButton -=(Number($("#screen").html())); 	
		}
		break;
		default: 
			console.log("invalid");
		break;
	}
	console.log(memoryButton);

	$(".memoryValue").html("Memory: " + memoryButton);
});





// function {
// 	if(output.indexOf("-",-1) < 0) {
		
// 		output = (output * -1);
// 	} else {
// 		output = (output * 1);
// 	}
// 	return output;
// }

// $(".negative").on("click",function() {
// 	var screenValue = Number($("#screen").html());
// 	if (negative == false) {	
// 		$("#screen").html((-Math.abs(screenValue)));
// 		negative = true;
// 	} else {
// 		$("#screen").html((Math.abs(screenValue)));
// 		negative = false;
// 		}
// 	});


// $(".negative").on("click",function() {
// 	if (($("#screen").html().indexOf("0"), - 1) < 0 && $("#screen").html().length == 1) {
// 		$("#screen").html("");
// 	}

// 	var screenValue = Number($("#screen").html());

// 	if($("#screen").html().indexOf("-",-1) < 0) {
// 		$("#screen").html((-Math.abs(screenValue)));
// 	} else {
// 		$("#screen").html((Math.abs(screenValue)));
// 	}
// });



	// var screenValue = Number($("#screen").html());
	// if (negative == false) {	
	// 	$("#screen").html((-Math.abs(screenValue)));
	// 	negative = true;
	// } else {
	// 	$("#screen").html((Math.abs(screenValue)));
	// 	negative = false;
	// 	}
	// });





// $(".decimal").on("click",function() {
// 		if (multipleClicks == false) {
// 			$("#screen").append($(this).val());
// 			multipleClicks = true;
// 		} else {
// 			// clearScreen = true;
// 			console.log("cannot add anymore decimal points");
// 		}
// 	});

// $(".decimal").on("click",function() {
// 		if ($("#screen").html().indexOf(".",-1) < 0) {
// 				$("#screen").append($(this).val());
// 				decimalReset = true;
// 		} else {
// 				console.log("cannot add anymore decimal points");
// 		}
// });


$("#zero").on("click",function() {
		if ($("#screen").html().length > 0) {
			if( clearScreen == false) {
				if($("#screen").html().length <= 12)
			$("#screen").append($(this).val());
			}	else {
				console.log("do nothing");
			}	
		}


	});


// var digitClicked = function(e) {
// 	if (newEquation == true) {
// 		number1 = null;
// 		number2 = null;
// 		output = null;
// 		newEquation = false;
// 	} else {
// 		console.log("keep running");
// 	}

// 	if (clearScreen == true)  {
// 		// $("#screen").html("0");

// 		$("#screen").html("");	
// 		$("#screen").append($(this).val());
// 		clearScreen = false;
// 		outputDisplayed = false;
// 		switchEqualsFunction = true;


// 	} else {
// 		if ($("#screen").html().length <= 12) {		
// 			$("#screen").append($(this).val());
			
// 		} else {
// 		decimalReset = false;
// 		// multipleClicks = false;
// 		console.log("cannot add more");
// 		}
// 	}
// }






// $(".digits").on("click",  digitClicked(e) {

// });



$(".digits").on("click", function(e) {
	if (newEquation == true) {
		number1 = null;
		number2 = null;
		output = null;
		newEquation = false;
	} else {
		console.log("keep running");
	}

	if (clearScreen == true)  {
		// $("#screen").html("0");

		$("#screen").html("");	
		$("#screen").append($(this).val());
		clearScreen = false;
		outputDisplayed = false;
		switchEqualsFunction = true;
		// test = false;
	} else {
		if ($("#screen").html().length <= 12) {		
			$("#screen").append($(this).val());
			test = false;
			
		} else {
		// decimalReset = false;
		// multipleClicks = false;
		console.log("cannot add more");
		}
	}
});

var newValueKeys = false;

$("body").keydown(function(e) {


	if (e.keyCode >= 48 && e.keyCode <=57 || e.keyCode == 110 ) {
		
		if ($("#screen").html().length <= 12) {
		// $("#screen").html("")
		var num = String.fromCharCode(e.keyCode);
		$("#screen").append(Number(num));

		 	if ($("#screen").html().indexOf("0",-1) == 0) {
		 		$("#screen").html("");
		 	}
		 clearScreen = false;
	} else {
		console.log("too long");
		clearScreen = true;
		// $("#screen").html("");
	}

 	if (newValueKeys == true) {
		 $("#screen").html("");
		 newValueKeys = false;
	}

}
	// 	console.log(e.keyCode);
	// } else if (e.keyCode == 13) {
	// 	compute();
	// 	$("#screen").html(output);
	// } else if (e.keyCode >= 1012 && e.keyCode <= 111) {
	// 	operatorClicked = $(this).String.fromCharCode(e.keyCode);
	// } else {
	// 	console.log("invalid");
	// }
});



	var decimal = false;
	var test = false;

$(".decimal").on("click",function() {
		// && test == false
		if ($("#screen").html().indexOf(".",-1) < 0 && decimal == false && clearScreen == false) {
				$("#screen").append($(this).val());
				// if (test == true) {
				decimal = true;
				// test = true;
				console.log("test1");
			// }
				console.log(" condition1: decimal = " + decimal);
			} else if (clearScreen == true && test == true && decimal == false) {
				$("#screen").html("");
				// clearScreen = true;
				$("#screen").append("0" + $(this).val());
				clearScreen = false;
				test = false;
				decimal = true;
				outputDisplayed = false;
				console.log(" condition2: decimal = " + decimal);
				console.log("test2");
			} else if (clearScreen == true && $("#screen").html().indexOf("0",-1) == 0) {
				$("#screen").append($(this).val());
				decimal = true;
				clearScreen = false;
				test = false;
			}
			else {
				console.log("cannot add anymore decimal points");
				console.log("test3");
		}
	});


// need to toogle the decimal back to false somehow


$(".operator").on("click",function() {
	// multipleClicks = false;
	newEquation = false;
	test = true;
	decimal = false;
	newValueKeys = true;

		//this stores the first variable when there are no variables stored
	if (number1 == null && number2 == null) {
		number1 = $("#screen").html();
		number2 = null;

		operatorClicked = $(this).val();
		
		clearScreen = true;
		console.log("1: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
	
	} 	else if (number1 != null && number2 == null){	
		//this stores the second variable so only happens on the first sequence to compute the values using only the operator buttons
		number2 = $("#screen").html();
		// operatorClicked = $(this).val();
		compute();
		
		$("#screen").html("");
		fixedLength(output);
		// $("#screen").html(output);
		
		clearScreen = true;
		outputDisplayed = true;
		console.log("2: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
		
	}	else if (number1 != null && number2 != null) {
			//store the operator only when user decides to change their minds on operator
				if (outputDisplayed == true) {
					operatorClicked = $(this).val();
					console.log("SWITCH");
					console.log("5: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
					clearScreen = true;
			//this is after the user is able clicks on the operator button to let the user equate like the equals button
				} else {
					operatorClicked = $(this).val();
					
					number1 = output;

					console.log(number1);

					number2 = $("#screen").html();
					compute();
					
					console.log("3: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
					$("#screen").html("");
					fixedLength(output);
					// $("#screen").html(output);
					
					clearScreen = true;	
					outputDisplayed = true;	
				}
	} 	else {
		console.log("4: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
	}
	
});


	// if(screen2.indexOf("-",-1) < 0 ) {
	// 	negative = true;
// 	if(negative == true) {
// 		// output = (output * -1);
// 		$("#screen").html(output);
// 	output = -Math.abs(output);
// 	} else {
// 		// output = (output * 1);
// 	output = Math.abs(output);
// 	}
// 	return output;
// }


$(".negative").on("click",function() {

	// $("#screen").html() * -1;

	$("#screen").html(Number(($("#screen").html()) * -1));
	output = output * -1;
});


// $(".negative").on("click",function() {
// 	// var screenValue = Number($("#screen").html());
// 	 	if (negative == false) {
// 	// if ($("#screen").html().indexOf("-",-1) < 0  && negative == false) {	
// 		// $("#screen").html((-Math.abs(screenValue)));
// 		$("#screen").html(Number(($("#screen").html()) * -1));
// 		console.log("state1");
// 		// Number($("#screen").prepend("-"));
// 		negative = true;
// 	} else {
// 		// (Number($("#screen").html()) * -1);
// 		// $("#screen").html("test2");
// 		// $("#screen").html((Math.abs(screenValue)));
// 		negative = false;
// 		console.log("state2");
// 		}
// });

// function {
// 	// var screenValue = Number($("#screen").html());
// 	if (negative == true) {	
// 	 // $("#screen").html((-Math.abs(screenValue)));
// 	output = $("#screen").html(Number(($("#screen").html()) * -1));

// 	} else {
// 	console.log("leave it as is");
// 	} 
// }



// $(".negative").on("click",function() {
// 	negative = true;
// 	$("#screen").html(Number(($("#screen").html()) * -1));

// 	if($("#screen").html().indexOf("0", -1) == 0) {
// 		clearScreen = true;
// 	}
// });



$("#equals").on("click", function() {
	// decimalReset = true;
	// decimal = false;
	// multipleClicks = false;
	// if the negative has been toggled
	// 	if negative is toggled on 

	// When can you change the output value
	// 1+1 = output (can toggle negative)
	// 1+2+1+ output (can toggle negative)
	// 1+2 = = output can be toggled
	// + = output can be toggled
	
	test = true;
	decimal = false;
		// if the user types in new number or press equals again
		// clearScreen = true;
	if (number2 != null) {
		//this allows the user to press the equal button multiple times (allowing to compute by the multiplier)
		if (switchEqualsFunction == false) { 
			
			number1 = output;

			compute();
			
			$("#screen").html("");
			fixedLength(output);
			// $("#screen").html(output);

			outputDisplayed = true;
			clearScreen = true;
			console.log("This is the first " + number1,number2,output,switchEqualsFunction);
		} else {
			//this allows the user to click on an operator -> then a number -> then compute
		
			number1 = output;

			number2 = $("#screen").html();
			compute();
			
			$("#screen").html("");
			fixedLength(output);
			// $("#screen").html(output);

			outputDisplayed = true;
			clearScreen = true;
			switchEqualsFunction = false;
			newEquation = true;
			console.log("This is the second " + number1,number2,output,switchEqualsFunction);
		}
	} else {
		//this happens when the second variable is not stored..so when the equation is new
			if(newEquation == false && number1 !=null) {
				number2 = $("#screen").html();
				compute();
				
				$("#screen").html("");
				fixedLength(output);
				// $("#screen").html(output);

				outputDisplayed = true;
				clearScreen = true;
				switchEqualsFunction = false;
				newEquation = true;
			console.log("This is the third " + number1,number2,output);	
		} else {
			console.log("this is the sixth "  + number1,number2,output);
		}
	}
	if (number1 == null && number2 == null && newEquation == false) {
		$("#screen").html();
		console.log($("#screen").html());
	}	else {
		(console.log("check"));
	}

	

});


	console.log(number2);
	
	function addition (a,b) {
	 return (Number(a) + Number(b));		
	}
	function subtraction (a,b) {
	 return (Number(a) - Number(b));		
	}
	function multiplication (a,b) {
 	 return (Number(a) * (b));		
	}
	function division (a,b) {
	 return (Number(a)/(b));		
	}



// if (operatorClicked == "+") {
// 	output = addition(number1,number2);		
// } else if (operatorClicked == "-") {
// 	output = subtraction(number1,number2);
// } else if (operatorClicked =="*") {
// 	output = multiplication(number1,number2);
// } else if (operatorClicked =="/") {
// 	output = division(number1,number2);
// } else {
// 	console.log("test");
// 	}

//use two functions to get two values

// on operator button 
// 	if decimal button pressed twice 
//		throw an error preventing the button showing up twice 
//	else
//		display the decimal

//on clear button 
//	if C button is clicked 
//		clear the content on the display
//	update display

//on display 
//	if display is over 13 characters long 
//		capture value or change first replace first digit with the second value
//	update display

//on equals button {
//	if button is pressed 
//		show results of operation
//	else 
//		use other operators or new digits to continue the sequence
//}


//on digit button
//	if display can be cleared
//		display value = button value
//	else
//		display value += button value

//	update display


//on plus button
//	if operation in queue
//		execute operation

//	store current value in variable
//	add value and operation to queue
//	allow display to be cleared

//on minus button
//	if operation in queue
//		execute operation

//	store current value in variable
//	subtract value and operation to queue
//	allow display to be cleared

//on divide button
//	if operation in queue
//		execute operation

//	store current value in variable
//	divide value and operation to queue
//	allow display to be cleared

//on multiply button
//	if operation in queue
//		execute operation
	
// 	store current value in variable
// 	multiply value and operation to queue
// 	allow display to be cleared

// if number1 is not null and number2 is null {
// 	store the operatorClicked value 
// 	// store number2
// 	// compute 
// 	// display output
// 	number2 = $("#screen").html();
// 	compute();
// 	$("#screen").html("");
// 	$("#screen").html(output);
// 	clearScreen = true;
// // }	else if number1 and number2 are not null stored {
// // 	store the operatorClicked value
// // 	clearScreen = true
// // 	number2 will equal the new user inputted value
// // 	number1 will equal output
// // }	
// }
// else if number1 is null {
// 	store number1 as variable
// 	number2 = null;
// 	store the operatorClicked value
// 	clearScreen = true
// }
// have to disable the operator button
//current errors
// other operators are not getting correctly stored

// Memory memoryButton
// when memory plus button is clicked
// if  memoryButton is not stored 
// 		store the variable
// 		else
// 		add the value on the screen to the stored variable




// variables:
// 	clearScreen = false
// 	number1
// 	number2
// 	operatorClicked 
// 	output


// digits on click:
// 	if screen can be cleared (if clearScreen = true) // check if screen should be cleared
// 		clear screen
// 		set value of clearScreen to false // screen should not be cleared next time
// 	append value to screen

// addition on click:
// 	set value of number1 to current screen value
// 	set value of operatorClicked to "plus"
// 	set value of clearScreen to true // defer the clearing of the screen until later

// equals on click:
// 	set value of number2 to current screen value
// 	set value of output to (number1 operatorClicked number2)
// 	clear screen // clear the screen immediately
// 	append output to screen

// 	$("#screen").append($(this).val());
// 	number = $("#screen").html();


// after the equals button 
// 	if the digits are clicked again
// 		set the clearscreen = true
// 		append the new digits and store that as a variable
// 		number2 will remain as the factorial number which will add onto number1
// 		output will equal number1 += number2