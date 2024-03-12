const saveImage = (imageData, state, text, textStyle, textPosition, circleColor, circleSize, showCircle) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
  

    ctx.filter = `brightness(${state.brightness}%) 
    sepia(${state.sepia}%) 
    saturate(${state.saturate}%) 
    contrast(${state.contrast}%) 
    grayscale(${state.grayscale}%) 
    hue-rotate(${state.hueRotate}deg)
    blur(${state.blur+5}px)
    opacity(${state.opacity}%)`;

    ctx.drawImage(img, 0, 0);
  

    if (text && textStyle && textPosition) {
      ctx.font = `${textStyle.fontSize} ${textStyle.fontFamily}`;
      ctx.fillStyle = textStyle.color;
      ctx.fillText(text, textPosition.x, textPosition.y);
    }
  

    if (showCircle) {
      ctx.beginPath();
      ctx.arc(textPosition.x + circleSize / 2, textPosition.y + circleSize / 2, circleSize / 2, 0, 2 * Math.PI);
      ctx.strokeStyle = circleColor;
      ctx.stroke();
    }
  

    const link = document.createElement('a');
    link.download = 'image_edit.jpg';
    link.href = canvas.toDataURL();
    link.click();
  };
  img.src = imageData;
};

export default saveImage;
