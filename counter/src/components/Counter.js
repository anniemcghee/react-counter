import React, { Component } from 'react';
import Button from './Button'
import Input from './Input'

class Counter extends Component {
  render() {
    return (
      <div className='counter'>
        <Button
          action={this.props.incrementAction}
          label={`Add`}
          options={[this.props.inputId]}
        />
        <Input
          id={this.props.inputId}
          inputValue={this.props.correspondingInputTotal}
          updateInput={this.props.updateInput}
        />
        <Button
          action={this.props.decrementAction}
          label={`Subtract`}
          options={[this.props.inputId]}
        />
      </div>
    );
  }
}

export default Counter;
