document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get input values
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
  
      const usernameValue = usernameInput.value;
      const passwordValue = passwordInput.value;
  
      // Display input values on the screen
      displayValues(usernameValue, passwordValue);
  
      // Move the console.log statement here
      console.log(usernameInput, passwordInput);
    });
  
    function displayValues(username, password) {
      // Create a new element to display values
      const displayDiv = document.createElement("div");
      displayDiv.innerHTML = `<p>Username: ${username}</p><p>Password: ${password}</p>`;
  
      // Append the new element to the body or any other desired location
      document.body.appendChild(displayDiv);
    }
  });
  