function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
        passwordError.style.display = 'block';
        return false;
    } else {
        passwordError.style.display = 'none';
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (password !== confirmPassword) {
        confirmPasswordError.style.display = 'block';
        return false;
    } else {
        confirmPasswordError.style.display = 'none';
        return true;
    }
}

function validateForm() {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        document.querySelector('form').submit();
    }
}

function togglePasswordVisibility(inputId, iconElement) {
    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconElement.classList.add('fa-eye');
        iconElement.classList.remove('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        iconElement.classList.add('fa-eye-slash');
        iconElement.classList.remove('fa-eye');
    }
}

function showForm(formType) {
    var loginForm = document.getElementById('loginForm');
    var signUpForm = document.getElementById('signUpForm');
    var loginTab = document.getElementById('loginTab');
    var signUpTab = document.getElementById('signUpTab');

    if (formType === 'login') {
        loginForm.style.display = 'flex';
        signUpForm.style.display = 'none';
        loginTab.classList.add('active');
        signUpTab.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signUpForm.style.display = 'flex';
        loginTab.classList.remove('active');
        signUpTab.classList.add('active');
    }
}
