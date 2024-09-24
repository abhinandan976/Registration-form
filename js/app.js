// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation
    let isValid = validateForm(); // Validate form fields
  
    // If valid, reset the form
    if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById("registrationForm").reset();
    }
  });
  
  // Validation function
  function validateForm() {
    let isValid = true;
  
    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    // Full Name: 3-20 characters, only letters
    if (fullName.length < 3 || fullName.length > 20 || !/^[A-Za-z]+$/.test(fullName)) {
      showError("nameError", "Full Name must be between 3-20 characters and contain only letters.");
      isValid = false;
    } else {
      hideError("nameError");
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("emailError", "Enter a valid email (example: user@domain.com).");
      isValid = false;
    } else {
      hideError("emailError");
    }
  
    // Phone: 8-15 digits, may include country code
    const phoneRegex = /^[\d\+\-]{8,15}$/;
    if (!phoneRegex.test(phone)) {
      showError("phoneError", "Phone number must be between 8-15 digits and may include country code.");
      isValid = false;
    } else {
      hideError("phoneError");
    }
  
    // Password: 10-16 characters, at least one uppercase, one lowercase, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,16}$/;
    if (!passwordRegex.test(password)) {
      showError("passwordError", "Password must be 10-16 characters, with uppercase, lowercase, number, and symbol.");
      isValid = false;
    } else {
      hideError("passwordError");
    }
  
    // Confirm Password validation
    if (password !== confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match.");
      isValid = false;
    } else {
      hideError("confirmPasswordError");
    }
  
    return isValid;
  }
  
  // Show error function
  function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "block";
    errorElement.textContent = message;
  }
  
  // Hide error function
  function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "none";
  }
  