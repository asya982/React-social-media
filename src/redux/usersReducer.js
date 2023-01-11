const CHANGE_FOLLOW_STATE = 'CHANGE_FOLLOW_STATE';
const SET_USERS = 'SET_USERS';



let initialState = {
    users: []
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
                users: [ ...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const changeFollowStateAC = (userId) => ({ type: CHANGE_FOLLOW_STATE, userId: userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users: users })

export default usersReducer;

