import React, { Component } from 'react';

import moxtra from './moxtra-logo.png'

import './App.css';





class Sidebar extends Component {





  render() {

    return (
      <div>
         <div className="wrappersidebar">
          <img  width="144px" src="https://p13.zdassets.com/hc/settings_assets/1174603/200346447/6auSHeGEOYcjY1cw8CPSHA-moxtra-logo.png" alt="logo" />

         </div>
         <div>
           <h4>TimeLine</h4>
         </div>
         <div>
            <h4>Categories</h4>
         </div>
         <div>
           <h4>Contacts</h4>
         </div>
         <div>
            <h4>My to do</h4>
         </div>
         <div>
           <h4>Favorites</h4>
         </div>
         <div>
            <h4>Mention</h4>
         </div>
         <div>
            <h4>Profile</h4>
         </div>
      </div>
    )


  }
}

export default Sidebar;
