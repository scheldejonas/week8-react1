/**
 * Created by tha on 17-02-2017.
 */
import React from 'react';

//Create component with render method
class Ex1 extends  React.Component{
    render(){
        return React.createElement('h1', null, 'Hello from the first component')
        //Or use JSX: <h1>Hello from the first component</h1>
        // (first arg must be lowercase to be a standard html element (else it will be a react component. The null value are the attributes of the element
    }
}
//Create a Stateless function component:
const Ex2 = ()=> <h1>Hello from the stateless function component</h1>;

//Create a react component with constructor and state.
class Ex3 extends React.Component{
    constructor(){
        super();
        this.state = {val1 : 0};
        this.update = this.update.bind(this);
    }
    update(){ this.setState({val1: this.state.val1 + 1});} //This method could call this.props.myFunc of the containing Component.
    render(){
        console.log('rendering...');
        return (
            <button onClick={this.update}>Click to update: {this.state.val1}</button>
        )
    }
}
//Create a component that uses the props (entered where the component is used).
class Ex4 extends React.Component{
    render(){
        return (
            <h3>
                {this.props.myTxt}
            </h3>
        )
    }
}
//Define datatypes for the props of component: Ex4
Ex4.propTypes = {
    myTxt : React.PropTypes.string,
    myNumber: React.PropTypes.number.isRequired //Is required can be set to create a warning if its not there.
}
//Define default values for props in component Ex4
Ex4.defaultProps = {
    myTxt: "Dette er default teksten, som altid vil være der hvis ikke den er overskrevet"
}
//Component containing another component (a stateless function component in this case)
class Ex5 extends React.Component{
    constructor(){
        super();
        this.state = {txt: 'Dette er start teksten'};
    }
    render(){
        return (
            <div>
                <h1>{this.state.txt}</h1>
                <ChildComp update={this.update.bind(this)}/>
            </div>
        )
    }
    update(e){
        this.setState({txt: e.target.value}); //set state to the value of the child components input field
    }
}
//child component used in Ex5:
const ChildComp = (props)=><input type="text" onChange={props.update} placeholder="Skriv noget tekst her"/>;

//Using props.children to acces the properties of the parent Component.
class Ex6 extends React.Component{ //This is the parent Component
    render(){
        return (
            <ChildComp2>This is <Spades></Spades> clickable</ChildComp2>
        )
    }
}
class ChildComp2 extends React.Component{
    render(){
        console.log("Content of this component where it was used: "+this.props.children);
        return (<button>{this.props.children}</button>)
    }
}
const Spades = ()=><span> &#9824;</span> //A sub component used in Ex6

// Use refs to point to a particular element.
class Ex7 extends React.Component{
    constructor(){
        super();
        this.state = {a: ''}
        this.update = this.update.bind(this)
    }
    render(){
        return (
            <div>
                <span>ref="a":</span><br/>
                <input
                    type="text"
                    onChange={this.update}
                    ref="a"   //THIS LINE IS IMPORTANT
                />
                //
                <span>{this.state.a}</span><br/>
                <span>ref is now a function setting this.b = the input element:</span><br/>
                <input
                    type="text"
                    onChange={this.update}
                    //ref="b" //ref can also take a callback function with the node (the input element in this case) as an input parameter. Also works if the node is a React Component
                    ref={ node=>this.b = node} //**
                />
                <span>{this.state.b}</span><br/>
                <Input
                    type="text"
                    onChange={this.update}
                    update={this.update}
                    ref={comp=>this.c = comp}
                />
                <span>{this.state.c}</span><br/>
            </div>
        )
    }
    update(){ //This method sets a and b state properties to the content of their respective refs values.
        this.setState({
            a: this.refs.a.value, //this.refs is the collection of refs
            //b: this.refs.b.value
            b: this.b.value, //Because the input element was added directly to this.b
            c: this.c.refs.input.value
        });
    }
}

class Input extends React.Component{
    render(){
        return (
            <input type="text" ref="input" onChange={this.props.update}/>
        )
    }
}
class Ex8 extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            currentEvent: '--------'
        }
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({currentEvent:e.type}); //event.type to see what event was tricked.
    }
    render()
    {
        return (
            <div>
                <textarea
                    cols="30"
                    rows="10"
                    onChange={this.update}
                    onClick={this.update}
                    onBlur={this.update}
                    onCopy={this.update}
                />
                <h1>{this.state.currentEvent }</h1>
            </div>
        )
    }
}

export {
    Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8
}
