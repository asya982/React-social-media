import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getProfile(userId);
  }

  render = () => {
    return <Profile {...this.props} />;
  };
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
  userInfo: state.profilePage.profile.userInfo,
});

export default connect(mapStateToProps, { getProfile })(
  withRouter(ProfileContainer),
);
