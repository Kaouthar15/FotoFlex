import React, { useState } from "react";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { HiOutlineAdjustments } from "react-icons/hi";
import { MdRotate90DegreesCw } from "react-icons/md";
import { MdOutlineFilterVintage } from "react-icons/md";
import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
import leftRotate from "./functions/leftRotate";
import rightRotate from "./functions/rightRotate";
import verticalFlip from "./functions/verticalFlip";
import horizontalFlip from "./functions/horizontalFlip";
import storeData from "./LinkedList";
import inputHandle from "./functions/inputHandle";
import handleFilter from "./functions/handleFilter";
import styles from "./style/sidebar.module.css";

function SideBar({ filterElement, property, setProperty, state, setState }) {
  const [showFilters, setShowFilters] = useState(false);
  const [showAdjust, setShowAdjust] = useState(false);
  const [showRotate, setShowRotate] = useState(false);

  const handleInput = (e) => inputHandle(e, setState, state);
  const handleLeftRotate = () => leftRotate(state, setState, storeData);
  const handleRightRotate = () => rightRotate(state, setState, storeData);
  const handleVerticalFlip = () => verticalFlip(state, setState, storeData);
  const handleHorizontalFlip = () => horizontalFlip(state, setState, storeData);

  const toggleAdjust = () => {
    setShowAdjust(!showAdjust);
    setShowRotate(false);
    setShowFilters(false);
  };

  const toggleRotate = () => {
    setShowRotate(!showRotate);
    setShowAdjust(false);
    setShowFilters(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    setShowAdjust(false);
    setShowRotate(false);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.side_body}>
        <div className={styles.filter_section}>
          <button
            onMouseEnter={toggleAdjust}
            onMouseLeave={toggleAdjust}
            onClick={toggleAdjust}
            className={styles.adjust}
          >
            <HiOutlineAdjustments size={40} />
          </button>
          {showAdjust && (
            <div className={styles.adjust_section}>
              <div className={styles.filter_key}>
                {filterElement.map((v, i) => (
                  <button
                    id={styles.buttons}
                    className={`${styles[v.name]}`}
                    onClick={() => setProperty(v)}
                    key={i}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
              <div className={styles.filter_slider}>
                <div className={styles.label_bar}>
                  <label htmlFor="range1">Adjust</label>
                  <span>{state[property.name]}%</span>
                </div>
                <input
                  name={property.name}
                  onChange={handleInput}
                  value={state[property.name]}
                  max={property.maxValue}
                  type="range"
                  className={styles.range}
                />
              </div>
            </div>
          )}
        </div>

        <div className={styles.rotate}>
          <button
            onMouseEnter={toggleRotate}
            onMouseLeave={toggleRotate}
            onClick={toggleRotate}
            className={styles.rotate_flip}
          >
            <MdRotate90DegreesCw size={40} />
          </button>
          {showRotate && (
            <div className={styles.rotate_section}>
              <div className={styles.icon}>
                <div className={styles.left} onClick={handleLeftRotate}>
                  <GrRotateLeft size={40} />
                </div>
                <div className={styles.right} onClick={handleRightRotate}>
                  <GrRotateRight size={40} />
                </div>
                <div className={styles.vertical} onClick={handleVerticalFlip}>
                  <CgMergeVertical size={40} />
                </div>
                <div
                  className={styles.horizental}
                  onClick={handleHorizontalFlip}
                >
                  <CgMergeHorizontal size={40} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onMouseEnter={toggleFilters}
        onMouseLeave={toggleFilters}
        onClick={toggleFilters}
        className={styles.filters}
      >
        <MdOutlineFilterVintage size={40} />
      </button>
      {showFilters && (
        <div className={styles.filters_section}>
          <div className={styles.filters_container}>
            <h3>Filters</h3>
            <div
              className={styles.Vin_Effect_filter}
              onClick={() => {
                handleFilter(setState, 1);
              }}
            >
              Vintage Effect
            </div>
            <div
              className={styles.Pop_filter}
              onClick={() => {
                handleFilter(setState, 2);
              }}
            >
              Pop Art Effect
            </div>
            <div
              className={styles.Cyberpunk_filter}
              onClick={() => {
                handleFilter(setState, 3);
              }}
            >
              Cyberpunk Effect
            </div>
            <div
              className={styles.DreamyEff_filter}
              onClick={() => {
                handleFilter(setState, 4);
              }}
            >
              Dreamy Effect
            </div>
            <div
              className={styles.Underwater_filter}
              onClick={() => {
                handleFilter(setState, 5);
              }}
            >
              Underwater Effect
            </div>
            <div
              className={styles.Soft_filter}
              onClick={() => {
                handleFilter(setState, 6);
              }}
            >
              Soft Glow
            </div>
            <div
              className={styles.Warm_filter}
              onClick={() => {
                handleFilter(setState, 7);
              }}
            >
              Warm Vintage
            </div>
            <div
              className={styles.DreamyPass_filter}
              onClick={() => {
                handleFilter(setState, 8);
              }}
            >
              Dreamy Pastel
            </div>
            <div
              className={styles.autre_filtre_filter}
              onClick={() => {
                handleFilter(setState, 9);
              }}
            >
              Without Effect
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
