import React, { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import { IoIosImage } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineTextFields } from "react-icons/md";
import saveImage from "./functions/saveImage";
import styles from "./style/imagedisplay.module.css";

const ImageDisplay = ({ state, crop, setCrop, setDetails, zoom, darkMode }) => {
  const [addingText, setAddingText] = useState(false);
  const [text, setText] = useState("");
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [textStyle, setTextStyle] = useState({
    fontSize: "20px",
    fontFamily: "Font Family",
    color: "#000000",
  });
  const [isHovering, setIsHovering] = useState(false);

  const canvasRef = useRef(null);

  const handleAddText = () => {
    setAddingText(!addingText);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmitText = () => {
    setAddingText(false);
  };

  const handleStyleChange = (property, value) => {
    setTextStyle((prevStyle) => ({
      ...prevStyle,
      [property]: value,
    }));
  };

  const handleSaveImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.filter = `brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`;
      ctx.drawImage(img, 0, 0);

      ctx.font = `${textStyle.fontSize} ${textStyle.fontFamily}`;
      ctx.fillStyle = textStyle.color;
      ctx.fillText(text, textPosition.x, textPosition.y);

      saveImage(canvas.toDataURL(), state.image, text, textStyle, textPosition);
    };
    img.src = state.image;
  };

  const handleMouseDown = (e) => {
    const startX = e.pageX - textPosition.x;
    const startY = e.pageY - textPosition.y;

    const handleMouseMove = (e) => {
      const x = e.pageX - startX;
      const y = e.pageY - startY;
      setTextPosition({ x, y });
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div className={`${styles.image} ${darkMode ? styles.darkMode : ""}`}>
        {state.image ? (
          <>
            <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
              <img
                onLoad={(e) => setDetails(e.currentTarget)}
                style={{
                  filter: `brightness(${state.brightness}%) brightness(${state.brightness}%) sepia(${state.sepia}%) saturate(${state.saturate}%) contrast(${state.contrast}%) grayscale(${state.grayscale}%) hue-rotate(${state.hueRotate}deg)`,
                  transform: `rotate(${state.rotate}deg)  scale(${
                    state.vartical * zoom
                  },${state.horizental * zoom})`,
                }}
                src={state.image}
                alt=""
              />
            </ReactCrop>
            {text && (
              <div
                className={styles.text1}
                style={{
                  position: "absolute",
                  left: textPosition.x,
                  top: textPosition.y,
                  zIndex: 999,
                  ...textStyle,
                }}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {text}
                {isHovering && (
                  <FaTrashAlt
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    onClick={() => setText("")}
                  />
                )}
              </div>
            )}

            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          </>
        ) : (
          <div className="div_choose_image">
            <label className={styles.chooseImage} htmlFor="choose">
              <IoIosImage />
              <span>Choose Image</span>
            </label>
          </div>
        )}
      </div>
      <button
        className={`${styles.addText} ${!state.image && styles.disabled}`}
        onClick={handleAddText}
        disabled={!state.image}
        title={state.image ? "" : "Select an image"}
      >
        <MdOutlineTextFields size={40} />
      </button>

      <button
        className={`${styles.saveImage} ${!state.image && styles.disabled}`}
        onClick={handleSaveImage}
        disabled={!state.image}
        title={state.image ? "" : "Select an image"}
      >
        Save Image
      </button>

      {addingText && (
        <div className={styles.text2}>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text"
            style={{ background: "transparent" }}
          />
          <div>
            <input
              type="number"
              id="fontSize"
              placeholder="Font Size"
              min="10"
              value={parseInt(textStyle.fontSize)}
              onChange={(e) =>
                handleStyleChange("fontSize", e.target.value.toString() + "px")
              }
            />
          </div>
          <div>
            <select
              id="fontFamily"
              placeholder="Font Family"
              value={textStyle.fontFamily}
              onChange={(e) => handleStyleChange("fontFamily", e.target.value)}
            >
              <option value="Arial">Font Family</option>
              <option value="Verdana">Verdana</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
              <option value="Lucida Console">Lucida Console</option>
              <option value="Tahoma">Tahoma</option>
            </select>
          </div>

          <div>
            <input
              type="color"
              id="color"
              placeholder="Text Color"
              value={textStyle.color}
              onChange={(e) => handleStyleChange("color", e.target.value)}
            />
          </div>
          <button onClick={handleSubmitText}>Submit</button>
        </div>
      )}
    </>
  );
};

export default ImageDisplay;
