/**
 * Created by tha on 18-03-2017.
 */
import React from 'react';

class Repo extends React.Component{
    render() {
        return (
            <div id="repo">
                <h2>{this.props.params.repoName}</h2>
                <p>The chosen repo to see was the {this.props.params.repoName} and here we can display the content of this component bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
            </div>
        )
    }
}
export default Repo;