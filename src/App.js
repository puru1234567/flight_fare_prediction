import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import Details from './components/Form';
import GoogleLoginComponent from './components/Googleauth';
import {tsParticles} from "tsparticles";
// import Landing from './components/Landing';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  tsParticles
  .loadJSON("tsparticles", "presets/default.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={GoogleLoginComponent}/>
        {/* <ProtectedRoute path="/flight"
          loggedIn={} /> */}
        <Route path ="/form" exact component={GoogleLoginComponent}/>
        {/* <Route path ="/predict" exact component={}/> */}
      </Router>
    </div>
  );
}

export default App;
