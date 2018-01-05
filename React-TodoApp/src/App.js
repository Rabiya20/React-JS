import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Todo';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "This is line one in zero"},
        {id: 1, text: "This is line two in one"},
        {id: 2, text: "This is line three in two"},
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    })
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index)=> todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo with React</h1>
        </header>
        <div className="todoBody">
          <Todo />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo)=>{
                return <TodoItems todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
