// API Key (v3 auth)
const API_KEY = "a88057154b90cd2d00c6babd0f4f49c3";

// API Read Access Token (v4 auth)
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODgwNTcxNTRiOTBjZDJkMDBjNmJhYmQwZjRmNDljMyIsInN1YiI6IjYyODEwZjNjMjBlNmE1N2FhNGExN2MzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycKY6cbTBP3YNyG7x5hAkJdk0RIXO4dddobw8gW_w1w";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTVNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
