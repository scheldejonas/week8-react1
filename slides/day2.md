<img align="right" src="../img/cphbusinessWhite.png" />  
#React day2 - create-react-app
####Classes, imports and exports

React Component module as a class: (basic template)

```react
import React, {Component} from 'react';
import './MyApp.css';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myMethod = this.myMethod.bind(this);

    }

    myMethod(id) {

    }

    render() //render method is run when the internal component state has changed.
    {
        return (<div>

        </div>);
    }
}
export default Container;
```

module as a mere function

```javascript
export default function(value, decimalPosition = 2) {
    return '$' + value
            .toFixed(decimalPosition)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}
```

used as:

```javascript
import currency from "../Currency";
...
<td>{currency(car.price)}</td>
```

and stateless function component

```react
const Ex2 = ()=> <h1>Hello from the stateless function component</h1>;
```




##Create-React-App
[**Use this comprehensive Tutorial here**](https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-1-a12e1833fdc#.afqy5jr7d)  
This start project has quickly become very popular. Read about it [here](http://andrewhfarmer.com/create-react-app/)
[Create-React-App on github](https://github.com/facebookincubator/create-react-app#getting-started).  
Lets install, create and examine the react project.  
1. Open git bash and run:    

   `npm install –g create-react-app` Only first time! Then in your chosen location:  

   `create-react-app <app-name-here>` and  

   `cd <app-name>` to get inside and  

   `npm start` to start your new React application at  
2. Open browser at **http://localhost:3000**  

what can we see in the browsers source view?  
What files can we see in the project folders?  


![](http://www.tutorialsavvy.com/wp-content/uploads/2016/07/image6_thumb.png)

7. Open the App.js and make some changes
8. Run the server to see the result 
   Share examples of small components from the hackernews project [here](../demo/day2/simplecomponent.js)
   ​

#### Exercise

<img align="right" src="../img/hammer.jpg" /> 

- Create new create-react-app

- Create 3 files for 3 ES6 classes that are react components.
  - First file is the containing component that renders the 2 others (use the **basic template** earlier in this slide. The containing component also provides the state and the methods to change it.
  - 2 more files can be stateless components
    - first component provides an input field with an onChange attribute
    - second component (the view) shows changes made in the input (by the user) and displays them in a div.

  ## Now do the tic tac toe tutorial [here](https://facebook.github.io/react/tutorial/tutorial.html)

  And then do the daily exercise [here](../exercises/UsedCarsEx1.md)

  and if you want more [here](day2ex.md)