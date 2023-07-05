import { parseDateForRead } from '../../utils'
import styles from './Activity.module.css'

interface ActivityProps {
  username: string,
  title: string,
  activityType: string,
  updatedAt: string
}

interface ActivityActions {
  favorite: ActivityState
  watchLater: ActivityState
  removeFavorited: ActivityState
  removeWatchLater: ActivityState
  [key: string]: ActivityState
}

interface ActivityState {
  action: 'added' | 'removed';
  text: string
}

const activityActions: ActivityActions = {
  favorite: {
    action: "added",
    text: 'to favorite',
  },
  watchLater: {
    action: "removed",
    text: 'from watch later',
  },
  removeFavorited: {
    action: "removed",
    text: 'favorite',
  },
  removeWatchLater: {
    action: "removed",
    text: 'from watch later',
  },
};

function Activity({
  username,
  title,
  activityType,
  updatedAt
}: ActivityProps) {
  const dateParsed = new Date(updatedAt);
  const dateFormated = parseDateForRead(dateParsed);

  return (
    <li className={styles.container}>
      <p className={styles.content}>
        <span className={styles.username}>{username}</span>
        &nbsp;{activityActions[activityType]["action"]}&nbsp;
        <span className={styles.movie_title}>{title}</span>
        &nbsp;{activityActions[activityType]["text"]} - {dateFormated}
      </p>
    </li>
  )
}

export default Activity;