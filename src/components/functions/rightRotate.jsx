// rightRotate.jsx
const rightRotate = (state, setState, storeData) => {
    setState({
        ...state,
        rotate: state.rotate + 90
    })
    const stateData = state
    stateData.rotate = state.rotate + 90
    storeData.insert(stateData)
}

export default rightRotate;
