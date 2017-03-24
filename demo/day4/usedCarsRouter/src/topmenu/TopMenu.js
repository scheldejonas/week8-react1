/**
 * Created by tha on 23-03-2017.
 */
import React from 'react';
import { Link } from 'react-router';


export default (props) => {
    return (
        <div className="topmenu">
            <ul>
                <li><Link to="/" >View cars</Link></li>
                <li><Link to="/add">Add new car</Link></li>
            </ul>
        </div>
    );
}
