import React from "react";
import HomepageHeader from "component/HomepageHeader";
import { useHistory } from "react-router";

const VideoPage: React.FC = () => {
  const history = useHistory();
  return (
    <div className="Homepage relative z-10">
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

export default VideoPage;
