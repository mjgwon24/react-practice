import React, { Component } from 'react';

class R015_Map extends Component {

    // 컴포넌트가 만들어지고 첫 렌더링을 마친 이후에 실행되는 메서드
    componentDidMount() {
        let Map_Arr = [ 1, 2, 3 ];
        let Map_newArr = Map_Arr.map(x => x);
        console.log(`Map_newArr: ${Map_newArr}`);

        let Map_multiArr = Map_Arr.map(x => x*2);
        console.log(`Map_multiArr: ${Map_multiArr}`);

        let ObjArr = [{key1: 'react', key2: 100}, 
        {key1: 'java', key2: 200}];
        let Map_objArr = ObjArr.map((value, index) => {
            console.log(`value: ${JSON.stringify(value)}, index: ${index}`);
            let obj = {};
            obj[value.key1] = value.key2;
            return obj;
        });
        console.log(`Map_objArr: ${JSON.stringify(Map_objArr)}`);
    }

    // render
    render() {
        return (
            <div>
                <h2>R015_Map</h2>
            </div>
        )
    }
}

export default R015_Map;

