import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./sidebar.module.css";
import lobbyNinjaLogo from "../../assets/lobbyNinjaLogo.svg";
import lobbyNinjaFinal from "../../assets/lobyNinjaFinal.svg";
import favourites from "../../assets/favourites.svg";
import tournaments from "../../assets/tournaments.svg";
import planner from "../../assets/planner.svg";
import registered from "../../assets/Frame.png";
import skipped from "../../assets/skipped.svg";
import alarm from "../../assets/alarm.svg";
import deleted from "../../assets/deleted.svg";
import { useTheme } from "../../utils/ThemeContext/ThemeContext.jsx";

const Sidebar = () => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/dashboard", icon: tournaments, label: "Tournaments" },
    //{ to: "/planner", icon: planner, label: "Planner" },
    { to: "/favorites", icon: favourites, label: "Favorites" },
    { to: "/registered", icon: registered, label: "Registered" },
    { to: "/skipped", icon: skipped, label: "Skipped" },
    { to: "/alarm", icon: alarm, label: "Alarm" },
    { to: "/deleted", icon: deleted, label: "Deleted" },
  ];

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : ""} ${isDarkMode ? styles.dark : styles.dark
        }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`${isOpen ? styles.logoOpened : styles.logo}`}>
        <img src={`${isOpen ? lobbyNinjaFinal : lobbyNinjaLogo}`} alt="Logo" />
      </div>

      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className={`${isOpen ? styles.alignementList : ""} ${isOpen && location.pathname !== link.to ? styles.marginLeft : ""
              }`}
          >
            <Link to={link.to}>
              <div
                className={`${location.pathname === link.to ? styles.bgIcon : ""
                  }`}
              >
                <img src={link.icon} alt={link.label} width="20px" height="20px" />
              </div>

              {isOpen && (
                <span
                  className={
                    location.pathname === link.to ? `${styles.colorText}` : ""
                  }
                >
                  {link.label}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
