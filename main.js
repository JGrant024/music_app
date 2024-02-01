"use strict";

let displayDiv; // Define displayDiv globally

document.addEventListener("DOMContentLoaded", function () {
  const favoritesForm = document.querySelector(".favorites");
  const favoritesList = document.getElementById("favoritesList");

  favoritesForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = this.querySelector('input[type="text"]');
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

    if (playlistName.trim() !== "") {
      addFavoritePlaylist(playlistName);
      displayValues(usernameValue, passwordValue, nameValue, emailValue);
      searchInput.value = "";
    }
  });

  function addFavoritePlaylist(playlistName) {
    console.log("Adding Playlist:", playlistName);
    const playlistItem = document.createElement("li");
    playlistItem.textContent = playlistName;
    favoritesList.appendChild(playlistItem);
    console.log("Favorite Playlist:", playlistName);
  }

  function displayValues(username, password, name, email) {
    if (!displayDiv) {
      // Initialize displayDiv if it's not defined
      displayDiv = document.createElement("div");
      document.body.appendChild(displayDiv);
    }

    displayDiv.innerHTML = `<p>Username: ${username}</p><p>Password: ${password}</p><p>Name: ${name}</p><p>Email: ${email}</p>`;
  }

  function get(url) {
    return fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "JonathanGrant  /2.0",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        return data;
      });
  }

  function showArtist(artistsName) {
    // Initialize displayDiv if it's not defined
    if (!displayDiv) {
      displayDiv = document.createElement("div");
      document.body.appendChild(displayDiv);
    }

    const paragraph = document.createElement("p");
    paragraph.textContent = artistsName;
    displayDiv.appendChild(paragraph);
  }

  function getReleases(url) {
    return get(url).then(function (data) {
      const { releases } = data;
      releases.forEach(function (release) {
        const { title } = release;
        showArtist(title);
      });
    });
  }
});
