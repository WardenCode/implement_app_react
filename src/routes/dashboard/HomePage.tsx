import { useState } from "react";
import Filter from "../../components/movies/Filter";
import styles from './HomePage.module.css'
import Button from '../../components/general/Button';
import { MovieI } from "../../interfaces/Api";
import { getMovies } from "../../services/Api.service";

interface HomePageProps { }

function HomePage({ }: HomePageProps) {
  const [movies, setMovies] = useState<MovieI[]>([]);
  const [minYear, setMinYear] = useState<number>(1970);
  const [maxYear, setMaxYear] = useState<number>(2023);
  const [genres, setGenres] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  function loadMovies(page: number) {
    const params = {
      maxYear,
      minYear,
      genres: genres.join(','),
      title,
      page,
      sort
    };

    getMovies(params)
      .then()
  }

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

        </div>
        <Button
          className={styles.button}
          text="Load more..."
          onClick={() => { }}
        />
      </section>
    </div>
  )
}

export default HomePage;