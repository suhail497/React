import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Clock } from "./ComponentAPI/5.GenearalStatelifecycleMounting";

ReactDOM.render(<App />, document.getElementById('root'));

// GenearlStatelife Cycle

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );


// setInterval(tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
