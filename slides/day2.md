<img align="right" src="../img/cphbusinessWhite.png" />  
#React day2 - create-react-app
##Babel
- Babel is a JavaScript transpiler.  

- Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support.

- [Try it out in jsbin](https://jsbin.com/segovevafu/1/edit?html,js,console,output)

- or like this:  (Use ES6 and JSX in normal script - transpilation will happen on every load. Meaning "Slow")

  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script type="text/babel">

  ```


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

#### Small exercise

<img align="right" src="../img/hammer.jpg" /> 
- Create a es6 class that can return the date and time on the click of a button
- Export the module/class
- Use the model in a script.js file and link to this file from an index.html file
- Run the index file and test that it is working.





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
   Share examples of small components from the hackernews project [here](Ex1_simplecomponent.js)
   Especially the file: C:\Users\tha\ReactProjects\hackernews\src\Ex1_simplecomponent.js

#### Exercise

<img align="right" src="../img/hammer.jpg" /> 

- Create new create-react-app
- Create 3 files for 3 ES6 classes that are react components.
  - First file is the containing component that renders the 2 others (use the **basic template** in this slide. The containing component also provides the state and the methods to change it.
  -  2 more files can be stateless components
    - first component provides an input field with an onChange attribute
    - second component shows changes made in the input (by the user) and displays them in a div
      - Hint: Let the onChange function in the subcomponent call a changeView function in the containing component. changeView() changes its state -> causing a rerender -> new prop value (from the state) will be re-rendered.