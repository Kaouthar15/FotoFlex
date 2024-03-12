const verticalFlip = (state, setState, storeData) => {
    setState({
        ...state,
        vartical: state.vartical === 1 ? -1 : 1
    })
    const stateData = state
    stateData.vartical = state.vartical === 1 ? -1 : 1
    storeData.insert(stateData)
}

export default verticalFlip;
