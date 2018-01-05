import React, { Component } from 'react';
import './App.css';

export default class TodoInput extends Component{

    constructor(props){
        super(props)

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    addTodo(todo){
        //check todo is not empty
        if(todo.length>0){
            this.props.addTodo(todo);
            this.setState({value: ''});       
        }
    }

    render(){
        return(
            <div>
                <input type="text"  value={this.state.value}  className="todoInput" onChange={this.handleChange}/>
                <button className="SubmitBtn" onClick={() => this.addTodo(this.state.value)}>Add</button>
            </div>
        );
    }
} 