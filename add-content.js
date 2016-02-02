/* This script displays a greeting to the user based on the current time. */

var today = new Date(); // Creates a new date object
var hourNow = today.getHours(); // Finds the current hour
var greeting;

// Displays the appropriate greeting based on the current time

if (hourNow > 18) {
	greeting = "Good evening!";
} else if (hourNow > 12) {
	greeting = "Good afternoon!";
} else if (hourNow > 0) {
	greeting = "Good morning!";
} else {
	greeting = "Welcome!";
}

document.write('<h3>' + greeting + '</h3>');