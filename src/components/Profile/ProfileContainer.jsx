import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((responce) => {
        this.props.setUserProfile(responce.data);
      });
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
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
  userInfo: state.profilePage.profile.userInfo,
});

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
