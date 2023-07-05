import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter';
import { initalizeApp } from "./redux/appReducer";
import Initialization from './components/common/Initialization/Initialization';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

// lazy imports
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



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
        <Navbar friends={this.props.navbar.friends} />
        <div className='app-wrapper-content'>
          <Routes><Route path='/profile/:userId?' element={ withSuspense(ProfileContainer) } />
            <Route path='/dialogs/*' element={ withSuspense(DialogsContainer) } />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<MusicContainer />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users/*' element={<UsersContainer />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/friends' element={<UsersContainer friendsOnly={true} />} />
          </Routes>
        </div>
      </div>
    );
  };

};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  navbar: state.navbar
});


const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initalizeApp })
)(App);


const SamuraiJSApp = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;