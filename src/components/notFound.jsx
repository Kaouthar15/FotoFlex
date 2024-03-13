import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './footer';
import { ScaleLoader } from 'react-spinners';
import styles from './style/notFound.module.css'    

export default function NotFound() {
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
    useEffect(() => {
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDarkMode);
    }, []);
  
    const toggleDarkMode = () => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem("darkMode", newMode);
    };
  return (
    <div className={`${styles.accueil_body} ${darkMode ? styles.darkMode : ""}`}>
      {loading ? (
        <div className={styles.loader_container}>
          <ScaleLoader color={"#7f6897"} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className={styles.body}>
            <img src={`${darkMode?require('../images/Dark404.png'):require('../images/404.png')}`} alt="" width={300} />
        </div>
        <div>
            <Footer darkMode={darkMode} />
        </div>
    </>
      )}
    </div>
  )
}
