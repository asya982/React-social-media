import React from "react";
import { connect } from "react-redux";
import { getUsers, changeFollowingState } from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "../common/Loader/Loader";
import {
  getCurrentPage,
  getFollowingInProgres,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from "../../redux/selectors/usersSelector";

class UsersContainer extends React.Component {
  componentDidMount = () => {
    const { currentPage, pageSize } = this.props;
    if (!this.props.friendsOnly) {
      this.props.getUsers(currentPage, pageSize, false);
    } else {
     
      this.props.getUsers(currentPage, pageSize, true);
    }
  };

  getUsers = (page) => {
    if (this.props.friendsOnly) {
      this.props.getUsers(page, this.props.pageSize, true);
    } else {
      this.props.getUsers(page, this.props.pageSize, false);
    }
  }


  render = () => {
    return (
      <>{this.props.isFetching ? <Loader /> : <Users {...this.props} getUsers={this.getUsers} />}</>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgres: getFollowingInProgres(state),
  };
};

export default connect(mapStateToProps, { getUsers, changeFollowingState })(
  UsersContainer,
);
