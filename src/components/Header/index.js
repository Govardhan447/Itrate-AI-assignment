import { useState } from "react";

import "./index.css";
import { PathLink } from "./styledComponents";
import { CgProfile } from "react-icons/cg";

const headerElements = [
  {
    id: 1,
    path: "/",
    isActive: false,
    text: "Home",
  },
  {
    id: 2,
    path: "/puja",
    isActive: false,
    text: "Puja",
  },

  {
    id: 3,
    path: "/panchang",
    isActive: false,
    text: "Panchang",
  },
  {
    id: 4,
    path: "/template",
    isActive: false,
    text: "Template",
  },
  {
    id: 5,
    path: "/library",
    isActive: false,
    text: "Library",
  },
];

const Header = () => {
  const [listItems, setlistItems] = useState(headerElements);
  const onclickLink = (id) => {
    setlistItems((prevState) =>
      listItems.map((item) => {
        if (item.id === id) {
          [...item.isActive, !isActive];
        }
        return item;
      })
    );
  };

  return (
    <div className="nav-container">
      <div className="header-img-container">
        <img
          src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721394087/Screenshot_2024-07-19_173417_m3m76y.png"
          alt="header logo"
        />
      </div>
      <div className="header-elements-container">
        {headerElements.map((item) => (
          <PathLink
            isactive={isActive}
            to={item.path}
            onClick={onclickLink}
            key={item.id}
          >
            {item.text}
          </PathLink>
        ))}
      </div>
      <div className="language-contaienr">
        <select className="select-options">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <CgProfile className="profile" />
      </div>
    </div>
  );
};

export default Header;
