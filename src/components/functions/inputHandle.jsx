const inputHandle = (e, setState, state) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
}

export default inputHandle;
