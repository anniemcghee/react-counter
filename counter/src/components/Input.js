import React, { Component } from 'react';

class Input extends Component {
  handleChange = (e) => {
    this.props.updateInput(e.currentTarget.name, e.currentTarget.value)
  }

  render() {
    return (
      <input
        type="number"
        name={this.props.id}
        value={this.props.inputValue}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
