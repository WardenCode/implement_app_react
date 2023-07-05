import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Activity from "../miscellaneous/Activity";
import { faArrowRight, faClock, faFolder, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from './Sidebar.module.css'
import { ActivityI } from "../../interfaces/Api";
import { getActivities } from "../../services/Api.service";

interface SidebarProps { }

interface NavLinkStatus {
  isActive: boolean,
  isPending: boolean
}

function checkNavLinkStatus({ isActive }: NavLinkStatus) {
  let className = styles.nav_link;

  if (isActive)
    className += ` ${styles.active}`

  return className
}

function Sidebar({ }: SidebarProps) {
  const [activitiesArray, setActivitiesArray] = useState<ActivityI[]>([]);

  useEffect(() => {
    getActivities()
      .then((data) => {
        console.log(data)
        setActivitiesArray(data);
      })
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