import { createSelector } from "reselect";

//reselect learning example 
const getUsersPlain = (state) => state.usersPage.users;

export const getUsersSelector = createSelector(getUsersPlain, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getFollowingInProgres = (state) => state.usersPage.followingInProgres;