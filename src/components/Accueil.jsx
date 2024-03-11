import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style/acceuil.module.css";
import { ScaleLoader } from "react-spinners";
import Header from "./Header";
import Footer from "./footer";

export default function Acceuil() {
  const navigate = useNavigate();
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
    <div
      className={`${styles.accueil_body} ${darkMode ? styles.darkMode : ""}`}
    >
      {loading ? (
        <div className={styles.loader_container}>
          <ScaleLoader color={"#7f6897"} loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <div className={styles.body}>
            <div className={styles.navs}>
              <div className={styles.grd_img}>
                <div className={styles.btnsDiv}>
                  <h1>Image Editing, Simplified</h1>
                  <p>
                    FotoFlex is the easiest way to edit images online, crop,
                    filters and more with a few clicks.
                  </p>
                  <div className={styles.overlay}></div>
                  <button
                    className={styles.start_edit}
                    onClick={() => navigate("editor")}
                  >
                    Start Editing
                  </button>
                  <button>Learn More</button>
                </div>
              </div>
              <div className={styles.ttr}>
                <h1>Why use FotoFlex?</h1>
                <p>
                  FotoFlex is perfect for resizing images for social media,
                  creating graphics for your website, make your images more
                  beauty and much more. It's free to use, no sign up required.
                </p>
              </div>
              <div className={styles.imgs}>
                <div className={styles.imgDiv}>
                  <img src={require("../images/opt1.jpg")} alt="img" />
                  <h1>Simple interface</h1>
                  <p className={`${darkMode ? styles.darkP : styles.P}`}>Just upload your image and start editing</p>
                </div>
                <div className={styles.imgDiv}>
                  <img src={require("../images/opt3.png")} alt="img" />
                  <h1>No sign up required</h1>
                  <p className={`${darkMode ? styles.darkP : styles.P}`}>No account needed, just upload and edit</p>
                </div>
                <div className={styles.imgDiv}>
                  <img src={require("../images/opt2.jpg")} alt="img" />
                  <h1>Get started in seconds</h1>
                  <p className={`${darkMode ? styles.darkP : styles.P }`}>Go to FotoFlex.io and start editing now</p>
                </div>
              </div>
            </div>
          </div>
          <Footer darkMode={darkMode}/>
        </>
      )}
    </div>
  );
}
