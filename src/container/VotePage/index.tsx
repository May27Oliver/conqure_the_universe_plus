import React from "react";
import HomepageHeader from "component/HomepageHeader";
import { useHistory } from "react-router";

const VotePage: React.FC = ({}) => {
  const history = useHistory();
  return (
    <div className="Homepage relative z-10">
      <HomepageHeader />
      <h1
        onClick={() => {
          history.push("./");
        }}
      >
        嗨你好4
      </h1>
    </div>
  );
};

export default VotePage;
