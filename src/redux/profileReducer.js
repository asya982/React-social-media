const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        { id: 1, message: "Hello", likes: 200 },
        { id: 2, message: "I`m learning", likes: 300 },
        { id: 3, message: "React", likes: 250 },
        { id: 4, message: "Dimkins loves ketchub", likes: 250 },
    ],
    userInfo: {
        userName: "Asya",
        description: "За допомогою дверей можна проходити крізь стіни",
        age: 20,
        avatar: "https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"

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
                postData: [ ...state.postData, newPost ],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return { 
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText });

export default profileReducer;