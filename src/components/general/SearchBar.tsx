import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './SearchBar.module.css'
import { ChangeEvent } from "react";

interface SearchBarProps {
  title: string
  setTitle: (value: string) => void
  dark?: boolean
}

function SearchBar({
  title,
  setTitle,
  dark = false,
}: SearchBarProps) {

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <div className={`${styles.container} ${dark && styles.container_dark}`}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`${styles.icon} ${dark && styles.icon_dark}`}
      />
      <input
        className={`${styles.search_input} ${dark && styles.search_input_dark}`}
        placeholder="Search Movies"
        type="text"
        value={title}
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBar;
