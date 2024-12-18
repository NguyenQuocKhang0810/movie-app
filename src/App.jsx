import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieContext";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRated, setMovieRated] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const handleSearch = async (searchValue) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);

      setSearchData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };
        const url1 =
          "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
        const url2 =
          "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";

        const [res1, res2] = await Promise.all([
          fetch(url1, options),
          fetch(url2, options),
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();

        setMovie(data1.results);
        setMovieRated(data2.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieProvider>
      <div className="bg-black pb-10">
        <Header onSearch={handleSearch} />
        <Banner />
        {searchData.length > 0 ? (
          <MovieSearch title="Ket qua tim kiem" data={searchData} />
        ) : (
          <>
            <MovieList title="Phim Hot" data={movie} />
            <MovieList title="Phim De Cu" data={movieRated} />
          </>
        )}
      </div>
    </MovieProvider>
  );
}

export default App;
