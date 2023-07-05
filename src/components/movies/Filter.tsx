import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';
import styles from './Filter.module.css';

type SetValue<T> = (value: T) => void;

interface FilterProps {
  minYear: number
  setMinYear: SetValue<number>
  maxYear: number
  setMaxYear: SetValue<number>
  sort: string
  setSort: SetValue<string>
  genres: string[]
  setGenres: SetValue<string[]>
  title: string
  setTitle: SetValue<string>
}

const defaultGenres = [
  "Action",
  "Drama",
  "Comedy",
  "Biography",
  "Romance",
  "Thriller",
  "War",
  "History",
  "Sport",
  "Sci-Fi",
  "Documentary",
  "Crime",
  "Fantasy",
  "Adventure"
];

const sortOptions = [
  {
    name: 'Default',
    value: 'default'
  },
  {
    name: 'Latest',
    value: 'latest'
  },
  {
    name: 'Oldest',
    value: 'oldest'
  },
  {
    name: 'Highest Rated',
    value: 'highestrated'
  },
  {
    name: 'Lowest Rated',
    value: 'lowestrated'
  }
];

function Filter({
  genres,
  setGenres,
  maxYear,
  setMaxYear,
  minYear,
  setMinYear,
  sort,
  setSort,
  title,
  setTitle,
}: FilterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inputs_container}>
        <SearchBar
          title={title}
          setTitle={setTitle}
          dark
        />
        <div className={styles.filters}>
          <Input
            type="number"
            value={minYear}
            setValue={setMinYear}
            label='Min Date:'
            dark
          />
          <Input
            type="number"
            value={maxYear}
            setValue={setMaxYear}
            label='Max Date:'
            dark
          />
          <SelectInput
            label="Sort:"
            options={sortOptions}
            setValue={setSort}
            value={sort}
          />
        </div>
      </div>
      <ul className={styles.tag_list}>
        {
          defaultGenres.map((genre) => (
            <Tag
              key={genre}
              genre={genre}
              genres={genres}
              setGenres={setGenres}
              filter
            />
          ))
        }
      </ul>
    </div >
  )
}

export default Filter;
