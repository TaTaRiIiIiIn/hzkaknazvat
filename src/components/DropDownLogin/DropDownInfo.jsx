import React from "react";
import "./DropDownInfo.css";

const DropDownInfo = () => {
  return (
    <div className="container">
      <span className="Email">mels_erkinbek@gmail.com</span>
      <div className="ToggleTheme">
        <div className="ToggleTheme__icon">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 22.5H20C24.1421 22.5 27.5 19.1421 27.5 15C27.5 10.8579 24.1421 7.5 20 7.5H10C5.85786 7.5 2.5 10.8579 2.5 15C2.5 19.1421 5.85786 22.5 10 22.5Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 11.25C7.92893 11.25 6.25 12.9289 6.25 15C6.25 17.0711 7.92893 18.75 10 18.75C12.0711 18.75 13.75 17.0711 13.75 15C13.75 12.9289 12.0711 11.25 10 11.25Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span className="ToggleTheme__text">Темная тема</span>
      </div>
      <div className="LogOut">
        <div className="LogOut__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M7.4 6.07C7.71 2.47 9.56 1 13.61 1H13.74C18.21 1 20 2.79 20 7.26V13.78C20 18.25 18.21 20.04 13.74 20.04H13.61C9.59 20.04 7.74 18.59 7.41 15.05M13.5 10.51H2.12M4.35 7.16L1 10.51L4.35 13.86"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span className="LogOut__text">Выйти</span>
      </div>
    </div>
  );
};

export default DropDownInfo;
