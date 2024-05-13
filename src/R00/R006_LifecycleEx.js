import React, { Component } from "react";

class R006_LifecycleEx extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('[6] 1. constructor Call');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[6] 2. getDerivedStateFromProps Call :' + props.prop_value);
        return {};
    }

    render() {
        console.log('[6] 3. render Call');
        return (
            <h2>[ R006_LifecycleEx_getDerivedStateFromProps ]</h2>
        )
    }
}

export default R006_LifecycleEx;

