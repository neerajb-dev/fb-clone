import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';

function App() {
  // const [{ user }, dispatch]  = useStateValue();
  const user = null;

  return (
    // BEM Naming convention
    // Data layer - REDUX / React Context API 

    <div className="app">
      {!user ? (
        // <h1>Login</h1>
        <Login />
      ) : (
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
