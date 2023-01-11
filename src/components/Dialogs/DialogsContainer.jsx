import { connect } from "react-redux";
import {
  selectUserAC,
  sendMessageCreator,
  updateNewMessageCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => {
      dispatch(updateNewMessageCreator(text));
    },
    selectUser: (location) => {
      dispatch(selectUserAC(location));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
