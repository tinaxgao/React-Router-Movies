import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav> */}

      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      <Switch>
        <Route path={"/"}>
          <MovieList movies={movieList} />
          {/* why movies instead of movie? */}
        </Route>

        <Route path={"/movies/:id"}>
          <Movie />
        </Route>
      </Switch>
    </div>
  );
}
