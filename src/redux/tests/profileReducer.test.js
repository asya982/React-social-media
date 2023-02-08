import profileReducer, { addPostActionCreator, deletePost } from "../profileReducer";

let initialState = {
    profile: {
        postData: [
            { id: 1, message: "Hello", likes: 200 },
            { id: 2, message: "I`m learning", likes: 300 },
            { id: 3, message: "React", likes: 250 },
            { id: 4, message: "Dimkins loves ketchub", likes: 250 },
        ]
    },
};

let newPost = "New post";

it("Post lenght should be incremented", () => {
    let action = addPostActionCreator(newPost);

    let localState = profileReducer(initialState, action);


    expect(localState.profile.postData.length).toBe(initialState.profile.postData.length + 1);
});

it("New post message should be correct", () => {
    let action = addPostActionCreator(newPost);

    let localState = profileReducer(initialState, action);


    expect(localState.profile.postData[localState.profile.postData.length - 1].message).toBe(newPost);
});

it("Post length should be decremented", () => {
    let action = deletePost(1);

    let localState = profileReducer(initialState, action);


    expect(localState.profile.postData.length).toBe(initialState.profile.postData.length - 1);
});

it("Post length should be the same if id is incorrect", () => {
    let action = deletePost(10000);

    let localState = profileReducer(initialState, action);


    expect(localState.profile.postData.length).toBe(initialState.profile.postData.length);
});
