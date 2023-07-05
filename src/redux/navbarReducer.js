import { usersAPI } from "../API/api";

const GET_FRIENDS = "social_media/navbar/GET_FRIENDS";

let initialState = {
    friends: [
        { id: 1, name: "Dimkins", photos: { small: "https://i.pinimg.com/564x/e9/7a/03/e97a03628dde5de1f81c32ac2b4dac50.jpg", large: null } },
        { id: 2, name: "Alinka", photos: { small: "https://i.pinimg.com/736x/37/66/fb/3766fb3469f305cacee6a09330a68427.jpg", large: null } },
        { id: 3, name: "Specter", photos: { small: "https://i.pinimg.com/564x/5a/3d/77/5a3d770ea0afe88aa310ac95e92e5afd.jpg", large: null } },
        { id: 4, name: "Kostik", photos: { small: "https://i.pinimg.com/564x/a7/24/71/a72471dd545f027432c22c77b8a2d805.jpg", large: null } }
    ]
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