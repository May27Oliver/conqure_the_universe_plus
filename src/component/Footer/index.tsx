import React from "react";
import homeFooter from "image/home_img/homeFooter.png";

const Footer: React.FC = (props) => {
  return (
    <footer className="w-screen relative bg-no-repeat bg-cover bottom-9 top-0">
      {/* <img className="absolute bottom-1 z-50" src={homeFooter} alt="" /> */}
      <div className="bg-home-footer absolute w-full h-72 bottom-1 z-50 bg-cover"></div>
    </footer>
  );
};

export default Footer;
