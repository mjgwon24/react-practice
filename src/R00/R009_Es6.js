import React, { Component } from 'react';

class R009_Es6 extends Component {
    // 1. 생성자 구현
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 3. 컴포넌트가 만들어진 후에 호출되는 메소드
    componentDidMount() {
        let jsString1 = 'JavaScript';
        let jsString2 = '!!\nnext string';
        console.log(jsString1 + ' happy' + jsString2 + '~');

        let es6String1 = `JavaScript`;
        let es6String2 = `!!
next string`;
        console.log(es6String1 + ' happy' + es6String2 + '~');

        // 문자열 함수
        let LongString = 'ES6에 추가된 String 함수들';
        console.log('startsWith: ' + LongString.startsWith('ES6')); //true
        console.log('endsWith: ' + LongString.endsWith('함수들')); //true
        console.log('includes: ' + LongString.includes('String')); //true
    }

    // 2. 렌더 메소드 구현
    render() {
        return (
            <div>
                <h1>[9] R009_Es6</h1>
            </div>
        );
    }
}

export default R009_Es6;

