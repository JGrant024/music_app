"use strict";

let displayDiv; // Define displayDiv globally
let artistId = "52835";
let songsForPlaylist = [];
let favoritesForm;
let favoritesList;

document.addEventListener("DOMContentLoaded", function () {
  favoritesForm = document.querySelector("#favorites");
  favoritesList = document.getElementById("favoritesList");
  const greeting = document.createElement("h2");
  const root = document.querySelector("#root");

  greeting.textContent = "Favorites Playlist";
  root.append(greeting);

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
    const artistHeader = document.createElement("h2");
    artistHeader.textContent = artistsName;
    root.appendChild(artistHeader);
  }

  function getReleases(url) {
    return get(url + "?token=AzlzFTgEejqmwqBzejbfmWRakRtyWnABXAMJvvio").then(
      function (data) {
        // This will destructure the relaseses
        const { releases } = data;

        const dynamicForm = document.getElementById("dynamicForm");

        releases.forEach(function (release) {
          // Create input elements dynamically
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.name = "selectedReleases";
          checkbox.value = release.title;

          const label = document.createElement("label");
          label.textContent = release.title;

          // Append the checkbox and label to the form
          dynamicForm.appendChild(checkbox);
          dynamicForm.appendChild(label);

          dynamicForm.appendChild(document.createElement("br")); // Add line break for better spacing
        });

        // create a UL
        const list = document.createElement("ul");
        // now appened the list to the #root
        root.appendChild(list);

        // loop through the releases array
        releases.map(function (release) {
          // create a list item
          const listItem = document.createElement("li");
          // create a button
          const addFavoritePlaylistBtn = document.createElement("button");
          addFavoritePlaylistBtn.type = "button";
          addFavoritePlaylistBtn.textContent = "Add to Favorites";

          // add the release title to the list item
          listItem.appendChild(addFavoritePlaylistBtn);
          // append the list item to the list
          list.appendChild(listItem);

          // add event listener to the button
          addFavoritePlaylistBtn.addEventListener("click", function (e) {
            songsForPlaylist = [...songsForPlaylist, release.title];
            showPlayList(songsForPlaylist);
          });
        });
      }
    );
  }

  function showPlayList(songsForPlaylist) {
    const playListEl = document.querySelector("#playlist");

    if (!playListEl) {
      const newPlaylistEl = document.createElement("div");
      playListEl.id = "playlist";
      root.appendChild(newPlaylistEl);

      songs.map(function (songsForPlaylist) {
        const songParagraphEl = document.createElement("p");
        songParagraphEl.textContent = songsForPlaylist;
        playListEl.appendChild(songParagraphEl);
      });
    } else {
      let song = songsForPlaylist[0];
      if (songsForPlaylist.length >= 1) {
        song = songsForPlaylist[songsForPlaylist.length - 1];
      }
      const songParagraphEl = document.createElement("p");
      songParagraphEl.textContent = song;
      playListEl.appendChild(songParagraphEl);
    }
  }

  (function () {
    get(
      `https://api.discogs.com/artists/${artistId}?token=AzlzFTgEejqmwqBzejbfmWRakRtyWnABXAMJvvio`
    ).then(function (data) {
      // Destructure our data
      const { name, releases_url } = data;
      // Call it back
      showArtist(name);
      getReleases(releases_url);
    });
  })();
});

favoritesForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchInput = this.querySelector('input[type="text"]');
  const playlistName = searchInput.value.trim(); // Trim the value to remove whitespaces
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

function getReleases(url) {
  return get(url).then(function (data) {
    const { releases } = data;
    releases.forEach(function (release) {
      const { title } = release;
      showArtist(title);
    });
  });
}
