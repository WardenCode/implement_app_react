import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Header from '../../components/navigation/Header';
import Sidebar from '../../components/navigation/Sidebar';

import styles from './Dashboard.module.css';
import Tag from '../../components/movies/Tag';
import { useState } from 'react';
import Filter from '../../components/movies/Filter';

interface DashboardProps {
  userUsername: string
  setIsLoggedIn: (value: boolean) => void
}

const defaultGenres = [
  "action",
  "drama",
  "comedy",
  "comedy",
  "biography",
  "romance",
  "thriller",
  "war",
  "history",
  "sport",
  "sci-fi",
  "documentary",
  "crime",
  "fantasy"
];

const actualYear = new Date().getFullYear();

function Dashboard({
  userUsername,
  setIsLoggedIn
}: DashboardProps) {
  const [genres, setGenres] = useState<string[]>(defaultGenres);
  const [maxYear, setMaxYear] = useState<number>(actualYear);
  const [minYear, setMinYear] = useState<number>(actualYear);
  const [sort, setSort] = useState<string>('default');
  const [title, setTitle] = useState<string>('');


  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header
          setIsLoggedIn={setIsLoggedIn}
          userUsername={userUsername}
        />
        <main className={styles.main_section}>
          <Sidebar />
          <div className={styles.main_content}>
            <div className={styles.filter_section}>
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
            </div>
          </div>
        </main>
      </div>
      <Routes>
        <Route path='/' />
        <Route path='/favorites' />
        <Route path='/watchlater' />
        <Route path='*' />
      </Routes>
    </BrowserRouter>
  )
}

export default Dashboard;