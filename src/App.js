import React, { useEffect,useRef } from 'react';
import {connect} from 'react-redux';
import {Route,Switch, Redirect} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header';
import Sign from './pages/sign/Sign';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';

function App({setCurrentUser,currentUser}) {

  const unsubscribeFromAuth = useRef(null)

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
 
        userRef.onSnapshot(snapShot => { setCurrentUser({id:snapShot.id,...snapShot.data()})})
      }
        setCurrentUser(userAuth)
    })
    return () => {
      unsubscribeFromAuth();
    };
         // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/shop' component={Shop} />
        <Route  path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<Sign />)} />
      </Switch>
    </div>
  );
}
 
const mapStateToProps = state => ({
  currentUser : state.user.currentUser
});

export default connect(mapStateToProps,{setCurrentUser})(App);
 