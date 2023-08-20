
const movies = [
  { title: 'The Dark Knight', year: 2008, genres: ['Action', 'Crime'] },
  { title: 'An Inception', year: 2010, genres: ['Sci-Fi', 'Action'] },
  { title: 'A Shawshank Redemption', year: 1994, genres: ['Drama'] }
];

let moviesByYear = (movies) => {
 return movies.sort((a, b) => b.year  - a.year );
}

let moviesByTitle = (movies) => {
  const regx = /\b(?:A|An|The)\b/gi;
  let result= movies.map((movie) => ({
    ...movie,
    title: movie.title.replace(regx, '').trim()
  }));

  return result.sort((a, b) => a.title.localeCompare(b.title));

}


const filteredMoviesByYear = moviesByYear(movies);

console.log(filteredMoviesByYear);

console.log('********************************************');

const filteredMoviesByTitle = moviesByTitle(movies);

console.log(filteredMoviesByTitle);

//Test-------------------------------------------------------

describe('moviesByYear', () => {
  it('should sort movies by year in descending order', () => {
    const sortedMovies = moviesByYear(movies);
    const expected = [
      { title: 'An Inception', year: 2010, genres: [ 'Sci-Fi', 'Action' ] },
      {
        title: 'The Dark Knight',
        year: 2008,
        genres: [ 'Action', 'Crime' ]
      },
      { title: 'A Shawshank Redemption', year: 1994, genres: [ 'Drama' ] }
    ];
    expect(sortedMovies).toEqual(expected);
  });
});

describe('moviesByTitle', () => {
  it('should remove articles from titles and sort alphabetically', () => {
    const sortedMovies = moviesByTitle(movies);
    const expected = [
      { title: 'Dark Knight', year: 2008, genres: [ 'Action', 'Crime' ] },
      { title: 'Inception', year: 2010, genres: [ 'Sci-Fi', 'Action' ] },
      { title: 'Shawshank Redemption', year: 1994, genres: [ 'Drama' ] }
    ];
    expect(sortedMovies).toEqual(expected);
  });
});
