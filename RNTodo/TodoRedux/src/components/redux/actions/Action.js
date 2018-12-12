const add = en => ({
  type: "add",
  en: en,
  vn: "Tiếng việt"
});

const check = id => ({
  type: "Check",
  id: id
});

const checked = id => ({
  type: "Checked",
  id: id
});

const showAll = () => ({
  type: "Show_All"
});

const showCheck = () => ({
  type: "Show_Check"
});

const showChecked = () => ({
  type: "Show_isCheck"
});
export default { add, checked, check, showAll, showCheck, showChecked };
