import { useState } from 'react';
import styles from './Tag.module.css';

interface TagProps {
  genre: string
  genres?: string[]
  filter?: boolean
  setGenres?: (value: string[]) => void
}

function Tag({
  genre,
  filter = false,
  genres = [],
  setGenres = () => { },
}: TagProps) {
  const [selected, setSelected] = useState<boolean>(false);

  function handleTag() {
    const newGenres = selected
      ? genres.filter((e: string) => e !== genre)
      : [...genres, genre];

    setGenres(newGenres);
    setSelected(!selected)
  }

  return (
    <li
      className={`
        ${styles.container}
        ${filter ? styles.clickable : ""}
        ${(selected || !filter) ? styles.selected : ""}
      `}
      onClick={filter ? handleTag : () => { }}
    >
      {genre}
    </li>
  );
}

export default Tag;
