const Filter = (state = 'Show_All', action) => {
    if(action.type == "Show_All") return "Show_All";
    if(action.type == "Show_Check") return "Show_Check";
    if(action.type == "Show_isCheck") return "Show_isCheck";
    return state;
}
export default Filter;