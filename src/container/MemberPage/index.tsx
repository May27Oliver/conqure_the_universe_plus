import React from "react";
import HomepageHeader from "component/HomepageHeader";
import { useHistory } from "react-router";

const MemberPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="MemberPage relative z-10">
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

export default MemberPage;
