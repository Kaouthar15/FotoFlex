// imageHandle.jsx
const imageHandle = (e, setState, state, storeData) => {
    if (e.target.files.length !== 0) {

        const reader = new FileReader()

        reader.onload = () => {
            setState({
                ...state,
                image: reader.result
            })

            const stateData = {
                image: reader.result,
                brightness: 100,
                grayscale: 0,
                sepia: 0,
                saturate: 100,
                contrast: 100,
                hueRotate: 0,
                rotate: 0,
                vartical: 1,
                horizental: 1
            }
            storeData.insert(stateData)
        }
        reader.readAsDataURL(e.target.files[0])
    }
}

export default imageHandle;

