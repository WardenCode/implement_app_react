import { useEffect, useState } from "react";
import { MovieI } from "../../interfaces/Api";
import styles from './Favorites.module.css'
import { getFavoriteMovies } from "../../services/Api.service";
import MovieCard from "../../components/movies/MovieCard";

interface FavoritesProps { }

function Favorites({ }: FavoritesProps) {
  const [movies, setMovies] = useState<MovieI[]>([]);

  useEffect(() => {
    getFavoriteMovies().then((data) => {
      setMovies(data)
    })
  }, [])


  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Movies you like</h1>
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

export default Favorites;