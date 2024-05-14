import { Component } from 'react';

export default class R026_ForceUpdate extends Component {
    // 1. 생성자 구현
    constructor(props) {
        super(props);

        this.state = {
            StateString: false
        };
    }

    StateChange = () => {
        this.state.StateString = true;
        this.forceUpdate();
    }

    // 2. render
    render() {
        return (
            <div>
                <h2>R026_ForceUpdate</h2>
                <p>state: {this.state.StateString.toString()}</p>
                <button onClick={(e) => this.StateChange(e)}>state 변경 후 강제 렌더링</button>
            </div>
        )
    }
}