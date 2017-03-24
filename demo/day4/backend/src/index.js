import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import './index.css';
import BooksFacade from './facade/BooksFacade';

const bf = new BooksFacade();

bf.loadBooks(() => {
    //Don't load DOM, until initial data is fetched
    ReactDOM.render(<Container facade={bf} />, document.getElementById("root"));
})
