import { PureComponent } from 'react';

export default class R028_PureComponentClass extends PureComponent {
    // 1. 생성자 구현
    constructor() {
        super();
        this.state = {
            StateString: false,
            StateArrayObj: [ 'one', { keyA: 'valueA' }]
        };
    }

    // 3. buttonClick
    buttonClick = (type) => {
        if (type === 'String') {
            this.setState({StateString: false})
        } else {
            this.setState({StateArrayObj: [ 'one', { keyA: 'valueA'}]})
        }
    };

    // 2. render
    render() {
        console.log('render');
        return (
            <div>
                <h2>R028_PureComponentClass</h2>
                <p>this.state.StateString: {this.state.StateString.toString()}</p>
                <p>this.state.StateArrayObj: {JSON.stringify(this.state.StateArrayObj)}</p>
                <button onClick={(e) => this.buttonClick('String', e)}>String state 변경</button>
                <button onClick={(e) => this.buttonClick('ArrayObj', e)}>ArrayObj state 변경</button>
            </div>
        )
    }
}