const horizontalFlip = (state, setState, storeData) => {
    setState({
        ...state,
        horizental: state.horizental === 1 ? -1 : 1
    })
    const stateData = state
    stateData.horizental = state.horizental === 1 ? -1 : 1
    storeData.insert(stateData)
}

export default horizontalFlip; 
