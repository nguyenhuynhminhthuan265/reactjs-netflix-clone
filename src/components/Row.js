import React, { useEffect, useState } from "react";
import instance from "../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const base_url_image = `https://image.tmdb.org/t/p/w300`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.table("movies: ", movies);

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
                className={`row__poster ${isLargeRow && `row__posterLarge`}`}
                src={`${base_url_image}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Row;

// useEffect(() => {
//Runs on the first render
//And any time any dependency value changes
// }, [prop, state]);
