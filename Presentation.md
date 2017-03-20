<img align="right" src="img/cphbusinessWhite.png" />  
#React day1
##SPA, Architecture, frameworks and libraries
**Study:**  
[**video tutorial here**](https://egghead.io/lessons/react-react-fundamentals-development-environment-setup)  

###Libraries to choose from:  
| Library  |  
|---|  
|  [React](https://facebook.github.io/react/docs/installation.html) |  
|  [jQuery](http://learn.jquery.com/about-jquery/) |  
|  [AngularJS](https://docs.angularjs.org/tutorial) |  
|  [Angular2](https://angular.io/docs/ts/latest/quickstart.html) |    
|  [Ember](https://guides.emberjs.com/v2.11.0/tutorial/ember-cli/) |  
|  [Vue](https://vuejs.org/v2/guide/) |   

Choosing a framework for our front-end development comes down to personal taste and preference but lets take a look at how other people [feel about the biggest 2](https://medium.com/javascript-scene/angular-2-vs-react-the-ultimate-dance-off-60e7dfbc379c#.a736uyrpb)   

###Frameword vs. Library
Difference between a full application with Model-View-Control or just representing the View part (and Control) but leaving the model for others to deal with.


![](../img/lib_frame.png)  
[**Principle: Inversion of control**](https://www.devbridge.com/articles/dependency-injection-in-javascript/)

###Single Page Application (SPA)
![](../img/spa.png)  

1. We get the html page from the server
2. Every change and user interaction with the page updates some part of the content
3. Date to and from the server will happen with AJAX requests in the background
4. Certain components (HTML elements) will be updated.

###React js
The chosen library for this 3rd semester.
####Points about React js
1. Declarative
2. Component based
3. Virtual DOM
4. JSX (XML like language)
5. Components with state 
	-> render() runs when state changes  
6. Data is passed (down) through props

####Look at an example
[](../demo/day1/basic.html)











###Destructuring arrays and objects
`var [no1,,no3,no4,,] = ["First","Second","Third","Fourth","Fifth", "Sixth"];` //creates 3 variables with values from the array.  
`var myObject = {var1: 'some', var2: 'content', var3: 'here'}; `  
`myFunction({var1, var2}){ console.log(var1+" "+var2)}`
`myFunction(myObject);`

###Template strings 
(back ticks and ${} inside string to show content of variables):  
```var myString = `hello mister ${person.name}`. ```  // Also preserves newlines and indent etc.

###Other features
- var, let, const
- ES6 class constructor