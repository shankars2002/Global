document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting
    
    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(message => message.remove());
    
    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        showError('name', 'Please enter your name.');
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === '') {
        isValid = false;
        showError('email', 'Please enter your email.');
    } else if (!emailPattern.test(email)) {
        isValid = false;
        showError('email', 'Please enter a valid email address.');
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message === '') {
        isValid = false;
        showError('message', 'Please enter your message.');
    }

    // If valid, submit the form (for demo purposes, just log to the console)
    if (isValid) {
        console.log('Form submitted successfully!');
    }
});

// Function to show error messages
function showError(field, message) {
    const fieldElement = document.getElementById(field);
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    
    fieldElement.parentElement.appendChild(errorMessage);
}
