import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppR00 from './R00/AppR00';
import AppR01 from './R01/AppR01';
import AppR02 from './R02/AppR02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<AppR00 />
    //<AppR01 />
    <AppR02 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
