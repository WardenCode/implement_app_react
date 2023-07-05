import { useEffect, useState } from "react";
import Filter from "../../components/movies/Filter";
import styles from './HomePage.module.css'
import Button from '../../components/general/Button';
import { MovieI } from "../../interfaces/Api";
import { getMovies } from "../../services/Api.service";
import MovieCard from "../../components/movies/MovieCard";

interface HomePageProps { }

function HomePage({ }: HomePageProps) {
  const [movies, setMovies] = useState<MovieI[]>([]);
  const [minYear, setMinYear] = useState<number>(1970);
  const [maxYear, setMaxYear] = useState<number>(2022);
  const [genres, setGenres] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("default");
  const [title, setTitle] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  async function loadMovies(page: number) {
    const params = {
      maxYear,
      minYear,
      genres: genres.join(','),
      title,
      page,
      sort
    };

    return getMovies(params)
      .then((data) => setMovies(data.titles));
  }

  async function handleLoadMore() {
    try {
      await loadMovies(page + 1)
      setPage(page + 1)
    } catch (error) {
      console.error('Error while loading movies:', error);
    }
  }

  useEffect(() => {
    setMovies([]);
    setPage(1);
    loadMovies(page)
  }, [minYear, maxYear, genres, sort, title])

  return (
    <div className={styles.container}>
      <section className={styles.filter_section}>
        <Filter
          genres={genres}
          setGenres={setGenres}
          maxYear={maxYear}
          setMaxYear={setMaxYear}
          minYear={minYear}
          setMinYear={setMinYear}
          sort={sort}
          setSort={setSort}
          title={title}
          setTitle={setTitle}
        />
      </section>
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
        <Button
          className={styles.button}
          text="Load more..."
          onClick={handleLoadMore}
        />
      </section>
    </div>
  )
}

export default HomePage;