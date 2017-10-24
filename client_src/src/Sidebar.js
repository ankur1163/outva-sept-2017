import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//import moxtra from './moxtra-logo.png'

import './App.css';





class Sidebar extends Component {





  render() {

    return (
      <div>
         <div className="wrappersidebar">
          <img  width="144px" src="https://p13.zdassets.com/hc/settings_assets/1174603/200346447/6auSHeGEOYcjY1cw8CPSHA-moxtra-logo.png" alt="logo" />

         </div>

         <div>
           <Link to="/contacts"><h4>Contacts</h4></Link>
         </div>
         <div>
            <Link to="/mytodo"><h4>My to do</h4></Link>
         </div>
         <div>
           <Link to="/favorites"><h4>Favorites</h4></Link>
         </div>
         <div>
            <Link to="/mention"><h4>Mention</h4></Link>
         </div>
         <div>
            <Link to="/profile"><h4>Profile</h4></Link>
         </div>
         <div>
            <Link to="/buy"><h4>Buy</h4></Link>
         </div>
      </div>
    )


  }
}

export default Sidebar;
