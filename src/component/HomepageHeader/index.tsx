import React from "react";

const Header: React.FC = (props) => {
  return (
    <header className="fixed flex flex-row items-center justify-between w-full h-28 bg-purple-900 opacity-80 z-50">
      <div className="w-52 h-16 bg-homepage-logo bg-contain bg-no-repeat bg-center cursor-pointer">
        <h1 className="hidden">征服宇宙</h1>
      </div>
      <div className="flex flex-row items-center self-center">
        <div className="text-white m-5 text-xl cursor-pointer">宇宙星聞</div>
        <div className="text-white m-5 text-xl cursor-pointer">公民學堂</div>
        <div className="text-white m-5 text-xl cursor-pointer">公民投票</div>
        <div className="text-white m-5 text-xl cursor-pointer">宇宙商城</div>
        <div className="text-white m-5 text-xl cursor-pointer">公民的家</div>
      </div>
      <div className="flex flex-row m-8">
        <div className="text-white m-3 cursor-pointer">登入</div>
        <div className="text-white m-3">{" / "} </div>
        <div className="text-white m-3 cursor-pointer">註冊</div>
      </div>
    </header>
  );
};

export default Header;
