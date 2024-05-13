import React, { Component } from "react";

class R007_LifecycleEx extends Component {
    // 생성자
    constructor(props) {
        super(props);
        this.state = {};
        console.log('[7] 1. constructor Call');
    }

    // 생성자 다음으로 호출되는 함수
    static getDerivedStateFromProps(props, state) {
        console.log('[7] 2. getDerivedStateFromProps Call :' + props.prop_value);
        return {tmp_state:props.prop_value};
    }

    // 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        console.log('[7] 4. componentDidMount Call');
        console.log('[7] 5. tmp_state : ' + this.state.tmp_state);
    }

    render() {
        console.log('[7] 3. render Call');
        return (
            <h2>[ R007_LifecycleEx_componentDidMount ]</h2>
        )
    }
}

export default R007_LifecycleEx;
