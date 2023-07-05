import { useEffect, useState } from "react";
import { MovieI } from "../../interfaces/Api";
import styles from './WatchLater.module.css'
import { getWatchLaterMovies } from "../../services/Api.service";
import MovieCard from "../../components/movies/MovieCard";

interface WatchLaterProps { }

function WatchLater({ }: WatchLaterProps) {
  const [movies, setMovies] = useState<MovieI[]>([]);

  useEffect(() => {
    getWatchLaterMovies().then((data) => {
      setMovies(data)
    })
  }, [])


  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Movies to watch Later</h1>
      <section className={styles.movies_section}>
        <div className={styles.movies_container}>
          {
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))
          }
        </div>
      </section>
    </section>
  )
}

export default WatchLater;