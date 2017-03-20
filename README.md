#Week 8: React JS
###Readings

[For those who like a (free) book](https://leanpub.com/the-road-to-learn-react)

[NPM cheat sheet](study/npm_cheat_sheet.md) 

[About React](https://facebook.github.io/react/)
[About React Template project](https://github.com/facebookincubator/create-react-app#getting-started)  

[About Webpack for React](http://www.pro-react.com/materials/appendixA/)

###Exercises
[Day 1 exercise](exercises/day1ex.md) 
[Day 2 exercise](exercises/day2ex.md) 
[Day 3 exercise](exercises/day3ex.md) 
[Day 4 exercise](exercises/day4ex.md) 
[Day 5 SP exercise](exercises/day5ex.md)  

###Topics
| Day  | Topic                                    |
| ---- | ---------------------------------------- |
| 1    | Frontend architecture, frameworks and SPAs, ES6 |
| 2    | Component, State, State and props        |
| 3    | Events, List and Keys, Forms and React Router |
| 4    | React with Backend API                   |
| 5    | SP6                                      |


## Getting started
First we need a javascript runtime engine. We will use Node.js. Install it from here:  
[Get node.js](https://nodejs.org/en/).   
This will also give us the Node Package Manager (npm) that we will use to install other javascript packages in our projects and globally.

When we are running javascript inside the browser, we do not need node.js (the engine). When we want to run javascript outside the browser we need node.js.

When we are making react apps and using EcmaScript6 features most browsers will not understand. Therefore we have to transpile our scripts to EcmaScript5. In order to do that we will use Babel. To minimise the configuration for our react apps we will use a fully integrated project - a react template project: [Facebooks "create-react-app"](https://github.com/facebookincubator/create-react-app#getting-started).   

1. Scroll down the readme file and get to know the application.

2. Open a console like git bash.

3. write: `npm install -g create-react-app` to install create-react-app globally on your computer.    

4. Then go to a folder location where you want to start your first React project and write: `create-react-app <appname>` and `cd <appname>` to move inside the new app folder.

5. Now checkout the projects folder structure:  

![text](img/folderstructure.png)   

6. Look particularly on App.js, index.js and index.html  

7. Try changing the content inside App.js so that it says: Welcome to my new React application.

8. From the commandline (inside the app) run: `npm start`  

9. Go to a browser on: `http://localhost:3000` and see the app running here.  

10. Checkout the [package.json file](https://github.com/facebookincubator/create-react-app/blob/master/package.json) to see how dependencies are managed in the project.  