import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import currency from './Currency';
//import paramFilter from './FilterOnParams';
//import UsedCarsApp from './UsedCarsApp1';

import UsedCarsApp from './UsedCarsApp2';
import CarInput from './carinput/CarInput';
import TopMenu from './topmenu/TopMenu';


class App extends Component{

    constructor(props){
        super(props);
        const cars = props.route.facade.cars;
        console.log(cars);
        cars.forEach((car)=>{
            car.registered =(new Date(car.registered)).toISOString().slice(0, 10);
        });
        //console.log(changedCars);
        this.state = { cars: cars, facade: props.route.facade};
        this.deleteCar = this.deleteCar.bind(this);
        this.grabCar = this.grabCar.bind(this);
        this.submitCar = this.submitCar.bind(this);
    }

    deleteCar = function(target){
        const carId = Number(target.getAttribute("id"));
        this.state.
        console.log("Car was hit with id: "+carId);
        const cars = this.state.cars.filter((car)=>car.id !== carId);
        //cars.forEach(x=>console.log(x));
        this.setState({cars});
        console.log(cars);
    }

    grabCar = function(target){
        const carId = Number(target.getAttribute("id")); //taken from the <a> for edit link in UsedCarsApp2
        const thecar = this.state.cars.filter((car)=>car.id===carId)[0]; //filter returns array with only one car (index: 0)
        this.setState({car: thecar});
    }
    submitCar = function(newCar){
        const cars = this.state.cars;
        //If it is a new car (no id)
        //console.log('highest '+this.getHighestID(this.state.cars));
        if(!newCar.id){
            const id = this.getHighestID(this.state.cars);
            newCar.id = id+1;
            console.log(newCar);
            cars.push(newCar);
        } else { //If the car is in the list do update
            cars.forEach(function (oldCar, index) {
                if (oldCar.id === newCar.id) {
                    cars[index] = newCar;
                }
            });
        }
        const clone = this.state.cars.slice(0);
        //clone.forEach(x=>console.log(x));
        this.setState({cars: clone});
    }
    render(){
        //console.log("render now car is: "+this.state.car.model);
        const car = this.state.car;
        //const childrenWithProps = React.cloneElement(this.props.children, this.props);
        return (
            <div id="containerDiv">
                <TopMenu/>
                {this.props.children}

            </div>
        )

    }
    getHighestID(arr){
        var highest = 0;
        arr.forEach(car=>{
            if(car.id > highest){
                highest = car.id;
            }
        });
        return highest;
    }
}

export default App;
