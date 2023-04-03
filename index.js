// http://www.omdbapi.com/?i=tt3896198&apikey=1fd6092d
const movieElement = document.querySelector(".movies");


const input = document.getElementById("search__bar");
input.addEventListener("change", searchMovie);


async function searchMovie(title) {
  const moviesName = title.target.value;
  const url = await fetch (`https://www.omdbapi.com/?apikey=1fd6092d&s=${moviesName}`);
  const result = await url.json();
  movieElement.innerHTML = result.Search.map((result) => movieHTML(result)).join("");
}

// async function getMovieData(movies) {
//   const promise = await fetch(
//     `http://www.omdbapi.com/?i=tt3896198&apikey=1fd6092d`
//   );
//   const result = await promise.json();
//   movieElement.innerHTML = movieHTML(result);
// }

// getMovieData();


function movieHTML(result) {
  return `<div class="movie">
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

