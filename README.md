# hrla31-react-review

Matthew Mata's amazing step-by-step guide to creating a simple todo list.

## Initial Server Set Up

```
npm install
npm run build
npm start
```

## Exercise 1: Rendering React to DOM

* Render "Hello from React" to the div in index.html with an id of "app"

## Exercise 2: Creating a Functional Component in React

* Create folder called components inside of the client folder
* Inside the components folder, build out a functional react component called App in that file that renders "Hello from Component" to the DOM

## Exercise 3: Passing Props into A Functional Component

* Pass your first and last name down as props to your component from index

## Exercise 4: Refactoring a Functional Component to a Stateful Component

* Refactor your functional component into a stateful class component

## Exercise 5: Using Inputs to Update State

* Inside of App.jsx, create two inputs
* Build out some functionality that will allow you to set your first name and last name to the state object

## Exercise 6: Starting our Todo List Component

* Inside the components folder, build out a stateful react component called List
* Import this Todo List component into App
* Add a empty string called todo and an array called todos to the state object
* Build out some functionality that will allow you to add text to the todo string in state
* Build out some functionality that will allow you to push the todo string into the todos array
* Build out some functionality that will allow you to clear the todo string state after you push in the todo string into the todos array
* Build out some functionality that will make the input required when submitted 
* Build out some functionality that will reset the field of the input after submitted

## Exercise 7: Mapping Elements

* Inside the components folder, build out a stateful react component called ListEntry
* Import this ListEntry component into List
* Build out some functionality that render the elements stored in the todos array to the DOM

## Exercise 8: Conditional Rendering

* Inside of App, build out some functionality that will only display List if the first and name entered there match your own

## [EXTRA] Exercise 9: CRUD Operations

* Build out some functionality that allows your todo list to have all CRUD functionality
* CRUD (create, read, update, delete)