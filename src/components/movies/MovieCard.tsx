import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tag from './Tag';
import { useState, useEffect } from 'react';
import environments from '../../environments';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './MovieCard.module.css'
import unavailable_movie from '../../assets/images/unavailable_movie.png'
import { MovieI } from '../../interfaces/Api';
import { addToSection, getFavoriteMovies, getWatchLaterMovies, removeFromSection } from '../../services/Api.service';

interface MovieCardProps {
  movie: MovieI;
}

function MovieCard({
  movie
}: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isWatchLater, setIsWatchLater] = useState<boolean>(false);

  function handleClick(type: string) {
    const url = `${environments.API_URL}/titles/${type}?imdbId=${movie.imdbId}`;

    if (isFavorite || isWatchLater)
      removeFromSection(url)
    else
      addToSection(url)

    if (type === "favorite") setIsFavorite(!isFavorite)
    if (type === "watchlater") setIsWatchLater(!isWatchLater)
  }

  useEffect(() => {
    getFavoriteMovies()
      .then((data) => {
        console.log(data)
      })

    getWatchLaterMovies()
      .then((data) => {
        console.log(data)
      })
  }, [isFavorite, isWatchLater]);

  return (
    <li className={styles.container}>
      <figure className={styles.thumbnail}>
        <div className={styles.icons_container}>
          <FontAwesomeIcon
            className={`${styles.icon} ${isFavorite && styles.icon_activated}`}
            onClick={() => handleClick("favorite")}
            icon={faStar}
            size='lg'
          />
          <FontAwesomeIcon
            className={`${styles.icon} ${isWatchLater && styles.icon_activated}`}
            onClick={() => handleClick("watchlater")}
            icon={faClock}
            size='lg'
          />
        </div>
        <img
          className={styles.movie_img}
          src={movie.imageurls[0] ?? unavailable_movie}
          alt={`${movie.title} Thumbnail`}
        />
        <h2 className={styles.title}>{movie.title}</h2>
      </figure>
      <div className={styles.movie_content}>
        {/* <p className={styles.summary}>{movie.summary}</p> */}
        <p className={styles.summary}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
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