import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tag from './Tag';
import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import environments from '../../environments';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './MovieCard.module.css'

interface Movie {
  createdAt: string
  genres: string[]
  id: number
  imageurls: string[]
  imdbId: string
  imdbrating: number
  quotes: string[]
  released: number
  reviews: string[]
  runtime: number
  summary: string
  synopsis: string
  title: string
  trailerUrl: string[]
  type: string
  updatedAt: string
}

interface MovieCardProps {
  movie: Movie;
}

function handleAxiosError(error: AxiosError) {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
}

function MovieCard({
  movie
}: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isWatchLater, setIsWatchLater] = useState<boolean>(false);

  function handleClick(type: string) {
    const token = localStorage.getItem('accessToken');
    const url = `${environments.API_URL}/titles/${type}?imdbId=${movie.imdbId}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (type === "favorite") {
      if (isFavorite) {
        axios.delete(url, { headers })
          .then((response) => response.data)
          .then((data) => {
            console.log(data)
          })
          .catch(handleAxiosError)
      } else {
        axios.post(url, { headers })
          .then((response) => response.data)
          .then((data) => {
            console.log(data)
          })
          .catch(handleAxiosError)
      }
      setIsFavorite(!isFavorite)
    }

    if (type === "watchlater") {
      if (isFavorite) {
        axios.delete(url, { headers })
          .then((response) => response.data)
          .then((data) => {
            console.log(data)
          })
          .catch(handleAxiosError)
      } else {
        axios.post(url, { headers })
          .then((response) => response.data)
          .then((data) => {
            console.log(data)
          })
          .catch(handleAxiosError)
      }
      setIsWatchLater(!isWatchLater)
    }
  }

  useEffect(() => {
    const favoriteUrl = `${environments.API_URL}/titles/favorite`;
    const watchLaterUrl = `${environments.API_URL}/titles/watchlater`;

    axios.get<Movie[]>(favoriteUrl)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
      })
      .catch(handleAxiosError)

    axios.get<Movie[]>(watchLaterUrl)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
      })
      .catch(handleAxiosError)
  }, [isFavorite, isWatchLater]);

  return (
    <li className={styles.container}>
      <figure className={styles.thumbnail}>
        <div className={styles.icons_container}>
          <FontAwesomeIcon
            className={styles.icon}
            onClick={() => handleClick("favorite")}
            icon={faStar}
          />
          <FontAwesomeIcon
            className={styles.icon}
            onClick={() => handleClick("watchlater")}
            icon={faClock}
          />
        </div>
        <img
          className={styles.movie_img}
          src={movie.imageurls[0]}
          alt={`${movie.title} Thumbnail`}
        />
        <h2 className={styles.title}>{movie.title}</h2>
      </figure>
      <div className={styles.movie_content}>
        <p className={styles.summary}>{movie.summary}</p>
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