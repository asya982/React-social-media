import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import style from './Dialogs.module.css';

const MessageForm = (props) => {
    let { register, handleSubmit, reset } = useForm();
  
    useEffect(() => {
      reset();
    }, [props.location, reset]);
  
    let sendMessage = ({ messageText }) => {
      if (messageText.trim()) {
        props.sendMessage(messageText);
        reset();
      }
    };
    return (
      <form onSubmit={handleSubmit(sendMessage)} className={style.sendMessage}>
        <textarea
          {...register("messageText", {
            onChange: props.isTyping,
          })}
        ></textarea>
        <button>Send</button>
      </form>
    );
  };

  export default MessageForm;