import React from "react";
import HomepageHeader from "component/HomepageHeader";
import { useHistory } from "react-router";

const NewsPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="NewsPage relative z-10">
      <HomepageHeader />
      <h1
        onClick={() => {
          history.push("./part3");
        }}
      >
        嗨你好2
      </h1>
    </div>
  );
};

export default NewsPage;
