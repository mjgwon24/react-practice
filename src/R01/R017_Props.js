import React, { Component } from 'react';

export default class R017_Props extends Component {
    render() {
        let props_val = this.props.props_val;
        props_val += '수정가능';

        return(
            <div>
                <h2>R017_Props</h2>
                <p>{props_val}</p>
            </div>
        )
    }
}