import { useLoaderData } from '@remix-run/react';

import { API_URL } from '../../constants';
import { Link } from 'react-router-dom';

export async function loader({ params }) {
  const movieId = params.movieId;
  console.log(movieId);
  const response = await fetch(`${API_URL}/${movieId}`);
  const movie = await response.json();
  return movie;
}

const MovieDetails = ({ movie, onClose }) => {
  const movie = useLoaderData();
  if (!movie) {
    return <p>Movie not found</p>;
  }
  const {
    poster_path: imageUrl,
    title: movieName,
    release_date: releaseYear,
    vote_average: rating,
    runtime: duration,
    overview: description,
  } = movie;

  const imageBaseUrl = 'https://image.tmdb.org/t/p/';
  const imageWidth = 'w185';

  const handleCloseClick = e => {
    e.stopPropagation();
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
      <div className="flex items-center justify-center p-4">
        <Link
            to={'/'}
            className="absolute top-8 right-44 bg-red-500 text-white text-2xl cursor-pointer"
            onClick={handleCloseClick}
        >
          &times;
        </Link>
        <img className="w-48 h-72 object-cover mr-4"
             src={`${imageBaseUrl}${imageWidth}${imageUrl}`} alt={movieName}/>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-white mb-2">{movieName}</h2>
          <p className="text-lg text-gray-400 mb-2">{releaseYear}</p>
          <p className="text-lg text-gray-500 mb-2">Rating: {rating}</p>
          <p className="text-lg text-gray-500 mb-2">Duration: {duration} min</p>
          <p className="text-base text-gray-500 text-justify">{description}</p>
        </div>
      </div>
  );
};

export default MovieDetails;
