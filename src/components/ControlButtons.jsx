import React from "react";
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaCropSimple } from "react-icons/fa6";
import redo from "./functions/redo";
import undo from "./functions/undo";
import imageHandle from "./functions/imageHandle";
import imageCrop from "./functions/imageCrop";
import storeData from "./LinkedList";
import styles from "./style/controlbuttons.module.css";

const ImageControls = ({ crop, setState, details, state, setZoom, zoom }) => {
  const handleUndo = () => {
    undo(storeData, setState);
  };

  const handleRedo = () => {
    redo(storeData, setState);
  };

  const pourcentage = Math.round(zoom * 100);
  const handleClickSpan = () => {
    setZoom(1);
  };
  const handleZoomIn = () => {
    if (zoom < 3) {
      setZoom(zoom + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 0.1) {
      setZoom(Math.max(0.1, zoom - 0.1)); 
    }
  };
  const handleImageHandle = (e) => imageHandle(e, setState, state, storeData);
  const handleImageCrop = () => {
    if (crop.width && crop.height) {
      imageCrop(details, crop, state, setState);
    }
  };

  return (
    <div className={styles.image_select}>
      <div className={styles.div_undo_redo}>
        <button
          className={`${styles.undo} ${!state.image && styles.disabled}`}
          title="Undo"
          onClick={handleUndo}
          disabled={!state.image}
        >
          <LuUndo2 />
        </button>
        <button
          className={`${styles.redo} ${!state.image && styles.disabled}`}
          title="Redo"
          onClick={handleRedo}
          disabled={!state.image}
        >
          <LuRedo2 />
        </button>
      </div>
      <div className={styles.zooming}>
        <button
          className={styles.zoomIn}
          title="Zoom In"
          onClick={handleZoomIn}
          disabled={zoom >= 3} 
        >
          <FaPlus />
        </button>
        <button
          className={styles.spanZoom}
          title="Reset Zoom"
          onClick={handleClickSpan}
        >
          {pourcentage}
          <AiOutlinePercentage />
        </button>
        <button
          className={styles.zoomOut}
          title="Zoom Out"
          onClick={handleZoomOut}
          disabled={zoom <= 0.1} 
        >
          <FaMinus />
        </button>
      </div>
      <button
        className={`${styles.crop} ${
          (!state.image || !crop.width || !crop.height) && styles.disabled
        }`}
        onClick={handleImageCrop}
        disabled={!state.image || !crop.width || !crop.height}
        title={
          state.image
            ? "Please make a selection on the image"
            : "Select an image"
        }
      >
        <FaCropSimple size={40} />
      </button>

      <input
        className={styles.hiddenChoose}
        onChange={handleImageHandle}
        type="file"
        id="choose"
      />
    </div>
  );
};

export default ImageControls;
