import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { userLogin } from "../../redux/authReducer";
import { clearServerError } from "../../redux/errorsReducer";

class LoginContainer extends React.Component {
  render = () => <Login {...this.props} />;
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.id,
  serverError: state.errors.serverError
});

export default connect(mapStateToProps, { userLogin, clearServerError })(LoginContainer);
