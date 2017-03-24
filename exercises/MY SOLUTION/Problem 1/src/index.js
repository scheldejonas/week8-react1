// Libs
import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

// CSS 
import './css/style.css';

// Components
import Home from './components/Home';

// Render
render((
    <HashRouter>
        <Route path="/" component={Home} />
    </HashRouter>
    ), document.getElementById('root'));