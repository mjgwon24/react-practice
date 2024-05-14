import React, { Component } from 'react';

export default class R019_PropsBoolean extends Component {
    
    render() {
        let { props_boolean } = this.props;
        console.log(`props_boolean : ${props_boolean}`);

        return (
            <div>
                <h2>R019_PropsBoolean</h2>
                <p>{props_boolean.toString()}</p>
            </div>
        )
    }
}