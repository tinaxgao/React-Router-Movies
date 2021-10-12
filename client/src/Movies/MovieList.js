import React from 'react';
import {Link, NavLink, useRouteMatch, Route, useParams, useHistory} from 'react-router-dom';

export default function MovieList(props) {
  
    return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;


  return (
    <Link to={`/movies/${props.movie.id}`}>
    <div className="movie-card">  
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <Link to={`/movies/${id}`}>Details</Link>
    </div>
    </Link>
  );

  // return (
  //   <div className="movie-card" onClick={routeToId()}>  
  //     <h2>{title}</h2>
  //     <div className="movie-director">
  //       Director: <em>{director}</em>
  //     </div>
  //     <div className="movie-metascore">
  //       Metascore: <strong>{metascore}</strong>
  //     </div>
  //     <Link to={`/movies/${id}`}>Details</Link>
  //     {/* <Route path={`/movies/${id}`}>
  //     </Route> */}
  //   </div>
  // );
}
