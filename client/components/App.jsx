import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.onSubmitHanlder = this.onSubmitHanlder.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      // e is the event object
        // targetting the target value will return whatever is in the input area
      
      // this.state[e.target.name] similar to
      // for (var key in object) { object[key] }
      [e.target.name]: e.target.value
    });
  }

  // onSubmitHanlder(e) {
  //   e.preventDefault();
  //   this.setState({
  //     firstName: '',
  //     lastName: ''
  //   });

  //   document.getElementById('nameForm').reset();
  // }

  render() {
    return (
      <div>
        {this.state.firstName === this.props.firstName && this.state.lastName === this.props.lastName ? 
        <List /> : 
          <form name="nameForm">
            <label> First Name
              {/* use 'this' as it is a method of App
                  need to refer to the right method */}
              <input onChange={this.onChangeHandler} type="text" name="firstName">
              </input>
            </label>
            <label> Last Name
              <input onChange={this.onChangeHandler} type="text" name="lastName">
              </input>
            </label>
            <label>
              {/* Will submit all things within the same form as this input type submit */}
              <input type="submit" /> 
            </label>
          </form>
        }
      </div>
    )
  }
}

export default App;