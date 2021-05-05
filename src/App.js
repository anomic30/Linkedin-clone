import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/counter/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header.js';
import Login from './Login';
import Sidebar from './Sidebar.js';
import Widgets from './Widgets';

function App() {
  const user=useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    })
    // eslint-disable-next-line
  },[])

  return (
    <div className="app">
      
      {!user ? <Login /> : (
        <>
        <Header />
        <div className="app__body">
        
        <Sidebar />
        <Feed />
        <Widgets />
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
