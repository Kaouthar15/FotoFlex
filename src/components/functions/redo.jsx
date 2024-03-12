const redo = (storeData, setState) => {
    const data = storeData.redoEdit()
    if (data) {
        setState(data)
    }
}

export default redo;
