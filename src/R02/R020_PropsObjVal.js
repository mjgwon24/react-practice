import React, { Component } from 'react';

export default class R020_PropsObjVal extends Component {
    render() {
        let { props_obj } = this.props;
        return(
            <div>
                <h2>R020_PropsObjVal</h2>
                <p>{JSON.stringify(props_obj)}</p>
                <p>{props_obj.age}</p>
            </div>
        )
    }
}

