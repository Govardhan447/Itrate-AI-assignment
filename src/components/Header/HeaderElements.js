import { Link } from "react-router-dom";

const HeaderElements = (prop) => {
  const { itemDetails, updatelistItem, isActive } = prop;
  const { id, path, text } = itemDetails;
  const isActivated = isActive ? "active" : "link";
  const onclickLink = () => {
    updatelistItem(id);
  };
  return (
    <li onClick={onclickLink}>
      <Link to={path} className={isActivated}>
        {text}
      </Link>
    </li>
  );
};

export default HeaderElements;
