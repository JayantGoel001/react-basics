import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello'
import ConditionalRendering from "./conditional-rendering";
import EventDemo from "./Event Demo";
import Person from "./Person";
import StateDemo from "./state demo";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>
        <Hello name={"Jayant Goel"}/>
    </React.StrictMode>,
    document.getElementById('hello')
);
ReactDOM.render(
    <ConditionalRendering/>,
    document.getElementById('list')
);
ReactDOM.render(
    <EventDemo/>,
    document.getElementById('event')
);
ReactDOM.render(
    <Person/>,
    document.getElementById('person')
)
ReactDOM.render(
    <StateDemo/>,
    document.getElementById('state-demo')
)

reportWebVitals();
