import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import environments from "../../environments";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Activity from "../miscellaneous/Activity";
import { faArrowRight, faClock, faFolder, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from './Sidebar.module.css'

interface SidebarProps { }

interface ActivityTitle {
  title: string
}

interface ActivityUser {
  username: string
}

interface Activity {
  TitleId: number
  activityType: string
  createdAt: string
  id: number
  title: ActivityTitle
  updatedAt: string
  user: ActivityUser
  userId: number
}

interface NavLinkStatus {
  isActive: boolean,
  isPending: boolean
}

function Sidebar({ }: SidebarProps) {
  const [activitiesArray, setActivitiesArray] = useState<Activity[]>([]);

  function checkNavLinkStatus({ isActive }: NavLinkStatus) {
    let className = styles.nav_link;

    if (isActive)
      className += ` ${styles.active}`

    return className
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    axios.get<Activity[]>(`${environments.API_URL}/activity`, { headers })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        setActivitiesArray(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

  }, []);

  return (
    <nav
      className={styles.container}
    >
      <ul className={styles.navigation_list}>
        <li>
          <NavLink
            to='/home'
            className={checkNavLinkStatus}
          >
            <div className={styles.nav_link_content}>
              <FontAwesomeIcon icon={faFolder} />
              <span>Home</span>
            </div>
            <FontAwesomeIcon
              className={styles.arrow}
              icon={faArrowRight}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/favorites'
            className={checkNavLinkStatus}
          >
            <div className={styles.nav_link_content}>
              <FontAwesomeIcon icon={faStar} />
              <span>Favorites</span>
            </div>
            <FontAwesomeIcon
              className={styles.arrow}
              icon={faArrowRight}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/watchlater'
            className={checkNavLinkStatus}
          >
            <div className={styles.nav_link_content}>
              <FontAwesomeIcon icon={faClock} />
              <span>Watch Later</span>
            </div>
            <FontAwesomeIcon
              className={styles.arrow}
              icon={faArrowRight}
            />
          </NavLink>
        </li>
      </ul>
      <div className={styles.activities_container}>
        <p className={styles.activities_title}>Latest Activities</p>
        <ul className={styles.activities_list}>
          {activitiesArray.slice(0, 10).map((activity) => <Activity />)}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar;