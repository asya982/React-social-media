import React from "react";
import { connect } from "react-redux";
import { getUsers, changeFollowingState } from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "../Loader/Loader";

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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgres: state.usersPage.followingInProgres,
  };
};

export default connect(mapStateToProps, { getUsers, changeFollowingState })(
  UsersContainer,
);
