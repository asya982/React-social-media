import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { userLogout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  render = () => <Header {...this.props} />;
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.id,
  login: state.auth.login,
  avatar: state.auth.photos.small,
});

export default connect(mapStateToProps, { userLogout })(HeaderContainer);
