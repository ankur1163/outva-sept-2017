import React, { Component } from 'react';



import './App.css';


import { BrowserRouter, Route,Router, Link ,Redirect} from 'react-router-dom'
import Apphome from './Apphome.js'
import Contacts from './Contacts'
import Mytodo from './Mytodo';
import Favorites from './Favorites';
import Mention from './Mention';
import Profile from './Profile';
import Buy from './Buy.js'
import Cancel from './Cancel.js';
import Success from './Success.js';
import Login from './Login.js'
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  console.log("inside handle authentication")
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const getprofile = () => {
   console.log("entered get profile function")
    auth.getProfile();

}

class App extends Component {




  render() {

    console.log("auth",auth)
    console.log("authentication is ",auth.isAuthenticated())



    return (

      <Router history={history} component={App}>
          <div>


            <Route path="/login" render={(props) => <Login auth={auth} {...props} />} />
            <Route path="/apphome" exact component={(props) => {

            handleAuthentication(props);
               
                  return !auth.isAuthenticated() ? (
                    <Redirect to="/login"/>
                  ) : (
                    <Apphome auth={auth} {...props} />
                  )
                }} />







            <Route path="/contacts" exact component ={Contacts} />
            <Route path="/mytodo" exact component ={Mytodo} />
            <Route path="/favorites" exact component ={Favorites} />
            <Route path="/mention" exact component ={Mention} />
            <Route path="/profile" exact component ={Profile} />
            <Route path="/buy" exact component ={Buy} />
            <Route path="/success" exact component ={Success} />
            <Route path="/cancel" exact component ={Cancel} />

          </div>
        </Router>

    )


  }
}

export default App;
