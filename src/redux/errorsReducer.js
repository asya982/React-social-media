const SET_SERVER_ERROR = 'social-media/error/SET_SERVER_ERROR';
const CLEAR_SERVER_ERROR = 'social-media/error/CLEAR_SERVER_ERROR';


const initialState = {
    serverError: null
}

const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const serverError = (message) => ({ type: SET_SERVER_ERROR, message });
export const clearServerError = () => ({ type: CLEAR_SERVER_ERROR });

export default errorsReducer;