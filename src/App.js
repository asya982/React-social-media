import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar state={props.state.navbar} />
      <div className='app-wrapper-content'>
        <Routes><Route path='/profile/:userId?' element={<ProfileContainer />} />
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
