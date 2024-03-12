import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "./style/learn.module.css"
import { ScaleLoader } from "react-spinners";
import Footer from "./footer";

export default function LearnMore() {
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
      {loading ?( 
      <div className={styles.loader_container}>
          <ScaleLoader color={"#7f6897"} loading={loading} size={100}  />
      </div>):(
        <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className={styles.body}>
      
        
      
        
        <div className={styles.prph}>
          FotoFlex provides a seamless and user-friendly platform for all your image editing needs. 
          With no sign-up required, you can effortlessly dive into enhancing your photos.
          Enjoy a fluid and intuitive editing experience with a range of features such as cropping, 
          filters, adjustments, adding text, undo and redo options, zooming, rotating,
          and flipping, all designed to elevate your images effortlessly.
        </div>
        <div className={styles.img}>
            <img src={require('../images/learn.png')} alt="img"  />
        </div>
       
       
      </div>
      <div>
          <Footer darkMode={darkMode}/>
        </div>
      </>)}
    </div>
  );
}
