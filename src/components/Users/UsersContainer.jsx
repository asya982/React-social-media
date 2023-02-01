import React from "react";
import { connect } from "react-redux";
import { getUsers, changeFollowingState } from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "../Loader/Loader";
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
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  render = () => {
    return (
      <>{this.props.isFetching ? <Loader /> : <Users {...this.props} />}</>
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
