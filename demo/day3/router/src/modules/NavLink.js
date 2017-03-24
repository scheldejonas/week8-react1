/**
 * Created by tha on 18-03-2017.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
class NavLink extends Component{
    render(){
        return (
            <div id="navlink"><Link {...this.props } activeClassName="active"/></div>
        )
    }
}
export default  NavLink;
