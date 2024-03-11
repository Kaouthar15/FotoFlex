// undo.jsx
const undo = (storeData, setState) => {
    const data = storeData.undoEdit()
    if (data) {
        setState(data)
    }
}

export default undo;
