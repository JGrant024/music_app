function captureSignup() {
  // Get the values entered by the user
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Display the values
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Username:", username);
  console.log("Password:", password);
}
