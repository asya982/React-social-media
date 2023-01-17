const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
const SELECT_USER = "SELECT_USER";

let initialState = {
    dialogsData: [
        { id: 1, name: "Dimkins", img: "https://i.pinimg.com/564x/e9/7a/03/e97a03628dde5de1f81c32ac2b4dac50.jpg" },
        { id: 2, name: "Alinka", img: "https://i.pinimg.com/736x/37/66/fb/3766fb3469f305cacee6a09330a68427.jpg" },
        { id: 3, name: "Specter", img: "https://i.pinimg.com/564x/5a/3d/77/5a3d770ea0afe88aa310ac95e92e5afd.jpg" },
        { id: 4, name: "HR", img: "https://i.pinimg.com/564x/a7/24/71/a72471dd545f027432c22c77b8a2d805.jpg" },
    ],

    messageData: [
        [{ id: 1, message: "Hi", sentBy: "Dimkins" },
        { id: 2, message: "How are u?...", sentBy: "Asya" },
        { id: 3, message: "Let`s watch Papurika", sentBy: "Dimkins" },
        { id: 4, message: "Ok, let's go!!", sentBy: "Asya" },
        { id: 5, message: "Lov u my prescious boy", sentBy: "Asya" }],
        [{ id: 1, message: "How are you these days?", sentBy: "Alinka" },
        { id: 2, message: "I'm fine", sentBy: "Asya" },
        { id: 3, message: "What plans 4 today?", sentBy: "Alinka" },
        { id: 4, message: "Going out with my bestie!", sentBy: "Asya" },
        ],
        [{ id: 1, message: "Did u watch yesterday's stream?", sentBy: "Specter" },
        { id: 2, message: "Yeah, it was totall nuts!", sentBy: "Asya" },
        { id: 3, message: "Today will be another one", sentBy: "Specter" },
        { id: 4, message: "Ok, let's go!!", sentBy: "Asya" },
        ],
        [{ id: 1, message: "We want to hire you", sentBy: "HR" },
        { id: 2, message: "Are you serious???", sentBy: "Asya" },
        { id: 3, message: "Yes, come for interview tommorrow at 8 a.m", sentBy: "HR" },
        { id: 4, message: "I'll be there!", sentBy: "Asya" },
        ],

    ],
    newMessage: "",
    location: 0
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessage: action.newMessage
            };
        case SEND_MESSAGE:
            if (state.newMessage.trim() === "") {
                return state;
            }
            let newMessage = {
                id: state.messageData[state.location - 1]?.length + 1,
                message: state.newMessage,
                sentBy: "Asya"
            };
            return {
                ...state,
                messageData: state.messageData.map((message, index) => {
                    if (index === state.location - 1) {
                        return [...message, newMessage];
                    }
                    return message;
                }),
                newMessage: ""

            };
        case SELECT_USER:
            return {
                ...state,
                location: action.location,
                newMessage: ""
            };
        default:
            return state
    }
};

export const updateNewMessage = (newMessage) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage });
export const sendMessage = () => ({ type: SEND_MESSAGE });
export const selectUser = (location) => ({ type: SELECT_USER, location });

export default messagesReducer;
