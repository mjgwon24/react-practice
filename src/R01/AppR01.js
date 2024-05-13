import React from 'react';
import './../App.css';
import R010_Variable from './R010_Variable';
import R011_SpreadOperator from './R011_SpreadOperator';
import R012_ClassPrototype from './R012_ClassPrototype';
import R013_ArrowFunction from './R013_ArrowFunction';

function AppR01() {
    return (
        <div className="App">
            <h1>AppR01</h1>
            <R010_Variable />
            <R011_SpreadOperator />
            <R012_ClassPrototype />
            <R013_ArrowFunction />
        </div>
    );
}

export default AppR01;

