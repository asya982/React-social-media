import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authentication } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount = () => {
    this.props.authentication();
  };

  render = () => <Header {...this.props} />;
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  avatar: state.auth.photos.small,
});

export default connect(mapStateToProps, { authentication })(HeaderContainer);
