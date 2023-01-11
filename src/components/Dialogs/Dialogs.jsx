import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let currentLocation = useLocation();
  let location = currentLocation.pathname.slice(-1);

  let updateMessage = (e) => {
    let newMessage = e.target.value;
    props.updateMessage(newMessage);
  };

  let dialogElements = props.messagesPage.dialogsData.map((user) => (
    <Dialog name={user.name} id={user.id} img={user.img} key={user.id} location={location} selectUser={props.selectUser}/>
  ));

  let messageElements = props.messagesPage.messageData.map((message, index) => (
    <Route key={index}
      path={"/" + (index + 1)}
      element={message.map((messageData) => (
        <Message key={message.id}  message={messageData.message} sentBy={messageData.sentBy} />
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
              value={ props.messagesPage.newMessage}
            ></textarea>
            <button onClick={ props.sendMessage } >Send</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dialogs;
