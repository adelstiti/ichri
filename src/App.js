import React, { useEffect, useState } from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header';
import Sign from './pages/sign/Sign';
import { auth } from './firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState()

  let unsubscribeFromAuth = null ;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(user)
    })
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
 