// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and its input fields
    const loginForm = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    // Add a submit event listener to the form
    loginForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input values
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate email and password
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            passwordInput.focus();
            return;
        }

        // Submit the form if validation passes
        alert('Login successful!');
        loginForm.submit();
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});