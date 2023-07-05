import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";
import musicReducer from "./musicReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleWare from "redux-thunk";
import appReducer from "./appReducer";
import errorsReducer from "./errorsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer,
    auth: authReducer,
    app: appReducer,
    errors: errorsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store___ = store;

export default store;
