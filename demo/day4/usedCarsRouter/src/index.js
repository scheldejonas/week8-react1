import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import currency from './Currency';
// import paramFilter from './FilterOnParams';
import UsedCarsView from './UsedCarsApp2';
import CarInput from './carinput/CarInput';
import CarFacade from "./facades/CarsFacade";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// const Container = (props) => <div>{props.children}</div>;
// const Home = () => <h1>Hello from Home!</h1>;
// const Address = () => <h1>We are located at 555 Jackson St.</h1>;
 const NotFound = () => (<h1>404.. This page is not found!</h1>);
let facade = new CarFacade();

facade.loadCars(() => {
ReactDOM.render(
    (<Router history={hashHistory}>
        <Route facade={facade} path='/' component={App}>
            <IndexRoute facade={facade} delete={App.deleteCar} edit={App.grabCar} component={UsedCarsView} />

            <Route path='/add' component={CarInput} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>)
, document.getElementById('root'));
});
