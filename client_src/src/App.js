import React, { Component } from 'react';



import './App.css';

import Chat from './Chat.js'
import Sidebar from './Sidebar'
import Projects from './Projects'
import Todo from './Todo.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Apphome from './Apphome.js'
import Contacts from './Contacts'
import Mytodo from './Mytodo';
import Favorites from './Favorites';
import Mention from './Mention';
import Profile from './Profile';
import Buy from './Buy.js'



class App extends Component {




  render() {


    return (

      <BrowserRouter>
      <div>
        <Route path="/" exact component ={Apphome} />
        <Route path="/contacts" exact component ={Contacts} />
        <Route path="/mytodo" exact component ={Mytodo} />
        <Route path="/favorites" exact component ={Favorites} />
        <Route path="/mention" exact component ={Mention} />
        <Route path="/profile" exact component ={Profile} />
        <Route path="/buy" exact component ={Buy} />

      </div>
        </BrowserRouter>
    )


  }
}

export default App;
