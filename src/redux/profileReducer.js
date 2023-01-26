import { profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    profile: {
        postData: [
            { id: 1, message: "Hello", likes: 200 },
            { id: 2, message: "I`m learning", likes: 300 },
            { id: 3, message: "React", likes: 250 },
            { id: 4, message: "Dimkins loves ketchub", likes: 250 },
        ],
        userInfo: {
            fullName: "Asya",
            aboutMe: "За допомогою дверей можна проходити крізь стіни",
            contacts: {
                'facebook': 'https://social-network.samuraijs.com/docs#',
                'instagram': 'https://social-network.samuraijs.com/docs#',
                'twitter': 'https://social-network.samuraijs.com/docs#',
                'github': 'https://social-network.samuraijs.com/docs#'
            },
            lookingForAJob: true,
            lookingForAJobDescription: "Junior Front-end developer",
            userId: 2,
            photos: {
                small: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg",
                large: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"
            }
        },
    },
      status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.profile.postData[state.profile.postData.length - 1].id + 1,
                message: action.newText,
                likes: 0
            };
            return {
                ...state,
                profile: {
                    ...state.profile,
                    postData: [...state.profile.postData, newPost]
                },
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    userInfo: action.profile
                }

            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status

            };
        default:
            return state;
    }

};

export const addPostActionCreator = (newText) => ({ type: ADD_POST, newText });
export const setStatus = (status) => ({ type: SET_STATUS, status });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
};


export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    })
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
};


export default profileReducer;