import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThaComp from './ThaComp';
import {Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8} from './simplecomponent';
import './index.css';

ReactDOM.render(
  <ThaComp />,
  document.getElementById('root')
);
ReactDOM.render(
    <App />,
    document.getElementById('root2')
);
ReactDOM.render(
    <Ex1 />,
    document.getElementById('Ex1')
);
ReactDOM.render(
    <Ex2 />,
    document.getElementById('Ex2')
);
ReactDOM.render(
    <Ex3 />,
    document.getElementById('Ex3')
);
ReactDOM.render(
    <Ex4 myNumber={858}/>,
    document.getElementById('Ex4')
);
ReactDOM.render(
    <Ex4 myTxt="Dette er teksten fra props" myNumber={88}/>,
    document.getElementById('Ex4_2')
);
ReactDOM.render(
    <Ex5 />,
    document.getElementById('Ex5')
);
ReactDOM.render(
    <Ex6 />,
    document.getElementById('Ex6')
);
ReactDOM.render(
    <Ex7 />,
    document.getElementById('Ex7')
);
ReactDOM.render(
    <Ex8 />,
    document.getElementById('Ex8')
);
