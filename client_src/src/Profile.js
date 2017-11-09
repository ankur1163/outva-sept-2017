import React, { Component } from 'react';
import Projects from './Projects';
import Sidebar from './Sidebar';
import { Button, Header, Image, Modal } from 'semantic-ui-react'




class Profile extends Component {
  constructor(props) {
    super(props);

    this.state={imageurl:"https://d38zhw9ti31loc.cloudfront.net/wp-content/uploads/2013/07/Crystal-headshot-new.jpg",
    name:"Margaret k",email:"margaret@gmail.com",editprofilebutton:false,newname:"Margaret k",newemail:"margaret@gmail.com"}
  }

  handlebutton(event,data){
    console.log(this.state.editprofilebutton)

    this.setState({editprofilebutton:!this.state.editprofilebutton})
  }





  render() {
    var handlebutton = this.handlebutton.bind(this);

    return (
      <div className="wrapper">
       <div className="sidebar">
          <Sidebar />
       </div>
        <div className="project">
          <Projects/>
        </div>

        <div className="chat">
         <h2>Profile</h2>
         <img alt="flower" style={{borderRadius:"50%",height:"131px",width:"131px",display:"block",alignItems:"center"}} src={this.state.imageurl} w />
         <br/> <div> <p>Name : {this.state.name}</p><br/></div>
          <p>Email: {this.state.email}</p>
          <Modal trigger={<Button>Show Modal</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
              <Modal.Description>
                <Header>Edit your profile</Header>
                <p>Name</p><input type="text" onChange={(e)=>this.setState({newname:e.target.value})} value={this.state.newname} />
                <p>Email </p><input type="text" onChange={(e)=>this.setState({newemail:e.target.value})} value={this.state.newemail} />
                <Button primary>Save</Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>

        </div>

      </div>
    )


  }
}

export default Profile;
