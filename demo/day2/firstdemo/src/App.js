import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

var imgarr = ["boat1.jpg", "boat2.jpg", "boat3.jpg", "boat4.jpg", "boat5.jpg"];
class App extends Component {

    constructor() {
        super();
        this.state = {
            imgarr,
            index: 0,
            img: imgarr[0]
        };

        this.changeImg = this.changeImg.bind(this);

    }

    changeImg() {
        var index = this.state.index + 1;
        if (index === this.state.imgarr.length)
            index = 0;
        var img = this.state.imgarr[index];
        this.setState({img: img, index: index});
    }


    render() {
        return (
            <div>
                <h1>Trafic Light</h1>
                <h2>{this.props.name} is {this.state.status}</h2>
                <img src={this.state.img}/>
                <button onClick={this.changeImg}>Change image</button>
                <span> </span>
            </div>
        );
    }


}

export default App;
