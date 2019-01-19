import React, { Component } from 'react';

class Button extends Component {
  handleClick = (e) => {
    this.props.action(this.props.options)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
