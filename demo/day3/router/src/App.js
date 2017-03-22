import React, { Component } from 'react';
import './App.css';
import NavLink from './modules/NavLink';


class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>React Router Demo</h1>
                <ul role="nav">
                    {/*onlyActiveOnIndex is used in the default route so it doesnt stay lit up at all times*/}
                    <li><NavLink to="/" onlyActiveOnIndex>About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>

                    {/*To forskellige måder at lave active link styling*/}
                    {/*<li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>*/}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App;
