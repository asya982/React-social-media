import { authentication } from "./authReducer";

const INITIALIZE_SUCCESS = 'social-media/app/INITIALIZE_SUCCESS';


const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializeSuccess = () => ({ type: INITIALIZE_SUCCESS });

export const initalizeApp = () => async (dispatch) => {
    await dispatch(authentication());
    dispatch(initializeSuccess());
};



export default appReducer;