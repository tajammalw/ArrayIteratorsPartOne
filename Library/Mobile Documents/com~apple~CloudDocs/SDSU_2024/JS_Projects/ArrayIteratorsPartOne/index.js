//Step 1: Creating an array with initial movies.
//movieCollection = ["Incdption", "Intersteller", "The Matrix", "The Dark Knight"];
//////console.log(movieCollection);

// Step 2: Using .forEach() to display each movie
//movieCollection.forEach((movie) => {
    
//    console.log(movie);
//});
//movieCollection;

// Step 3: Using .map() to create a new array with uppercase movie titles
//let upperCase = movieCollection.map((movie) => {
//    return movie.toUpperCase();
//});
//console.log(upperCase);

// Step 4: Using .some() to check for a specific movie
//const myFavoriteMovie = movieCollection.some((movie) => {
//    return movie === "The Matrix";

//})
//console.log(myFavoriteMovie);

// Step 5: Using .map() to create an array of movie title lengths, then using .some() to check for lengths greater than 15
//const movieCollection = ["Inception", "Interstellar", "The Matrix", "The Dark Knight"];

//const titleLengths = movieCollection.map((movie) => movie.length);

//const hasLongTitle = titleLengths.some((length) => length > 15);

//console.log(hasLongTitle); // Output: false

// Step 6: Debugging common errors
const movieCollection = ["Inception", "Interstellar", "The Matrix", "The Dark Knight"];

// Debugging: Log the original array
console.log("Movie Collection:", movieCollection);

// Transform using map() to create a new array of uppercase movie titles
const upperCaseMovies = movieCollection.map((movie) => movie.toUpperCase());

// Debugging: Log each uppercase movie
upperCaseMovies.forEach((movie) => console.log("Uppercase Movie:", movie));
