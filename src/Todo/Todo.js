import React, { Component } from 'react';
import TodoLabel from './TodoLabel/TodoLable.js';
import TodoInput from './TodoInput/TodoInput.js';

// class Todo extends Component {
//   render() {
//     return <h1> Hello, Test! </h1>;
//   }
// }

function Todo(props) {
    return <div>
        <h1> Todo </h1>
        <TodoLabel id="1" />
        <TodoLabel id="2" />
        <TodoLabel id="3" />
        <TodoInput />
    </div>;
};

export default Todo;