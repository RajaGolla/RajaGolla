function validateForm() {
    var fullname = document.getElementById('fullname').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirm_password = document.getElementById('confirm_password').value.trim();

    var fullnameError = document.getElementById('fullnameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    // Reset previous error messages
    fullnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Validation logic
    var isValid = true;

    if (fullname === "") {
        fullnameError.textContent = "Please enter your full name";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent = "Please enter a password";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false;
    }

    if (confirm_password === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        isValid = false;
    } else if (confirm_password !== password) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}