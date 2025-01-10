// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and its input fields
    const registrationForm = document.querySelector('#registrationForm');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirmPassword');

    // Add a submit event listener to the form
    registrationForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validate form fields
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            confirmPasswordInput.focus();
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            passwordInput.focus();
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        // Submit the form if validation passes
        alert('Registration successful!');
        registrationForm.submit();
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});