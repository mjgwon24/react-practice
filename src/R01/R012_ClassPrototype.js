import React, { Component } from 'react';

class R012_ClassPrototype extends Component {
    // 1. 생성자 구현
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 3. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        // ES5 prototype
        let ExamCountFunc = (function() {
            // 생성자 함수
            function ExamCount(num) {
                this.number = num;
            }
            // 프로토타입 메소드
            ExamCount.prototype.showNum = function () {
                console.log('1. react_' + this.number);
            };
            // 생성자 함수 반환
            return ExamCount;
        }());

        let cnt = new ExamCountFunc('100');
        cnt.showNum();

        // ES6 class
        class ExamCountClass {
            // 생성자 함수
            constructor(num2) {
                this.number2 = num2;
            }
            // 프로토타입 메소드
            showNum() {
                console.log(`2. react_${this.number2}`);
            }
        }

        let cnt2 = new ExamCountClass('2hh');
        cnt2.showNum();
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