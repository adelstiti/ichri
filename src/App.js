import React, { useEffect, useState,useRef } from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header';
import Sign from './pages/sign/Sign';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  const unsubscribeFromAuth = useRef(null)

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
 
        userRef.onSnapshot(snapShot => { setCurrentUser({id:snapShot.id,...snapShot.data()})})
      }
        setCurrentUser(userAuth)
    })
    console.log(currentUser);
    return () => {
      unsubscribeFromAuth();
    };
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/shop' component={Shop} />
        <Route  path='/signin' component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
 