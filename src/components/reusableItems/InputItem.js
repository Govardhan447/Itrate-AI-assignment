import "./index.css";

const InputItem = (prop) => {
  const { areaholder } = prop;
  return <input type="text" placeholder={areaholder} />;
};

export default InputItem;
