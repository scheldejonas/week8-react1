/**
 * Created by scheldejonas on 24/03/2017.
 */
import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo center">{props.title}</a>
                <ul class="left hide-on-med-and-down">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li className="active"><a href="#">Link 3</a></li>
                </ul>
            </div>
        </nav>
    );
};
Header.PropTypes = {
  title: React.PropTypes.string.isRequired(),
};

export default Header;