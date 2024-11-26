import React from "react";
import DropDown from "../DropDown/DropDown";
import "./Graph.css";
import DropDownInfo from "../DropDownLogin/DropDownInfo";


  
const Graph = () => {
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
    <div className="Graph">
      <div className="Graph__head">
        <div className="Graph__head__stat">
          <div className="Graph__head__stat__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <g clip-path="url(#clip0_616_326)">
                <path
                  d="M7.20715 9.59847C7.20715 6.7856 7.20715 3.97274 7.20715 1.15987C7.20715 0.63546 7.34456 0.499525 7.87294 0.498901C9.0415 0.498901 10.2094 0.498901 11.378 0.498901C11.8283 0.498901 11.9869 0.654791 11.9869 1.10001C11.9869 6.7644 11.9869 12.4288 11.9869 18.0938C11.9869 18.5403 11.8302 18.6943 11.3792 18.6949C10.2032 18.6949 9.02713 18.6949 7.85108 18.6949C7.3533 18.6949 7.20715 18.5515 7.20715 18.0601C7.20715 15.2398 7.20715 12.4188 7.20715 9.59847Z"
                  fill="#9E1C2F"
                />
                <path
                  d="M5.2916 12.9537C5.2916 14.6529 5.2916 16.3521 5.2916 18.0507C5.2916 18.5408 5.13795 18.6948 4.65017 18.6948C3.466 18.6948 2.28182 18.6948 1.09765 18.6948C0.671701 18.6948 0.500571 18.5289 0.500571 18.1018C0.499322 14.6647 0.499322 11.2277 0.500571 7.79065C0.500571 7.37287 0.67982 7.20139 1.10515 7.20076C2.29744 7.19952 3.48911 7.19952 4.6814 7.20076C5.11672 7.20076 5.29097 7.37598 5.2916 7.80936C5.29222 9.52414 5.2916 11.2389 5.2916 12.9531V12.9537Z"
                  fill="#9E1C2F"
                />
                <path
                  d="M13.9031 14.8511C13.9031 13.7842 13.9031 12.7173 13.9031 11.6498C13.9031 11.2008 14.0736 11.0331 14.527 11.0325C15.7106 11.0318 16.8941 11.0318 18.0777 11.0325C18.5273 11.0325 18.6947 11.1996 18.6947 11.656C18.696 13.7979 18.696 15.9398 18.6947 18.0818C18.6947 18.5363 18.5305 18.6953 18.0714 18.6953C16.8804 18.6953 15.6887 18.696 14.4977 18.6953C14.073 18.6953 13.9037 18.5264 13.9037 18.0992C13.9025 17.0167 13.9037 15.9342 13.9037 14.8511H13.9031Z"
                  fill="#9E1C2F"
                />
              </g>
              <defs>
                <clipPath id="clip0_616_326">
                  <rect
                    width="18.196"
                    height="18.196"
                    fill="white"
                    transform="translate(0.49939 0.49939)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="Graph__head__stat__title">Статистика</div>
        </div>
        <div className="Graph__head__buttons">
          <div className="Graph__head__date">
            <div className="Graph__head__date__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M7.00458 2.25757V4.79966M13.7835 2.25757V4.79966M3.19144 8.26537H17.5966M13.5248 12.1717H13.5324M13.5248 14.7138H13.5324M10.3902 12.1717H10.3978M10.3902 14.7138H10.3978M7.25397 12.1717H7.26158M7.25397 14.7138H7.26158M18.0203 7.76543V14.968C18.0203 17.5101 16.7493 19.2048 13.7835 19.2048H7.00458C4.03881 19.2048 2.76776 17.5101 2.76776 14.968V7.76543C2.76776 5.22334 4.03881 3.52861 7.00458 3.52861H13.7835C16.7493 3.52861 18.0203 5.22334 18.0203 7.76543Z"
                  stroke="#656565"
                  stroke-width="1.27105"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="Graph__head__date__title">Выберите дату</div>
            <DropDown 
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
          <div className="Graph__head__time">
            <div className="Graph__head__time__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M3.33711 7.39328H4.67506C6.013 7.39328 6.68197 6.7243 6.68197 5.38636V4.04842C6.68197 2.71048 6.013 2.0415 4.67506 2.0415H3.33711C1.99917 2.0415 1.3302 2.71048 1.3302 4.04842V5.38636C1.3302 6.7243 1.99917 7.39328 3.33711 7.39328Z"
                  stroke="#656565"
                  stroke-width="1.27372"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3648 7.39328H12.7027C14.0407 7.39328 14.7096 6.7243 14.7096 5.38636V4.04842C14.7096 2.71048 14.0407 2.0415 12.7027 2.0415H11.3648C10.0268 2.0415 9.35786 2.71048 9.35786 4.04842V5.38636C9.35786 6.7243 10.0268 7.39328 11.3648 7.39328Z"
                  stroke="#656565"
                  stroke-width="1.27372"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3648 15.4209H12.7027C14.0407 15.4209 14.7096 14.752 14.7096 13.414V12.0761C14.7096 10.7381 14.0407 10.0692 12.7027 10.0692H11.3648C10.0268 10.0692 9.35786 10.7381 9.35786 12.0761V13.414C9.35786 14.752 10.0268 15.4209 11.3648 15.4209Z"
                  stroke="#656565"
                  stroke-width="1.27372"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33711 15.4209H4.67506C6.013 15.4209 6.68197 14.752 6.68197 13.414V12.0761C6.68197 10.7381 6.013 10.0692 4.67506 10.0692H3.33711C1.99917 10.0692 1.3302 10.7381 1.3302 12.0761V13.414C1.3302 14.752 1.99917 15.4209 3.33711 15.4209Z"
                  stroke="#656565"
                  stroke-width="1.27372"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="Graph__head__time__title">Растояние</div>
            <DropDown 
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
        </div>
      </div>
    </div>
  );
};
export default Graph;
