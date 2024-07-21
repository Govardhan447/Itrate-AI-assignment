import { Component } from "react";
import "./index.css";

import { CgProfile } from "react-icons/cg";
import HeaderElements from "./HeaderElements";

const elements = [
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

class Header extends Component {
  state = { listItems: elements, activeElment: "" };

  updatelistItem = (id) => {
    const { listItems } = this.state;
    const activeItem = listItems.filter((item) => item.id === id);
    this.setState({ activeElment: activeItem[0].id });
  };

  render() {
    const { listItems, activeElment } = this.state;
    console.log(activeElment);
    return (
      <div className="nav-container">
        <div className="header-img-container">
          <img
            src="https://res.cloudinary.com/ds1piowcn/image/upload/v1721394087/Screenshot_2024-07-19_173417_m3m76y.png"
            alt="header logo"
          />
        </div>
        <ul className="header-elements-container">
          {listItems.map((item) => (
            <HeaderElements
              itemDetails={item}
              key={item.id}
              updatelistItem={this.updatelistItem}
              isActive={item.id === activeElment}
            />
          ))}
        </ul>
        <div className="language-contaienr">
          <select className="select-options">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <CgProfile className="profile" />
        </div>
      </div>
    );
  }
}
export default Header;
