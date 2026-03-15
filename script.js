//Menu Button

const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

//Toggle the menu visibility when the menu button is clicked

toggle.addEventListener('click', function () {
	if (menu.style.display === 'none') {
		menu.style.display = 'block';
	}
	else {
		menu.style.display = 'none';
	}
});

//Show Alert

const alertButton = document.getElementById('alertButton');

//Display an alert when the alert button is clicked

alertButton.addEventListener('click', function () {
	alert('Hello! Renzo Pacatang');
});

//Increment & Decrement

const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const counterDisplay = document.getElementById('counter');

//Initialize the counter

let counter = 0;

//Increment the counter and update the display when the button is clicked

incrementButton.addEventListener('click', function () {
	counter += 1; //Increase the counter by 1
	counterDisplay.textContent = counter; //Update the Counter Display
});

//Decrement the counter and update the display when the button is clicked

decrementButton.addEventListener('click', function () {
	counter -= 1; //Decrease the counter by 1
	counterDisplay.textContent = counter; //Update the Counter Display
});

//Reset Button

const resetButton = document.getElementById('resetButton');

//Add Addeventlistener to the reset button to refresh the page

resetButton.addEventListener('click', function () {
	location.reload(); //Refresh the Page
});

//Form

const usernameInput = document.getElementById('username');
const greetingButton = document.getElementById('greetingButton');
const greetingMessage = document.getElementById('greetingMessage');

//Function to check if the input contains only letters

function isValidName(name) {
	const namePattern = /^[a-zA-Z\s]+$/; // Regular Expression to allow only letters and spaces
	return namePattern.test(name);
}

//AddEventListener to the button 

greetingButton.addEventListener('click', function() {
	//get the value of the input
	const username = usernameInput.value.trim();

	//Check if the input is not empty and invalid
	if (username === '') {
		greetingMessage.textContent = 'Please enter your Name. ';
	}
	else if (!isValidName(username)) {
		greetingMessage.textContent = 'Invalid input. Please use only letters. ';
	}
	else {
		//Set the Greeting Message
		greetingMessage.textContent = `${username}`;
	}
});

//DOM MANIPLATION

const paragraphButon = document.getElementById('paragraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

paragraphButton.addEventListener('click', function() {
	//Create a new paragraph element
	const newParagraph = document.createElement('p');
	//Set its text Content
	newParagraph.textContent = 'Congratulations on learning Practical Javascript';
	//Append the paragraph to the container
	paragraphContainer.appendChild(newParagraph);

});