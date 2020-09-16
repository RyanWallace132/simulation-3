import React from 'react';
import './App.css';
import routes from './routes';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      {/* {props.isLoggedIn ? <Nav/>:<Auth/> } */}
      {routes}
      </header>
      </div>

  );
}


export default App