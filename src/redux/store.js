import messagesReducer from "./messagesReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";

const store = {
    _state: {
        profilePage: {
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
                avatar:"https://i.pinimg.com/564x/64/3a/e9/643ae95c09984ea6064d92305b5fe4b1.jpg"

            },
            newPostText: ""
        },
        messagesPage: {
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
            newMessage: { value: "", route: 0 }
        },
        navbar: {
            friends: [
                { id: 1, name: "Dimkins", img: "https://i.pinimg.com/564x/e9/7a/03/e97a03628dde5de1f81c32ac2b4dac50.jpg" },
                { id: 2, name: "Alinka", img: "https://i.pinimg.com/736x/37/66/fb/3766fb3469f305cacee6a09330a68427.jpg" },
                { id: 3, name: "Specter", img: "https://i.pinimg.com/564x/5a/3d/77/5a3d770ea0afe88aa310ac95e92e5afd.jpg" },
                {id:4, name: "Kostik", img: "https://i.pinimg.com/564x/a7/24/71/a72471dd545f027432c22c77b8a2d805.jpg"}
            ]
        }
    },
    _callSubscriber() {
        console.log("State is changed");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) { // { type: 'ADD-POST' }
       this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSubscriber(this._state);
    }
}

export default store;