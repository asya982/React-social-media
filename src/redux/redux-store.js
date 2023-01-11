import {combineReducers, legacy_createStore as createStore} from "redux";
import messagesReducer from "./messagesReducer";
import musicReducer from "./musicReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
