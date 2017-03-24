/**
 * Created by tha on 16-03-2017.
 */
import React, {Component} from "react";
// import logo from "./logo.svg";
//import './App.css';
import currency from "./Currency";
//import orderBy from 'lodash'; //npm install --save lodash@4.17.4
import {orderBy} from 'lodash';
//import paramFilter from './FilterOnParams';

class UsedCarsApp2 extends Component{
    constructor(props){
        console.log("UsedCarsApp constructor runs");
        super(props);
        //const cars = (props.route.facade)? : props.route.facade.cars
        this.state = {
            cars: props.route.facade.cars,
            sortedBy: {col: 'year', dir: 'asc'},
            facade: props.route.facade
        };
        this.sort = this.sort.bind(this);
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({cars: nextProps.cars});
    // };

    sort(e){
        const column = e.target.innerText.toLowerCase();
        var dir = this.state.sortedBy.dir;
        var orderedCarsArr = orderBy(this.state.cars, [column]);
        if(this.state.sortedBy.col === column && dir === 'asc'){
            orderedCarsArr = orderedCarsArr.reverse();
            dir = 'desc';
        } else {
            dir = 'asc'
        }
        this.setState({cars: orderedCarsArr, sortedBy:{col: column, dir: dir}});
    }

    delete(e){
        e.preventDefault();
        const id = e.target.getAttribute("id");
        this.state.facade.deleteCar(id, ()=>{
            const newArr = this.state.cars.filter((car)=>car.id !== id);
            console.log(newArr);
            this.setState({cars: newArr});
        });
    }
    edit(e){
        e.preventDefault();
        this.state.facade.edit(e.target, );
    }

    render() {
        const cars = this.state.cars;
        console.log("now running render on UsedCars view");
        document.title = "Used Cars App";
        const carlines = cars.map((car, index) => {
                //const registered = (new Date(car.registered)).toISOString().slice(0, 10);
                return <tr key={car.id}>
                    <td>{car.year}</td>
                    <td>{car.registered}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.description}</td>
                    <td>{currency(car.price)}</td>
                    <td>
                        <a id={car.id} onClick={this.edit = this.edit.bind(this)}>edit</a> | <a id={car.id}
                        onClick={this.delete = this.delete.bind(this)}>delete</a>
                    </td>
                </tr>;
            }
        );
        const carsTable = <table className="table-striped">
            <thead>
            <tr>
                {/*<th>Year</th>*/}
                <SortingTH sort={this.sort}>Year</SortingTH>
                <SortingTH sort={this.sort}>Registered</SortingTH>
                <SortingTH sort={this.sort}>Make</SortingTH>
                <SortingTH sort={this.sort}>Model</SortingTH>
                <SortingTH sort={this.sort}>Description</SortingTH>
                <SortingTH sort={this.sort}>Price</SortingTH>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {carlines}
            </tbody>
        </table>;
        return (
            <div className="car-app">
                {/*<div className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*</div>*/}
                <h3 className="grey-back">Number of cars in the list: {cars.length}</h3>
                {carsTable}
            </div>
        );
    }
}
const SortingTH = (props) => {
    return (<th onClick={props.sort} className="sort-by">{props.children}</th>);
}
// class FilterInput extends Component{
//     constructor(props){
//         super(props);
//         this.update = this.update.bind(this);
//     }
//     update(){
//         var modifiedValue=this.refs.inputValue.getDOMNode().value;
//         this.props.updateValue(modifiedValue);
//     }
//     return(<input type="text" ref="inputValue" value={this.props.value} onChange={this.update} />)
//
// }
export default UsedCarsApp2;