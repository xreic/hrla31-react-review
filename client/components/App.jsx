import React, { Component } from 'react';

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
      </div>
    )
  }
}
