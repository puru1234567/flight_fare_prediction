import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Form';
import GoogleLoginComponent from './components/Googleauth';
import Landing from './components/Landing';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Landing}/>
        {/* <ProtectedRoute path="/flight"
          loggedIn={} /> */}
        <Route path ="/form" exact component={GoogleLoginComponent}/>
        {/* <Route path ="/predict" exact component={}/> */}
      </Router>
    </div>
  );
}

export default App;
