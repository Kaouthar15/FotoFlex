import React, { useState, useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";
import Sidebar from "./Sidebar";
import { ScaleLoader } from "react-spinners";

import ControlButtons from "./ControlButtons";
import ImageDisplay from "./ImageDisplay";
import styles from "./style/main.module.css";
import Header from "./Header";

const Main = () => {
  const filterElement = [
    {
      name: "brightness",
      maxValue: 200,
    },
    {
      name: "grayscale",
      maxValue: 200,
    },
    {
      name: "sepia",
      maxValue: 200,
    },
    {
      name: "saturate",
      maxValue: 200,
    },
    {
      name: "contrast",
      maxValue: 200,
    },
    {
      name: "hueRotate",
    },
  ];
  const [property, setProperty] = useState({
    name: "brightness",
    maxValue: 200,
  });
  const [zoom, setZoom] = useState(1);
  const [details, setDetails] = useState("");
  const [crop, setCrop] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [state, setState] = useState({
    image: "",
    brightness: 100,
    grayscale: 0,
    invert: 0,
    blur: 0,
    sepia: 0,
    saturate: 100,
    contrast: 100,
    hueRotate: 0,
    rotate: 0,
    vartical: 1,
    horizental: 1,
  });

  return (
    <div
      className={`${styles.image_editor} ${darkMode ? styles.darkMode : ""}`}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {loading ? (
        <div className={styles.loader_container}>
          <ScaleLoader color={"#7f6897"} loading={loading} size={100} />
        </div>
      ) : (
        <div className={styles.card}>
          <div className={styles.card_body}>
            <Sidebar
              filterElement={filterElement}
              property={property}
              setProperty={setProperty}
              state={state}
              setState={setState}
              details={details}
            />
            <ImageDisplay
              state={state}
              crop={crop}
              setCrop={setCrop}
              setDetails={setDetails}
              details={details}
              zoom={zoom}
              darkMode={darkMode}
            />
            <ControlButtons
              crop={crop}
              details={details}
              state={state}
              setState={setState}
              zoom={zoom}
              setZoom={setZoom}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
