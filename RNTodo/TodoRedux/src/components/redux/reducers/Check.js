const defaultValue = [
  {
    id: 1,
    en: "action",
    vn: "hành động",
    memorized: true,
    isShow: false
  }
];

const Check = (state = defaultValue, action) => {
  if (action.type == "add") {
    return [
      {
        id: state.length + 1,
        en: action.en,
        vn: action.vn,
        memorized: false,
        isShow: false
      }
    ].concat(state);
  }
  if (action.type == "Check") {
    return state.map(e => {
      if (e.id !== action.id) return e;
      return { ...e, memorized: true };
    });
  }
  if (action.type == "Checked") {
    return state.map(e => {
      if (e.id !== action.id) return e;
      return { ...e, memorized: false };
    });
  }
  return state;
};
export default Check;
