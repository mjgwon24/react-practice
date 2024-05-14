import React from 'react';
import './../App.css';
import R010_Variable from './R010_Variable';
import R011_SpreadOperator from './R011_SpreadOperator';
import R012_ClassPrototype from './R012_ClassPrototype';
import R013_ArrowFunction from './R013_ArrowFunction';
import R014_ForEach from './R014_ForEach';
import R015_Map from './R015_Map';
import R016_Jquery from './R016_Jquery';
import R017_Props from './R017_Props';
import R019_PropsBoolean from './R019_PropsBoolean';

export default function AppR01() {
    return (
        <div className="App">
            <h1>AppR01</h1>
            <R010_Variable />
            <R011_SpreadOperator />
            <R012_ClassPrototype />
            <R013_ArrowFunction />
            <R014_ForEach />
            <R015_Map />
            <R016_Jquery />
            <R017_Props props_val = '프롭스사용'/>
            <R019_PropsBoolean props_boolean = {false}/>
            <R019_PropsBoolean props_boolean/>
        </div>
    );
}

