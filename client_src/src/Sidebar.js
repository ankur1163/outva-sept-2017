import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from './actions/index.js'
import axios from 'axios'

//import moxtra from './moxtra-logo.png'

import './App.css';




//If this.props.books is falsy, javascript knows that it doesn't have to test the expression any further, because when you have a condition
//with && and your first expression is already falsy, the expression cannot turn to truthy anymore
class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state={name:"ankur"}
  }



   buttonclicked(){

     this.props.fetchWeather()
   }
   clicked(){
     console.log("it clicked")

   }

  render() {
    var buttonclicked= this.buttonclicked.bind(this);
    var td =  "megha";
   var clicked = this.clicked.bind(this);

    return (
      <div className="wrappersidebar">
      <button onClick={clicked}>Get</button>
         <div >
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
         <button onClick={buttonclicked}>its amazing {this.props.books && this.props.books[0] && this.props.books[0].name}</button>
      </div>
    )


  }
}

function mapStateToProps(state){
  return {
    books:state.books
  }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
