import React from "react";
import styles from "./style/acceuil.module.css";
import useWindowScroll from "./useWindowScroll";
import { useNavigate } from "react-router-dom";
import { WiMoonAltFirstQuarter, WiMoonAltThirdQuarter } from "react-icons/wi";

export default function Header({ toggleDarkMode, darkMode }) {
  const navigate = useNavigate();
  const scrollY = useWindowScroll();

  function handleNavigateHome() {
    navigate("/");
  }

  function handleNavigateEditor() {
    navigate("/editor");
  }

  function handleNavigateLearn() {
    navigate("/learn");
  }
  return (
    <>
      <header
        className={`${scrollY !== 0  ? styles.fixedHeader : styles.head} ${
          darkMode ? styles.darkMode : ""
        }`}
      >
        <div>
          <img
            src={
              !darkMode
                ? require("../images/logo.png")
                : require("../images/logo_dark.png")
            }
            style={{ cursor: "pointer" }}
            width={200}
            alt=""
            onClick={handleNavigateHome}
          />
        </div>
        <div>
          <ul>
            <li className={darkMode ? styles.darkListItem : ""}>Home </li>
            <li className={darkMode ? styles.darkListItem : ""} onClick={handleNavigateLearn}>Learn</li>
            <button onClick={handleNavigateEditor}>New Image</button>
            <div style={{ cursor: "pointer" }} onClick={toggleDarkMode}>
              {darkMode ? (
                <WiMoonAltFirstQuarter size={40} color="#ffff " />
              ) : (
                <WiMoonAltThirdQuarter color="#011a4e" size={40} />
              )}
            </div>
          </ul>
        </div>
      </header>
      <hr />
    </>
  );
}
