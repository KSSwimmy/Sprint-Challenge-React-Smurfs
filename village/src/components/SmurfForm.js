import React, { Component } from 'react';


import { Link } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  

  handlerSubmit = event => {
    this.props.addSmurf(event, this.state)
   
    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/')

  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log('props',this.props)
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handlerSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
          <div>
          <Link to='/'>Back to the Smurfs</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
