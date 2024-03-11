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
          FOTOfLEX provides a responsive and user-friendly platform for all your
          image editing needs, ensuring seamless functionality across devices of
          all sizes. With no sign-up required, you can dive straight into
          editing your photos without any hassle. Whether you're on your
          computer, tablet, or smartphone, FOTOfLEX adapts to your screen,
          offering a fluid and intuitive editing experience. Explore our range
          of features including cropping, filters, adjustments, adding text,
          undo and redo options, zooming, rotating, and flipping, all designed
          to enhance your images effortlessly. 
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
