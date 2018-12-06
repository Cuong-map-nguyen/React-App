
const defaultState = { value: 0 };
const reducer = (state = defaultState, action) => {
    if (action.type === "up") return { value: state.value + 1 };
    if (action.type === "down")
        return { value: state.value === 0 ? state.value : state.value - 1 };
    return state;
    // action.type === 'up' ? return {value : state.value + 1} : return {value : state.value - 1} ;
};
export default reducer;