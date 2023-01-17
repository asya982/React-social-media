const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    profile: {
        postData: [
            { id: 1, message: "Hello", likes: 200 },
            { id: 2, message: "I`m learning", likes: 300 },
            { id: 3, message: "React", likes: 250 },
            { id: 4, message: "Dimkins loves ketchub", likes: 250 },
        ],
        // userInfo: {
        //     fullName: "Asya",
        //     aboutMe: "За допомогою дверей можна проходити крізь стіни",
        //     contacts: {
        //         'facebook': 'https://social-network.samuraijs.com/docs#',
        //         'instagram': 'https://social-network.samuraijs.com/docs#',
        //         'twitter': 'https://social-network.samuraijs.com/docs#',
        //         'github': 'https://social-network.samuraijs.com/docs#'
        //     },
        //     lookingForAJob: true,
        //     lookingForAJobDescription: "Junior Front-end developer",
        //     userId: 2,
        //     photos: {
        //         small: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg",
        //         large: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"
        //     }
        // },
    },
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postData[state.postData.length - 1].id + 1,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {
                    userInfo: action.profile,
                    postData: [ ...state.profile.postData ]
                }

            };
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;