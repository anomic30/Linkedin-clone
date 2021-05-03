import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
