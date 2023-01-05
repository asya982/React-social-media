import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/state";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let currentLocation = useLocation();

  let updateMessage = (e) => {
    let location = currentLocation.pathname.slice(-1);
    let newMessage = e.target.value;
    props.dispatch(updateNewMessageCreator(newMessage, location));
  };

  let sendMessage = () => {
    props.dispatch(sendMessageCreator())
  }

  let dialogElements = props.state.dialogsData.map((user) => (
    <Dialog name={user.name} id={user.id} img={user.img} />
  ));

  let messageElements = props.state.messageData.map((message, index) => (
    <Route
      path={"/" + (index + 1)}
      element={message.map((messageData) => (
        <Message message={messageData.message} sentBy={messageData.sentBy} />
      ))}
    />
  ));


  return (
    <>
      <div className={ style.Dialogs }>
        <section className={ style.dialog_items }>{ dialogElements }</section>
        <section className={ style.messages }>
          <Routes>{ messageElements }</Routes>
          <div className={ style.sendMessage }>
            <textarea
              onChange={ updateMessage }
              value={ props.state.newMessage.value }
            ></textarea>
            <button onClick={ sendMessage } >Send</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dialogs;
