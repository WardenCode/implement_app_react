import styles from './Activity.module.css'

interface ActivityProps {

}

function Activity({ }: ActivityProps) {
  return (
    <li className={styles.container}>
      <p className={styles.content}>
        <span className={styles.username}>Atef </span>
        added
        <span className={styles.movie_title}> The Murder House </span>
        to watch later - March 28, 2022
      </p>
    </li>
  )
}

export default Activity;