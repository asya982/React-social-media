import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.navbar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*' element={
            <Profile state={props.state.profilePage} />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/music/*' element={<MusicContainer />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/users/*' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};


export default App;
