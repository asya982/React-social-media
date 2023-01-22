import React from "react";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let updateMessage = (e) => {
    let newMessage = e.target.value;
    props.updateNewMessage(newMessage);
  };

  let dialogElements = props.messagesPage.dialogsData.map((user) => (
    <Dialog
      name={user.name}
      id={user.id}
      img={user.img}
      key={user.id}
      location={props.router.params["*"]}
      selectUser={props.selectUser}
    />
  ));

  let messageElements = props.messagesPage.location
    ? props.messagesPage.messageData
        .filter(
          (messageArr, index) => index + 1 === +props.messagesPage.location,
        )[0]
        .map((messageData, index) => (
          <Message
            key={index}
            message={messageData.message}
            sentBy={messageData.sentBy}
          />
        ))
    : null;

  return (
    <div className={style.Dialogs}>
      <section className={style.dialog_items}>{dialogElements}</section>
      <section className={style.messages}>
        {messageElements}
        <div className={style.sendMessage}>
          <textarea
            onChange={updateMessage}
            onChangeTimerDelay
            value={props.messagesPage.newMessage}
          ></textarea>
          <button onClick={props.sendMessage}>Send</button>
        </div>
      </section>
    </div>
  );
};

export default Dialogs;
