import React, { Component } from 'react';
import ListEntry from './ListEntry.jsx';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({todo: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ""
    });
    document.getElementById("form").reset();
  }

  handleEdit(index, newTodo) {
    let copyOfState = [...this.state.todos];
    copyOfState[index] = newTodo
    this.setState({ todos: copyOfState });
  }

  handleDelete(index) {
    let copyOfState = [...this.state.todos];
    copyOfState.splice(index, 1);
    this.setState({ todos: copyOfState });
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.handleSubmit}>
          <label>
            New Todo:
            <input type="text" required onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.todos.map((todo, index) => <ListEntry todo={todo} key={index} index={index} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>)}
      </div>
    )
  }
}