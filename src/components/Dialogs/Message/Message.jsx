import React from "react";
import style from "./Message.module.css";

const Message = (props) => {
  return (
    <>
      <div className={style.message} data-sentby={props.sentBy}>
        <p>{props.sentBy}</p>
        {props.message}
      </div>
    </>
  );
};

export default Message;
