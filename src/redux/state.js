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
                { id: 1, message: "Hi", sentBy: "Dimkins" },
                { id: 2, message: "How are u?...", sentBy: "Asya" },
                { id: 3, message: "Let`s watch Papurika", sentBy: "Dimkins" },
                { id: 4, message: "Ok, let's go!!", sentBy: "Asya" },
                { id: 5, message: "Lov u my prescious boy", sentBy: "Asya" },
            ],
            newMessage: ""
        },
        navbar: {
            friends: [
                { id: 1, name: "Dimkins", img: "https://i.pinimg.com/564x/e9/7a/03/e97a03628dde5de1f81c32ac2b4dac50.jpg" },
                { id: 2, name: "Alinka", img: "https://i.pinimg.com/736x/37/66/fb/3766fb3469f305cacee6a09330a68427.jpg" },
                { id: 3, name: "Specter", img: "https://i.pinimg.com/564x/5a/3d/77/5a3d770ea0afe88aa310ac95e92e5afd.jpg" }
                // {id:4, name: "Kostik", img: "https://i.pinimg.com/564x/a7/24/71/a72471dd545f027432c22c77b8a2d805.jpg"},
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State is changed");
    },

    addMessage() {
        let newMessage = {
            id: this._state.messagesPage.messageData[this._state.messagesPage.messageData.length - 1].id + 1,
            message: this._state.messagesPage.newMessage,
            sentBy: "Asya"
        };
        if (this._state.messagesPage.newMessage) {
            this._state.messagesPage.messageData.push(newMessage);
            this._state.messagesPage.newMessage = '';
            this._callSubscriber(this._state);
        }
    },

    updateMessage(newMessage) {
        
        this._state.messagesPage.newMessage = newMessage;
        this._callSubscriber(this._state);
    },

    addPost() {
        let newPost = {
            id: this._state.profilePage.postData[this._state.profilePage.postData.length - 1].id + 1,
            message: this._state.profilePage.newPostText,
            likes: 0
        }

        if (this._state.profilePage.newPostText) {
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        }
    },

    updateTextPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscriber(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;