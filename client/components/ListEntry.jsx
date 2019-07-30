import React, { Component } from 'react';

export default class ListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Todo",
      newTodo: ""
    };
    this.viewChange = this.viewChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  viewChange(view) {
    this.setState({ view })
  }

  handleChange(e) {
    this.setState({newTodo: e.target.value});
  }

  handleSubmit() {
    this.setState({
      view: "Todo"
    }, () => this.props.handleEdit(this.props.index, this.state.newTodo));
  }

  render() {
    return (
      <div>
        {this.state.view === "Todo" ? (
          <span>
          {this.props.index + 1 + ". "}
          {this.props.todo}
            <button onClick={() => this.viewChange("Edit")}>Edit</button>
            <button onClick={() => this.props.handleDelete(this.props.index)}>Delete</button>
          </span>
        ) : (
          <span>
            <input type="text" placeholder={this.props.todo} onChange={this.handleChange}></input>
            <button onClick={this.handleSubmit}>Edit</button>
            <button onClick={() => this.viewChange("Todo")}>Cancel</button>
          </span>
        )}
      </div>
    )
  }
}
