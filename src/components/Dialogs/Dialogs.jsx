import React from "react";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dimkins" },
    { id: 2, name: "Alinka" },
    { id: 3, name: "Specter" },
    { id: 4, name: "HR" },
  ];

  let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are u?..." },
    { id: 3, message: "Let`s watch Papurika" },
    { id: 4, message: "Ok, let's go!!" },
    { id: 5, message: "Lov u my prescious boy" },
  ];

  let dialogElements = dialogsData.map((user) => <Dialog name={user.name} id={user.id} />);
  let messageElements = messageData.map((message) => <Message message={message.message} />);

  return (
    <>
      <h2>Dialogs</h2>
      <div className={style.Dialogs}>
        <section className={style.dialog_items}>
          {dialogElements}
        </section>
        <section className={style.messages}>
          {messageElements}
        </section>
      </div>
    </>
  );
};

export default Dialogs;
