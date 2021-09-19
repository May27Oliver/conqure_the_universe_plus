import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.css";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);

const Part2: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <h1
        className={cx("hello")}
        onClick={() => {
          history.push("./part3");
        }}
      >
        嗨你好2
      </h1>
    </div>
  );
};

export default Part2;
