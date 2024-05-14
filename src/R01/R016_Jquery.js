import React, { Component } from 'react';
import $ from 'jquery';

export default class R016_Jquery extends Component {

    btnfunction = (e) => {
        let input_val = $("#inputId").val();
        alert(input_val);
    }

    render() {
        return (
            <div>
                <h2>R016_Jquery</h2>
                <input id = "inputId" />
                <button id = "btnid" onClick={e => {this.btnfunction(e)}}>Jquery button</button>
            </div>
        )
    }
}