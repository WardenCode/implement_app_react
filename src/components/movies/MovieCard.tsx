import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tag from './Tag';
import { useState, useEffect, SyntheticEvent } from 'react';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './MovieCard.module.css'
import unavailable_movie from '../../assets/images/unavailable_movie.png'
import { MovieI } from '../../interfaces/Api';
import {
  addToFavoriteMovies,
  addToFromWatchLaterMovies,
  getFavoriteMovies,
  getWatchLaterMovies,
  removeFromFavoritesMovies,
  removeFromWatchLaterMovies
} from '../../services/Api.service';

interface MovieCardProps {
  movie: MovieI;
}

function MovieCard({
  movie
}: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isWatchLater, setIsWatchLater] = useState<boolean>(false);

  function handleImageError(event: SyntheticEvent<HTMLImageElement, Event>) {
    const target = event.target as HTMLImageElement;
    target.src = unavailable_movie;
  }

  function handleClick(type: string) {
    const { imdbId } = movie;

    if (type === "favorite") {
      if (isFavorite)
        removeFromFavoritesMovies(imdbId)
      else
        addToFavoriteMovies(imdbId);

      setIsFavorite(!isFavorite)
    }

    if (type === "watchlater") {
      if (isWatchLater)
        removeFromWatchLaterMovies(imdbId)
      else
        addToFromWatchLaterMovies(imdbId);

      setIsWatchLater(!isWatchLater)
    }
  }

  useEffect(() => {
    getFavoriteMovies()
      .then((data) => {
        if (data.some(favorite => favorite.id === movie.id))
          setIsFavorite(true);
      })

    getWatchLaterMovies()
      .then((data) => {
        if (data.some(watchLater => watchLater.id === movie.id))
          setIsWatchLater(true);
      })
  }, []);

  return (
    <li className={styles.container}>
      <figure className={styles.thumbnail}>
        <div className={styles.icons_container}>
          <FontAwesomeIcon
            className={`${styles.icon} ${isFavorite ? styles.icon_activated : ""}`}
            onClick={() => handleClick("favorite")}
            icon={faStar}
            size='lg'
          />
          <FontAwesomeIcon
            className={`${styles.icon} ${isWatchLater ? styles.icon_activated : ""}`}
            onClick={() => handleClick("watchlater")}
            icon={faClock}
            size='lg'
          />
        </div>
        <img
          className={styles.movie_img}
          src={movie.imageurls[0] || unavailable_movie}
          alt={`${movie.title} Thumbnail`}
          onError={handleImageError}
        />
        <h2 className={styles.title}>{movie.title}</h2>
      </figure>
      <div className={styles.movie_content}>
        <p className={styles.summary}>{movie.synopsis}</p>
        <ul className={styles.genres_container}>
          {
            movie.genres.map((genre) => (
              <Tag
                genre={genre}
                key={genre}
              />
            ))
          }
        </ul>
      </div>
    </li>
  )
}

export default MovieCard;