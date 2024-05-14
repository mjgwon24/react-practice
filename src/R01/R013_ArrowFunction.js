import React, { Component } from 'react';

class R013_ArrowFunction extends Component {
    // 1. 생성자
    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'react!!',
            num: 3
        };
    }

    // 3. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3();
        this.Function4();
        this.Function5(0,2,3);

        function Function1(num) {
            return console.log(`1. ${num}`);
        }
    }

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(`2. num3 : ${num3}`);
        console.log(`this: ${this}`);       // [object Object]
        console.log(`Arrow : ${this.state.arrowFuc}`);
    }

    Function3() {
        let this_bind = this;
        setTimeout(function() {
            console.log(`3-1. this : ${this}`);     // [object Window]
            console.log(`3-2. this_bind.state.num : ${this_bind.state.num}`);
            console.log(`3-3. this.state.num : ${this.state}`);
        }, 1000);
    }

    Function4() {
        setTimeout(function() {
            console.log(`this.state.arrowFuc: ${this.state.arrowFuc}`)
        }.bind(this), 1000);
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(`5. num4 : ${num4}`);
            console.log(`5-1. this.state.arrowFuc : ${this.state.arrowFuc}`);
        }, 1000);
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