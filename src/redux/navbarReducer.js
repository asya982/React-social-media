import { usersAPI } from "../API/api";

const GET_FRIENDS = "social_media/navbar/GET_FRIENDS";

let initialState = {
    friends: []
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            }
        default:
            return state;
    }
};

export default navbarReducer;

const setFriends = (friends) => ({ type: GET_FRIENDS, friends });

export const getFriends = () => async (dispatch) => {
    let data = await usersAPI.getFriends(1, 3);
    dispatch(setFriends(data.items));
}