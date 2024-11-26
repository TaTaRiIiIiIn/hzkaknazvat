import React from "react";
import DropDownInfo from "./DropDownInfo";
import Dropdown from "../DropDown/DropDown";
import "./DropDownLogin.css";

function DropDownLogin() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    console.log("Toggling open state:", !open);
    setOpen(!open);
  };

  const handleMenu = () => {
    setOpen(false);
    console.log("Menu item clicked");
  };

  return (
    <div className={`DropDownLogin ${open ? 'open' : 'close'}`}>
      <div className="Profile__info">
        <div className="Profile__icon"></div>
        <div className="Profile__name">
          <div className="Profile__name__name">Мэлс Эркинбек</div>
          <div className="Profile__name__role">Босс</div>
        </div>
      </div>
      <Dropdown
        open={open}
        trigger={
          <button onClick={handleOpen}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.77234 10L12.7732 14.58L17.7723 10"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        }
        menu={[
          <div onClick={handleMenu}>
            <DropDownInfo />
          </div>,
        ]}
      />
    </div>
  );
}

export default DropDownLogin;
