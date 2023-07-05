import { authAPI } from "../API/api";
import { serverError } from "./errorsReducer";
import { getProfile } from "./profileReducer";

const SET_USER_DATA = 'social-media/auth/SET_USER_DATA';


const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    photos: {
        small: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg",
        large: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth, photos) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth, photos } });


export const authentication = () => async (dispatch, getState) => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        await dispatch(getProfile(id));
        let photo = getState().profilePage.profile.userInfo.photos;
        dispatch(setAuthUserData(id, email, login, true, photo));
    }
};

export const userLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(authentication());
    } else {
        dispatch(serverError(response.data.messages[0]));
    }
};

export const userLogout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;