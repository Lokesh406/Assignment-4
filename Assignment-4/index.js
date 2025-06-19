function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}

function validatePassword(password) {
  return password.length >= 6;
}

function handleLogin() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!validatePhone(phone)) {
    message.textContent = "Please enter a valid 10-digit phone number.";
    message.style.color = "red";
    return;
  }

  if (!validatePassword(password)) {
    message.textContent = "Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
  }

  // Successful login
  message.textContent = "Login successful!";
  message.style.color = "green";
}
