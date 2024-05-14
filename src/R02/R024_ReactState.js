import React, { Component } from 'react';

export default class R024_ReactState extends Component {
    // 1. 생성자 구현
    constructor(props){
        super(props);
        this.state = {
            PropsString: this.props.propsString,
            PropsNum: 3
        }
    }

    // 2. render
    render() {
        return (
            <div>
                <h2>R024_ReactState</h2>
                <p>PropsString : {this.state.PropsString}</p>
                <p>PropsNum : {this.state.PropsNum}</p>
            </div>
        )
    }
}