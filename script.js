function validateForm() {
    let isValid = true;

    // Name Validation
    const name = document.getElementById("name").value.trim();
    const nameError = document.getElementById("nameError");
    if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = "Please enter a valid name (letters only).";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Phone Number Validation
    const phone = document.getElementById("phone").value.trim();
    const phoneError = document.getElementById("phoneError");
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Phone number must be 10 digits.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Password Validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (
        password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/\d/.test(password)
    ) {
        passwordError.textContent =
            "Password must be at least 8 characters, including uppercase, lowercase, and a number.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Department Validation
    const department = document.getElementById("department").value;
    const departmentError = document.getElementById("departmentError");
    if (department === "") {
        departmentError.textContent = "Please select a department.";
        isValid = false;
    } else {
        departmentError.textContent = "";
    }

    return isValid; // Prevent form submission if invalid
}
