import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import instance from "../axios";
import movieTrailer from "movie-trailer";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url_image = `https://image.tmdb.org/t/p/w300`;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  // console.table("movies: ", movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // console.log(movie);
      console.log("movie original_title: ", movie?.original_title);
      movieTrailer(movie?.original_title || "")
        .then((url) => {
          console.log("url: ", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParams: ", urlParams);
          console.log("videoId: ", urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      {/* container -> poster  */}
      <div className="row__posters">
        {movies.map((movie) => {
          if (movie.poster_path !== null && movie.backdrop_path !== null) {
            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && `row__posterLarge`}`}
                src={`${base_url_image}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.original_title}
              />
            );
          }
        })}
      </div>
      {trailerUrl && (
        <YouTube
          className="transition__youtube"
          videoId={trailerUrl}
          opts={opts}
          // onReady={this._onReady}
        />
      )}
    </div>
  );
}

export default Row;

// useEffect(() => {
//Runs on the first render
//And any time any dependency value changes
// }, [prop, state]);
