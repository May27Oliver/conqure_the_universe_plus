import React from "react";
import { useHistory } from "react-router";

const Header: React.FC = (props) => {
  const history = useHistory();
  return (
    <header className="fixed flex flex-row items-center justify-between w-full h-28 bg-purple-900 opacity-80 z-50">
      <div
        className="w-52 h-16 bg-homepage-logo bg-contain bg-no-repeat bg-center cursor-pointer"
        onClick={() => history.push("./")}
      >
        <h1 className="hidden">征服宇宙</h1>
      </div>
      <div className="flex flex-row items-center self-center">
        <div
          className="text-white m-5 text-xl cursor-pointer"
          onClick={() => history.push("./NewsPage")}
        >
          宇宙星聞
        </div>
        <div
          className="text-white m-5 text-xl cursor-pointer"
          onClick={() => history.push("./VideoPage")}
        >
          公民學堂
        </div>
        <div
          className="text-white m-5 text-xl cursor-pointer"
          onClick={() => history.push("./VotePage")}
        >
          公民投票
        </div>
        <div
          className="text-white m-5 text-xl cursor-pointer"
          onClick={() => history.push("./ShoppingPage")}
        >
          宇宙商城
        </div>
        <div
          className="text-white m-5 text-xl cursor-pointer"
          onClick={() => history.push("./MemberPage")}
        >
          公民的家
        </div>
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
