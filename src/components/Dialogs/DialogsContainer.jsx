import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";
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

export default compose(
  withRouter,
  connect(mapStateToProps, { selectUser, sendMessage, updateNewMessage }),
  withAuthRedirect
)(Dialogs);
