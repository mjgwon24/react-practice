import { Component } from 'react';

export default class R025_SetState extends Component {
    // 1. 생성자 구현
    constructor(props){
        super(props);
        this.state = {
            StateString: false
        };
    }

    // state 변경
    StateChange = (flag) => {
        if(flag == 'direct') this.state.StateString = true;
        if(flag == 'setState') this.setState({StateString: true});
    }


    // 2. render
    render(){
        return (
            <div>
                <h2>R025_SetState</h2>
                <p>StateString : {this.state.StateString.toString()}</p>
                <button id='btnChangeState' onClick={(e) => this.StateChange('direct', e)}>state직접변경</button>
                <button id='btnChangeSetState' onClick={(e) => this.StateChange('setState', e)}>setState사용</button>
            </div>
        )
    }
}