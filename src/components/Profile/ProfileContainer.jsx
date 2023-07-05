import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
} from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";
import { getFollowingInProgres } from "../../redux/selectors/usersSelector";
import { changeFollowingState } from "../../redux/usersReducer";

class ProfileContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.router.params.userId || this.props.currentUser;
    this.props.getProfile(userId);
    this.props.getStatus(userId);

  };

  componentDidUpdate(previousProps) {
    if (
      previousProps.router.params.userId !== this.props.router.params.userId
    ) {
      this.refreshProfile();
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }

  render = () => {
    return (
      <Profile
        {...this.props}
        isOwner={
          !this.props.router.params.userId ||
          this.props.router.params.userId == this.props.currentUser
        }
      />
    );
  };
}

const mapStateToProps = (state) => ({
  userInfo: state.profilePage.profile.userInfo,
  status: state.profilePage.status,
  currentUser: state.auth.id,
  followingInProgres: getFollowingInProgres(state),
  serverError: state.errors.serverError
});

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    changeFollowingState,
    savePhoto,
    saveProfile
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
