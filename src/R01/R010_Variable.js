import React, { Component } from 'react';

class R010_Variable extends Component {
    // 1. 생성자 구현
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 3. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        // var
        var varName = 'react';
        console.log(`varName: ${varName}`);
        var varName = 'variable';   // 'varName' is already defined. but no-redeclare
        console.log(`varName: ${varName}`);

        // let
        let letName = 'react';
        console.log(`letName: ${letName}`);
        // let letName = 'variable';   
        // Parsing error: Identifier 'letName' has already been declared.
        letName = 'variable';
        console.log(`letName: ${letName}`);

        // const
        const constName = 'react';
        console.log(`constName: ${constName}`);
        // const constName = 'variable';
        // Parsing error: Identifier 'constName' has already been declared.
        // constName = 'variable';
        // Uncaught TypeError: Assignment to constant variable.
    }

    // 2. render
    render() {
        return (
            <h2>[10] R010_Variable</h2>
        )
    }
}

export default R010_Variable;