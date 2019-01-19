import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Counter from './components/Counter'

class App extends Component {
  state = {
    firstInput: 5,
    secondInput: 0
  }

  updateInput = (inputName, value) => {
    this.setState({
      [`${inputName}`] : value
    })
  }

  increment = (options) => {
    for (let inputName of options) {
      const val = `this.state.${inputName}`
      this.setState({
        [`${inputName}`]: val++
      })
    }
  }

  decrement = (options) => {
    for (let inputName of options) {
      const val = `this.state.${inputName}`
      this.setState({
        [`${inputName}`]: val--
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <Counter
          incrementAction={this.increment}
          decrementAction={this.decrement}
          inputId={`firstInput`}
          updateInput={this.updateInput}
          correspondingInputTotal={this.state.firstInput}
        />
        <Counter
          incrementAction={this.increment}
          decrementAction={this.decrement}
          updateInput={this.updateInput}
          inputId={`secondInput`}
          correspondingInputTotal={this.state.secondInput}
        />
        <Button
          action={this.increment}
          label={`Add To All`}
          options= {['firstInput', 'secondInput']}
          />
        <Button
          action={this.decrement}
          label={`Subtract From All`}
          options={['firstInput', 'secondInput']}
        />
      </div>
    );
  }
}

export default App;
