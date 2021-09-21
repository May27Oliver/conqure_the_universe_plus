import React from "react";
import { useHistory } from "react-router";
import HomepageHeader from "component/HomepageHeader";

const ShoppingPage: React.FC = () => {
  const history = useHistory();
  return (
    <div className="ShoppingPage relative z-10">
      <HomepageHeader />
      <h1
        onClick={() => {
          history.push("./part4");
        }}
      >
        嗨你好3
      </h1>
    </div>
  );
};

export default ShoppingPage;
