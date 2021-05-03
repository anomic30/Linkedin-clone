import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="app">
      <Header/>
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed/>
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
