import { Component } from 'react';

export default class R025_SetState extends Component {
    // 1. 생성자 구현
    constructor(props){
        super(props);
        this.state = {
            StateString: false
        };
    }

    StateChange = 


    // 2. render
    render(){
        return (
            <div>
                <h2>R025_SetState</h2>
                <p>StateString : {this.state.StateString.toString()}</p>
                <button id='btnChangeState'>state직접변경</button>
                <button id='btnChangeSetState'>setState사용</button>
            </div>
        )
    }
}