
#Exercise Day 3: 
State and props, Events, List and Keys, Forms, lifecycle methods,  React Router

###Create a Kilo2Pound converter
[See here for inspiration](http://codepen.io/valscion/pen/jBNjja?editors=0010)  
1. first make a React Component to hold 2 other components. A container component  
2. Make 2 components that can take text input from the user  
3. One component will be for Kilo the other for Pound  
4. When we write numbers inside one of these components the other will update with the converted numbers. This because the 2 components share state of the container component.  

###Make the converter generic
Change the converter component so that it can be used to convert anything (e.g fahrenheit to celcius, inch to centimeter or what ever you can think of.
1. Use props to pass 2 things to the component
 1. first is the name (what does it convert)
 2. second is the function (how does it convert)
2. Create an app with 2 converters using the same component with different props
   1. First converter is for kilo to pound
   2. Second converter is for ounce to kilograms
3. Place both converters on the same page.
###Routing
1.  Create a top menu with 2 menu items.
   1. Use react router to load a converter dependent on which menu item was clicked.

## Continoue on the used car app

[Find the exercise here](UsedCarsEx3.md)  



