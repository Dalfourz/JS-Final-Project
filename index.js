// http://www.omdbapi.com/?i=tt3896198&apikey=1fd6092d

function setupSearchListener(searchBarId, callback) { // Callback function from the search bar
  const searchBar = document.getElementById(searchBarId);
  searchBar.addEventListener('search', function() {
    const searchTerm = searchBar.value;
    callback(searchTerm); // Call the callback function with the searchTerm
  });
}

setupSearchListener('search__bar', handleSearchTerm);

// Use the search term to fetch the data

async function handleSearchTerm(searchTerm) { 
  // Fetch the data from the API
  const url = await fetch(`https://www.omdbapi.com/?apikey=1fd6092d&s=${searchTerm}`);
  const result = await url.json();
  const movieElement = document.querySelector(".movies");
  movieElement.innerHTML = result.Search.slice(0, 6).map((result) => movieHTML(result)).join("");
}

// Search on click function
const searchButton = document.querySelector('.search__button');
searchButton.addEventListener('click', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const searchTerm = document.querySelector('#search__bar').value;
  // Run the search
  handleSearchTerm(searchTerm)
}

// Fetch the movie imdb data to use on click
function showMovieImdb(imdb) {
  localStorage.setItem('movieImdb', imdb);
  window.location.href = `${window.location.origin}/movie.html`
  console.log(imdb);
}

function movieHTML(result) {  // Create the HTML for the movie
  return `<div class="movie" onClick="showMovieImdb('${result.imdbID}')">
            <div class="movie__title">
              <div class="movie__title--wrapper">
                <h3>${result.Title}</h3>
                    <p>Released: ${result.Year}</p>
                    <p>Type: ${result.Type}</p>
                    <p>IMDB: ${result.imdbID}</p>
              </div>
            </div>
              <div class="movie__poster--wrapper">
                <img class="movie__poster" src="${result.Poster}" alt="">
              </div>
            </div>
            `;
}