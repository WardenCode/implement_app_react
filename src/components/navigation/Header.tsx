import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css'

interface HeaderProps {
  userUsername: string
  setIsLoggedIn: (value: boolean) => void
}

function Header({
  setIsLoggedIn,
  userUsername
}: HeaderProps) {

  function logout() {
    localStorage.removeItem('accessToken')
    setIsLoggedIn(false)
  }

  return (
    <header className={styles.header}>
      <p className={styles.logo}>Cinema Guru</p>
      <nav className={styles.navigation}>
        <div className={styles.user_info}>
          <figure className={styles.user_img_container}>
            <img src="https://picsum.photos/100/100" alt="Temporal user img" />
          </figure>
          <p className={styles.welcome_text}>Welcome, {userUsername}!</p>
        </div>
        <span className={styles.logout} onClick={logout}>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size='sm'
          />
          Logout
        </span>
      </nav>
    </header>
  )
}

export default Header;