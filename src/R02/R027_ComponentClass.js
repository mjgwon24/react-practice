import { Component } from 'react';

export default class R027_ComponentClass extends Component {
    // 1. 생성자 구현
    constructor() {
        super();
        
        this.state = {
            StateString: false,
            StateArrayObj: [ 'one', { keyA: 'valueA' }]
        };
    }

    // 3. buttonClick Function
    buttonClick = (type) => {
        if (type === 'String') {
            this.setState({StateString: true});
        } else {
            this.setState({StateArrayObj: [ 'one', 'two', 'three', {keyB: 'valueB'}]});
        }
    };

    // 2. render
    render() {
        console.log('render 실행');
        return (
            <div>
                <h2>R027_ComponentClass</h2>
                <p>this.state.StateString: {this.state.StateString.toString()}</p>
                <p>this.state.StateArrayObj: {JSON.stringify(this.state.StateArrayObj)}</p>
                <button onClick={(e) => this.buttonClick('String', e)}>String state 변경</button>
                <button onClick={(e) => this.buttonClick('ArrayObj', e)}>ArrayObj state 변경</button>
            </div>
        )
    }
}