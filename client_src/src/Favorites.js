import React, { Component } from 'react';
import Projects from './Projects';
import Sidebar from './Sidebar';




class Favorites extends Component {
  constructor(props){
    super(props)
    this.state={favorites:[{name:"ankur",imageurl:"https://d38zhw9ti31loc.cloudfront.net/wp-content/uploads/2013/07/Crystal-headshot-new.jpg",text:"this is great "},
    {name:"meg",imageurl:"https://d38zhw9ti31loc.cloudfront.net/wp-content/uploads/2013/07/Crystal-headshot-new.jpg",text:"everything is great "},
    {name:"Tom",imageurl:"https://d38zhw9ti31loc.cloudfront.net/wp-content/uploads/2013/07/Crystal-headshot-new.jpg",text:"making this simple stuning"}]}
  }





  render() {

    var tr = this.state.favorites.map(function(item,index){
      return <div><p>Name:{item.name}</p><img alt="great" src={item.imageurl} style={{width:"50px",height:"50px"}} /><p>Text :{item.text}</p><hr/></div>
    })

    return (
      <div className="wrapper">
       <div className="sidebar">
          <Sidebar />
       </div>
        <div className="project">
          <Projects/>
        </div>

        <div className="chat">
        <h2>All your favorites </h2>
         {tr}


        </div>

      </div>
    )


  }
}

export default Favorites;
