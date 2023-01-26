import React, { useEffect, useState } from "react";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import MessageForm from "./MessageForm";

const Dialogs = (props) => {
  let [typing, setTyping] = useState(false);
  let [timerId, setTimerId] = useState(0);

  useEffect(() => {
    setTyping(false)
  }, [props.messagesPage.location]);

  let isTyping = () => {
    clearTimeout(timerId);

    setTyping(true);
    setTimerId(setTimeout(() => setTyping(false), 1000));
  };

  let dialogElements = props.messagesPage.dialogsData.map((user) => (
    <Dialog
      {...user}
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
        {typing && <span className={style.typing}>typing...</span>}
        <MessageForm
          sendMessage={props.sendMessage}
          location={props.messagesPage.location}
          isTyping={isTyping}
        />
      </section>
    </div>
  );
};

export default Dialogs;
