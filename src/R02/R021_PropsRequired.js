import React, { Component } from 'react';
import datatype from 'prop-types';


export default class R021_PropsRequired extends Component {
    render(){
        let { props1, props2, props3 } = this.props;
        return(
            <div>
                <h2>R021_PropsRequired</h2>
                <p>props1 : {props1}</p>
                <p>props2 : {props2}</p>
                <p>props3 : {props3}</p>
            </div>
        )
    }
}

R021_PropsRequired.propTypes = {
    props3 : datatype.isRequired   // 필수 값으로 지정 -> 변수 전달받지 않으면 경고 메시지 출력
}

