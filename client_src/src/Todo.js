import React, { Component } from 'react';

import Todosingle from './Todosingle';


class Todo extends Component {





  render() {

    return (
      <div>
      <Todosingle />
      <input type="text" />
        <button>Add a task</button>
      </div>
    )


  }
}

export default Todo;
