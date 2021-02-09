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
import StyleDemo from "./style demo";
import DynamicStyleDemo from "./Dynamic style demo";
import Nav from "./nav";

ReactDOM.render(
    <React.StrictMode>
        <Nav />
    </React.StrictMode>,
    document.getElementById('nav')
);
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
ReactDOM.render(
    <StyleDemo/>,
    document.getElementById('style-demo')
)
ReactDOM.render(
    <DynamicStyleDemo/>,
    document.getElementById('dynamic-style-demo')
)

reportWebVitals();
