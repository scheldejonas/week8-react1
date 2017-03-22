import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo';
import NotFound from './modules/NotFound';


ReactDOM.render((
    <Router history={hashHistory}>
        {/*The outer Route in this case means that App is the containing component and the nested components will only be shown if App components displays its this.props.children*/}
        <Route path="/" component={App}>
            {/* add the routes here
                IndexRoute makes About component active one inside App component*/}
            <IndexRoute component={About}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
                <Route path='*' component={NotFound} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root'))