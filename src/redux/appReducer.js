import { authentication } from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';


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

export const initalizeApp = () => (dispatch) => {
    dispatch(authentication()).then(() => {
        dispatch(initializeSuccess());
    });

};



export default appReducer;