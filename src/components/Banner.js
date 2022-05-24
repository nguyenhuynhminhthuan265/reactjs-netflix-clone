import React, { useEffect, useState } from "react";
import instance from "../axios";
import requests from "../requests";
import "./Banner.css";

function Banner() {
  const base_url_image = `https://image.tmdb.org/t/p/original`;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchTVNetflixOriginals);
      const movies = request.data.results;
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
      return request;
    };

    fetchData();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ... " : str;
  };
  console.log("Banner component: ", movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url_image}/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        // marginBottom: "10px",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div 2 button */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* descritption */}
        <div className="banner_description">
          <span>{truncate(movie?.overview, 100)}</span>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
