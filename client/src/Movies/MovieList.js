import React from 'react';
import {Link, NavLink, useRouteMatch, Route, useParams, useHistory} from 'react-router-dom';

export default function MovieList(props) {
  
    return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
        <MovieDetails movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  const history = useHistory();
  const routeToId = () => {
    history.push(`/movies/${id}`);
  };

  return (
    <div className="movie-card" onClick={routeToId}>  
    
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <Link to={`/movies/${id}`}>Details</Link>
      <Route path={`/movies/${id}`}>
      </Route>
    </div>
  );
}
