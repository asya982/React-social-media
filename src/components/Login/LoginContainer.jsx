import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { userLogin, clearServerError } from "../../redux/authReducer";

class LoginContainer extends React.Component {
  render = () => <Login {...this.props} />;
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.id,
  serverError: state.auth.serverError
});

export default connect(mapStateToProps, { userLogin, clearServerError })(LoginContainer);
