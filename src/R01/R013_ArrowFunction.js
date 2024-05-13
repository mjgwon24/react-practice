import React, { Component } from 'react';

class R013_ArrowFunction extends Component {
    // 1. 생성자
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 3. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        Function1(1);

        function Function1(num) {
            return console.log(`1. ${num}`);
        }
    }

    // 2. render
    render() {
        return (
            <div>
                <h2>R013_ArrowFunction</h2>
            </div>
        )
    }
}

export default R013_ArrowFunction;