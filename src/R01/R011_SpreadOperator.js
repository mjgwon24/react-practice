import React, { Component } from 'react';

class R011_SpreadOperator extends Component {
    // 1. 생성자 구현
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 3. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        // javaScript Array - ES5
        let es5Array1 = [1, 2, 3];
        let es5Array2 = [4, 5, 6];
        let es5SumArr = es5Array1.concat(es5Array2);
        console.log(`1. es5SumArr : ${es5SumArr}`);

        // javaScript Array - ES6
        let es6SumArr = [...es5Array1, ...es5Array2];
        console.log(`2. es6SumArr : ${es6SumArr}`);
        const [sum1, sum2, ...rest] = es6SumArr;
        console.log(`3. sum1 : ${sum1}, sum2 : ${sum2}, rest : ${rest}`);

        // javaScript Object - ES5
        let es5Obj1 = { key1 : 'val1', key2: 'val2'};
        let es5Obj2 = { key2 : 'new2', key3 : 'new3'};
        let es5SumObj = Object.assign(es5Obj1, es5Obj2);
        console.log(`4. es5SumObj : ${JSON.stringify(es5SumObj)}`);

        // javaScript Object - ES6
        let es6SumObj = {...es5Obj1, ...es5Obj2};
        console.log(`5. es6SumObj : ${JSON.stringify(es6SumObj)}`);
        let {key1, ...others} = es6SumObj;
        console.log(`6. key1 : ${key1}, others : ${JSON.stringify(others)}`);
    }

    // 2. render
    render() {
        return (
            <div>
                <h2>R011_SpreadOperator</h2>
            </div>
        )
    }
}

export default R011_SpreadOperator;

