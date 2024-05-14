import React, { Component } from 'react';

class R014_ForEach extends Component {
    // 1. 생성자 구현
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    // 3. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메서드
    componentDidMount() {
        // for
        let For_Arr = [ 1, 2, 3, 4, 5 ];
        let For_newArr = [];
        for(let i = 0; i< For_Arr.length; i++) {
            For_newArr.push(For_Arr[i]);
        }
        console.log(`For_newArr: ${For_newArr}`);

        // forEach
        let ForEach_Arr = [ 1, 2, 3, 4, 5];
        let ForEach_newArr = [];
        ForEach_Arr.forEach(item => {
            ForEach_newArr.push(item);
        })
        console.log(`ForEach_newArr: ${ForEach_newArr}`);
    }

    // 2. render
    render() {
        return (
            <div>
                <h2>R014_ForEach</h2>
            </div>
        )
    }
}

export default R014_ForEach;

