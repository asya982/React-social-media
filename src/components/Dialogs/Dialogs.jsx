import React from "react";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let updateMessage = () => {
    let newMessage = newMessageElement.current.value;
    props.updateMessage(newMessage);
  }
  
  let dialogElements = props.state.dialogsData.map((user) => (
    <Dialog name={user.name} id={user.id} img={user.img} />
  ));

  let messageElements = props.state.messageData.map((message) => (
    <Message message={message.message} sentBy={message.sentBy} />
  ));

  return (
    <>
      <div className={style.Dialogs}>
        <section className={style.dialog_items}>{dialogElements}</section>
        <section className={style.messages}>
          {messageElements}
          <div className={style.sendMessage}>
            <textarea ref={newMessageElement} onChange={updateMessage} value={props.state.newMessage}></textarea>
            <button onClick={props.addMessage}>Send</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dialogs;
