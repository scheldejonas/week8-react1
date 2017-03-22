/**
 * Created by tha on 18-03-2017.
 */
import React, { Component } from 'react'
import { Link } from 'react-router';

class Repos extends Component{
    render() {
        return (<div><h2>Repos</h2>
            <div>Here comes a context menu - one that is only visible when the top level navigation: Repos was selected.</div>
            <div id="repos">
            <ul>
                <li><Link to="/repos/reactjs/react-router" activeClassName="active">React Router</Link></li>
                <li><Link to="/repos/facebook/react" activeClassName="active">React</Link></li>
            </ul>
            </div>
            <div className="component" id="subbody">
            {this.props.children}
            </div>
        </div>)
    }
}
export default Repos;