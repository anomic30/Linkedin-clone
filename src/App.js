import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/counter/userSlice';
import Feed from './Feed';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
  const user=useSelector(selectUser)

  return (
    <div className="app">
      <Header/>
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
