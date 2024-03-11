// imageCrop.jsx
const imageCrop = (details, crop, state, setState) => {
    const canvas = document.createElement('canvas')
    const scaleX = details.naturalWidth / details.width
    const scaleY = details.naturalHeight / details.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    ctx.drawImage(
        details,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
    )

    const base64Url = canvas.toDataURL('image/jpg')

    setState({
        ...state,
        image: base64Url
    })
}

export default imageCrop;
