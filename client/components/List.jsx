import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      todos: []
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    // Default action of form submission is to reload page
      // Any submit functionality
      // This will prevent page reload
    e.preventDefault();
    
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      // Sets the state of the todo to be entered as empty
      todo: ''
    });

    // The above state clear does not clear the form
    // Need to use ths method to actually clear the form
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.submitHandler}>
          <label>
            <input required onChange={this.onChangeHandler} type="text" name="todo" />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => (
            <ListEntry todo={todo} key={index}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default List;