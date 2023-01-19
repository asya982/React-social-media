import { followAPI, usersAPI } from "../API/api";

const CHANGE_FOLLOW_STATE = 'CHANGE_FOLLOW_STATE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_BUTTON = 'TOGGLE_FOLLOWING_BUTTON';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgres: [27546]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: action.isFollowed }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_BUTTON:
            return {
                ...state,
                followingInProgres: action.followingInProgres
                    ? [...state.followingInProgres, action.id]
                    : state.followingInProgres.filter(id => id !== action.id)
            }
        default:
            return state;
    }
};

export const followStateAC = (userId, isFollowed) => ({ type: CHANGE_FOLLOW_STATE, userId, isFollowed });
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsers = (count) => ({ type: SET_TOTAL_USERS, count })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingButton = (followingInProgres, id) => ({ type: TOGGLE_FOLLOWING_BUTTON, followingInProgres, id })

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {

        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(toggleIsFetching(false));

    });

};

export const changeFollowingState = (userId, follow) => (dispatch) => {

    dispatch(toggleFollowingButton(true, userId));
    
    let requestApi = follow ? followAPI.follow(userId) : followAPI.unfollow(userId);
    requestApi.then((data) => {
        if (data.resultCode === 0) {
            dispatch(followStateAC(userId, follow));
        }
        dispatch(toggleFollowingButton(false, userId));
    });

};


export default usersReducer;

