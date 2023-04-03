// http://www.omdbapi.com/?i=tt3896198&apikey=1fd6092d
const movieElement = document.querySelector(".movie");


const input = document.getElementById("search__bar");
input.addEventListener("change", searchMovie);


async function searchMovie(title) {
  const moviesName = title.target.value;
  const url = await fetch (`https://www.omdbapi.com/?apikey=1fd6092d&s=${moviesName}`);
  const result = await url.json();

  console.log(result)

  // movieElement.innerHTML = result.map((result) => movieHTML(result)).join("");
}


// async function getMovieData(movies) {
//   const promise = await fetch(
//     `http://www.omdbapi.com/?i=tt3896198&apikey=1fd6092d`
//   );
//   const result = await promise.json();
//   movieElement.innerHTML = movieHTML(result);
// }

// getMovieData();


// function movieHTML(result) {
//   return `<div class="movie__title">
//   <div class="movie__title--container">
//       <h3>${result.Title}</h3>
//           <p>Released: ${result.Year}</p>
//           <p>Language: ${result.Language}</p>
//           <p>Metascore: ${result.Metascore}</p>
//   </div>
//   </div>
//   <div class="movie__poster--wrapper">
//         <img class="movie__poster" src="${result.Poster}" alt="">
//     </div>`;
// }

