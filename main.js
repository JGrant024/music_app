"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const favoritesForm = document.querySelector("#favorites");
  const favoritesList = document.getElementById("favoritesList");

  favoritesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = this.querySelector('input[name="searchBox"]');
    const playlistName = searchInput.value;
    console.log("Playlist Name:", playlistName);

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");


    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // trim() clears any additional space or white spaces
    if (playlistName.trim() !== "") {
      addFavoritePlaylist(playlistName);
      // Call displayValues with the captured values
      displayValues(usernameValue, passwordValue, nameValue, emailValue);
      searchInput.value = "";
    }
  });

  function addFavoritePlaylist(playlistName) {
    console.log("Adding Playlist:", playlistName);
    // Create a new element to display the favorite playlist
    const playlistItem = document.createElement("li");
    playlistItem.textContent = playlistName;
    favoritesList.appendChild(playlistItem);

    console.log("Favorite Playlist:", playlistName);
  }

  function displayValues(username, password, name, email) {
    const displayDiv = document.createElement("div");
    displayDiv.innerHTML = `<p>Username: ${username}</p><p>Password: ${password}</p><p>Name: ${name}</p><p>Email: ${email}</p>`; // Include all values
    document.body.appendChild(displayDiv);
  }



  fetch("https://api.discogs.com/artists/52835", {
    method: "GET",
    headers: {
      "User-Agent": "JonathanG/2.0",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      showArtist(data);
      return data;
    });

  function showArtist(data) {
    console.log(data);
    const paragraph = document.createElement("p");
    paragraph.textContent = data.name;
    root.appendChild(paragraph);
  }
});

// function clearInput(input) {
//   input.value = "";
// }
