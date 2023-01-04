import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} 
                    addPost={store.addPost.bind(store)} 
                    addMessage={store.addMessage.bind(store)} 
                    updateTextPost={store.updateTextPost.bind(store)} 
                    updateMessage={store.updateMessage.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
    reportWebVitals();
}

store.subscriber(rerenderEntireTree);

rerenderEntireTree(store.getState());