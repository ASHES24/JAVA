const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value.trim();

    document.getElementById("fullNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    if(fullName === "") {
        document.getElementById("fullNameError").innerText = "Full Name is required.";
        isValid = false;
    }

    if(!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    }

    if(password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    if(confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    if(!/^\d+$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must contain only digits.";
        isValid = false;
    }

    if(isValid) {
        document.getElementById("successMessage").innerText = "Registration Successful!";
        form.reset();
    }
});
