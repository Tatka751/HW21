import styles from "./PostStyle.module.css";
import { useState } from "react";

export function Post(props) {
  let [count, setCount] = useState(0);
  const data = props;
  return (
    <>
      <div className={styles["article"]}>
        <img src={data.props.photo} className="" alt="" />
        <br />
        <div>
          <span>
            <b>{data.props.name}</b> {data.props.nickname} {data.props.date}
          </span>
          <br />
          <span>
            <bold>{data.props.content}</bold>
          </span>
        </div>
        <img id="photo" src={data.props.avatar} className="" alt="" />
        <br />
      </div>
    </>
  );
}
