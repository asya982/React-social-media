import { authAPI } from "../API/api";

const SET_USER_DATA = 'social-media/auth/SET_USER_DATA';
const SET_SERVER_ERROR = 'social-media/auth/SET_SERVER_ERROR';
const CLEAR_SERVER_ERROR = 'social-media/auth/CLEAR_SERVER_ERROR';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    photos: {
        small: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg",
        large: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"
    },
    serverError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_SERVER_ERROR:
            return {
                ...state,
                serverError: action.message
            };
        case CLEAR_SERVER_ERROR:
            return {
                ...state,
                serverError: null
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
export const serverError = (message) => ({ type: SET_SERVER_ERROR, message });
export const clearServerError = () => ({ type: CLEAR_SERVER_ERROR });

export const authentication = () => async (dispatch) => {
    let data = await authAPI.authMe();

    if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
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