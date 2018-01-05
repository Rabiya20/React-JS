import React, { Component } from 'react';
import './App.css';

export default class Time extends Component{
    constructor(props){
        super(props);
        this.state={
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        // console.log('this.props', this.props);
    }

    componentWillMount(){
        this.getTime(this.props.deadline);
    }

    componentDidMount(){
        setInterval(() => this.getTime(this.props.deadline)
        ,1000);
    }

    leading(num){
        return num < 10 ? '0' + num : num;
    }

    getTime(deadline){
        const times = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((times/1000) % 60);
        const minutes = Math.floor((times/1000/60) % 60);
        const hours = Math.floor(times/(1000*60*60) % 24);
        const days = Math.floor(times/(1000*60*60*24));

        this.setState({days, hours, minutes, seconds});
    }
    render(){
        // this.getTime(this.props.deadline);
        return(
            <div>
              <div className="countDays">{this.leading(this.state.days)} Days</div>
              <div className="countHrs">{this.leading(this.state.hours)} Hours</div>
              <div className="countMnts">{this.leading(this.state.minutes)} Minuts</div>
              <div className="countSecs">{this.leading(this.state.seconds)} Seconds</div>
            </div>
        )
    }
}