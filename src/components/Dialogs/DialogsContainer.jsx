import { connect } from "react-redux";
import {
  selectUser,
  sendMessage,
  updateNewMessage,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const DialogsContainer = connect(mapStateToProps, { selectUser, sendMessage, updateNewMessage })(Dialogs);

export default DialogsContainer;
