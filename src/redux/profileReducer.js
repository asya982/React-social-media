import { profileAPI } from "../API/api";
import { serverError } from "./errorsReducer";

const ADD_POST = "social-media/profile/ADD_POST";
const SET_USER_PROFILE = "social-media/profile/SET_USER_PROFILE";
const SET_STATUS = "social-media/profile/SET_STATUS";
const DELETE_POST = "social-media/profile/DELETE_POST";
const SET_PHOTOS = "social-media/profile/SET_PHOTOS";

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
        case DELETE_POST:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    postData: state.profile.postData.filter((p) => p.id !== action.postId)
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
        case SET_PHOTOS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    userInfo: {
                        ...state.profile.userInfo,
                        photos: action.image
                    }
                }

            };

        default:
            return state;
    }

};

export const addPostActionCreator = (newText) => ({ type: ADD_POST, newText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setStatus = (status) => ({ type: SET_STATUS, status });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const savePhotoSucces = (image) => ({ type: SET_PHOTOS, image });

export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};


export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const savePhoto = (photo) => async (dispatch) => {
    const data = await profileAPI.setPhoto(photo);
    if (data.resultCode === 0) {
        dispatch(savePhotoSucces(data.data.photos));
    }
};

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const saveProfile = (profileData) => async (dispatch, getState) => {
    const currentUser = getState().auth.id;
    const data = await profileAPI.updateProfileInfo(profileData);
    if (data.resultCode === 0) {
        dispatch(getProfile(currentUser));
    } else {
        // need to add server-error side validation;
        dispatch(serverError(data.messages));
        return Promise.reject(data.messages[0]);
    }
};

export default profileReducer;