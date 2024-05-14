import { Component } from 'react';
import { shallowEqual } from 'shallow-equal';

export default class R029_ShallowEqual extends Component {
    // 1. 생성자 구현
    constructor(){
        super();
        this.state = {
            stateString: false
        };
    }

    // 4. 컴포넌트가 리렌더링될지 여부를 결정
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.state, nextState);
    }

    // 3. 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메소드
    componentDidMount() {
        let obj = {objKey: 'objValue'};
        let arr1 = [1, 2, obj];
        let arr2 = [1, 2, obj];
        let arr3 = [1, 2, {key1: 'a;'}];

        console.log(`shallowEqual(arr1, arr2): ${shallowEqual(arr1, arr2)}`);
        console.log(`shallowEqual(arr1, arr3): ${shallowEqual(arr1, arr3)}`);

        this.setState({stateString: false});
    }


    // 2. render
    render() {
        console.log('== render ==');
        return (
            <div>
                <h2>R029_ShallowEqual</h2>
            </div>
        )
    }
}
