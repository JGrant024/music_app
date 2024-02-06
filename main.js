let displayDiv;
let artistId = "52835";
let favoritesForm;
let favoritesList;

// Function to make a fetch request
function get(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "User-Agent": "JonathanGrant  /2.0",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
}

function showArtist(artistsName) {
  const artistHeader = document.createElement("h2");
  artistHeader.textContent = artistsName;
  document.querySelector("#artistInfo").appendChild(artistHeader);
}

// Function to get releases and display them dynamically
function getReleases(url) {
  return get(url + "?token=AzlzFTgEejqmwqBzejbfmWRakRtyWnABXAMJvvio").then(
    function (data) {
      const { releases } = data;
      console.log("Artist data:", data);
      const dynamicForm = document.getElementById("dynamicForm");

      releases.forEach(function (release) {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.name = "selectedReleases";
        checkbox.value = release.title;

        const label = document.createElement("label");
        label.textContent = release.title;

        const addFavoritePlaylistBtn = document.createElement("button");
        addFavoritePlaylistBtn.type = "button";
        addFavoritePlaylistBtn.textContent = "Add to Favorites";

        listItem.appendChild(checkbox);
        listItem.appendChild(addFavoritePlaylistBtn);

        dynamicForm.appendChild(listItem);
      });
    }
  );
}
const apiForm = document.querySelector("#apiForm");
apiForm.addEventListener("submit", function (e) {
  e.preventDefault();
  get(
    `https://api.discogs.com/artists/${artistId}?token=AzlzFTgEejqmwqBzejbfmWRakRtyWnABXAMJvvio`
  ).then(function (data) {
    // Destructure our data
    const { name, releases_url } = data;
    // Call it back
    showArtist(name);
    getReleases(releases_url);
  });
});

// Function to initialize the page
// function initializePage() {
//   // Get DOM elements
//   const favoritesForm = document.querySelector("#favorites");
//   const favoritesList = document.getElementById("favoritesList");
//   const searchInput = favoritesForm.querySelector('input[type="text"]');

//   // Event listener for form submission
//   if (favoritesForm) {
//     favoritesForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const artistName = searchInput.value.trim();
//       showArtist(name);
//       getReleases(releases_url);

//       if (artistName.trim() !== "") {
//         // Fetch artist data and releases on form submission
//         get(
//           `https://api.discogs.com/artists/${artistId}/releases?token=AzlzFTgEejqmwqBzejbfmWRakRtyWnABXAMJvvio`
//         )
//           .then(function (data) {
//             const { name, releases_url } = data;
//             // Clear previous results
//             document.querySelector("#root").innerHTML = "";
//             // Display artist name
//             showArtist(name);
//             // Display releases
//             return getReleases(releases_url);
//           })
//           .catch(function (error) {
//             console.error("Error fetching artist data:", error);
//           });
//       }
//     });
//   }
// }

// Event listener for page load
// document.addEventListener("DOMContentLoaded", initializePage);
console.log("Content loaded!!");
// Function to display values in a div
function displayValues(username, password, name, email) {
  if (!displayDiv) {
    displayDiv = document.createElement("div");
    document.body.appendChild(displayDiv);
  }

  displayDiv.innerHTML = `<p>Username: ${username}</p><p>Password: ${password}</p><p>Name: ${name}</p><p>Email: ${email}</p>`;
}
(function () {
  get(
    `https://api.discogs.com/artists/${artistId}?token=AzlzFTgEejqmwqBzejbfmWRakRtyWnABXAMJvvio`
  ).then(function (data) {
    // Destructure our data
    const { name, releases_url } = data;
    // Call it back
  });
})();

// Function to get a random programming joke
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
// For programming joke
function displayProgrammingJoke(jokeSetup, jokePunchline) {
  const playlistContainer = document.querySelector(".playlist-container");

  const jokeDiv = document.createElement("div");
  jokeDiv.classList.add("programming-joke");

  const setupParagraph = document.createElement("p");
  setupParagraph.textContent = "Joke Setup: " + jokeSetup;

  const punchlineParagraph = document.createElement("p");

  if (jokePunchline) {
    punchlineParagraph.textContent = "Joke Punchline: " + jokePunchline;
  } else {
    punchlineParagraph.textContent =
      "Joke Punchline: (Punchline not available)";
  }

  jokeDiv.appendChild(setupParagraph);
  jokeDiv.appendChild(punchlineParagraph);
  playlistContainer.appendChild(jokeDiv);
}

function getProgrammingJoke() {
  const apiUrl =
    "https://official-joke-api.appspot.com/jokes/programming/random";

  get(apiUrl)
    .then(function (data) {
      console.log("Programming Joke:", data);

      if (data && data.length > 0) {
        const joke = data[0];
        const jokeSetup = joke.setup;
        const jokePunchline = joke.punchline;

        displayProgrammingJoke(jokeSetup, jokePunchline);
      } else {
        console.log("No response");
      }
    })
    .catch(function (error) {
      console.error("Error fetching programming joke:", error);
    });
}

getProgrammingJoke();
