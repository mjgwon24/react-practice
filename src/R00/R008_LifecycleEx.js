import React, { Component } from "react";

class R008_LifecycleEx extends Component {
    // 2. 생성자 다음으로 호출되는 함수
    static getDerivedStateFromProps(props, state) {
        console.log('[8] 2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state:props.prop_value};
    }

    // 1. 생성자 구현
    constructor(props) {
        super(props);
        this.state = {};
        console.log('[8] 1. constructor Call');
    }

    // 4. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        console.log('[8] 4. componentDidMount Call');
        console.log('[8] 4-1. tmp_state : ' + this.state.tmp_state);
        this.setState({tmp_state2 : true});
    }

    // 5. 컴포넌트가 업데이트되기 전에 호출되는 메소드
    shouldComponentUpdate(props, state) {
        console.log('[8] 5. shouldComponentUpdate Call');
        console.log('[8] 5-1. nextProps : ' + props.prop_value);
        console.log('[8] 5-2. nextState : ' + state.tmp_state);
        console.log('[8] 5-3. state.tmp_state2 : ' + state.tmp_state2);
        return this.state.tmp_state2;
    }

    // 3. 렌더함수 구현
    render() {
        console.log('[8] 3. render Call');
        return (
            <h2>[ R008_LifecycleEx_shouldComponentUpdate ]</h2>
        )
    }
}

export default R008_LifecycleEx;

