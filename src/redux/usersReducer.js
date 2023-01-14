const CHANGE_FOLLOW_STATE = 'CHANGE_FOLLOW_STATE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false 
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATE: 
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed}
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
        default:
            return state;
    }
};

export const changeFollowStateAC = (userId) => ({ type: CHANGE_FOLLOW_STATE, userId: userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users: users })
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersAC = (count) => ({ type: SET_TOTAL_USERS, count })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;

