import React, { Component } from 'react';
import List from './List.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        {(this.props.first === this.state.first && this.props.last === this.state.last) ? (
          <List />
        ) : (
          <form>
          <label>
            First Name:
            <input type="text" name="first" onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="last" onChange={this.handleChange} />
          </label>
        </form>
        )}
      </div>
    )
  }
}
