import React, { Component } from 'react';

class R012_ClassPrototype extends Component {
    // 1. 생성자 구현
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 3. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        
    }


    // 2. render
    render() {
        return (
            <div>
                <h2>R012_ClassPrototype</h2>
            </div>
        )
    }

}

export default R012_ClassPrototype;