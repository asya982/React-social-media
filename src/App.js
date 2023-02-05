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
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter';
import { initalizeApp } from "./redux/appReducer";
import Initialization from './components/common/Initialization/Initialization';


class App extends React.Component {
  componentDidMount = () => {
    this.props.initalizeApp();
  };

  render = () => {
    if (!this.props.initialized) {
      return <Initialization />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar state={this.props.state.navbar} />
        <div className='app-wrapper-content'>
          <Routes><Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<MusicContainer />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users/*' element={<UsersContainer />} />
            <Route path='/login' element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    );
  };

};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});


export default compose(
  withRouter,
  connect(mapStateToProps, { initalizeApp })
)(App);
