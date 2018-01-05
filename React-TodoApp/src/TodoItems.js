import React, { Component } from 'react';
import './App.css';

export default class TodoItems extends Component{
    // constructor(props){
    //     super(props)
    // }

    removeTodo(id){
        this.props.removeTodo(id);
    }

    render(){
        return(
            <div className="todoItemsDiv">
                <button className="dltBtn" onClick={(e)=> this.removeTodo(this.props.id)}>Delete</button>
                {this.props.todo.text}
            </div>
        );
    }
}