import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  changeFollowState,
  setCurrentPage,
  setTotalUsers,
  setUsers,
  toggleIsFetching,
} from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "../Loader/Loader";

class UsersContainer extends React.Component {
  componentDidMount = () => {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((responce) => {
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsers(responce.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((responce) => {
        this.props.setUsers(responce.data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render = () => {
    return (
      <>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            changeFollowState={this.props.changeFollowState}
          />
        )}
      </>
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
  };
};

export default connect(mapStateToProps, {
  changeFollowState,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  toggleIsFetching
})(UsersContainer);
