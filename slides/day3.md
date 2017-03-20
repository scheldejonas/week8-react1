<img align="right" src="../img/cphbusinessWhite.png" />  
#React day3
##State and props, Events, List and Keys, Forms, lifecycle methods, React Router

Here is an article with [10 usefull design patterns for working with React](https://hackernoon.com/10-react-mini-patterns-c1da92f068c5#.uvrnr03q1) 

##State


##Props

###props.children 
- This means all the content between begin and end-tag of component.
- [See example here](https://facebook.github.io/react/docs/composition-vs-inheritance.html#containment)


###Lifting state up
When 2 or more component share data and we need them both to be updated on change we put the state in the first common ancestor. And then lift state from the child component to the parent component all the way up to the common ancestor.
[See more on it here](https://facebook.github.io/react/docs/lifting-state-up.html)

###Set state with function
[See example here](https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
- This is done when we want to use current state to calculate the next state.
