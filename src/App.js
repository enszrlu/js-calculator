import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calculator from './contents/Calculator.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '0',
      memory: '',
      value: 0,
      prevOperator: '',
      calculated: false
    };
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
  }

  handleInputClick(event) {
    if (this.state.calculated) {
      this.setState({input: event.target.value, memory: '', prevOperator: '', value: 0, calculated: false})
    }
    else if (this.state.input == '0') {
      this.setState({input: event.target.value})
    }
    else if (event.target.value == '.' && this.state.input.includes('.')) {
      return;
    }
    else {
      this.setState({input: this.state.input + event.target.value})
    }
  }

  handleOperatorClick(event) {
    if (event.target.value == 'AC') {
      this.setState({input: '0', memory: '', value: 0, prevOperator: ''});
    }
    else if (this.state.calculated) {
      this.setState({memory: this.state.value.toString() + event.target.value, input: '', prevOperator: event.target.value, calculated: false})
    }
    else if (event.target.value == '=') {
      let tempValue;
      let inputValue;
      let operator;
      inputValue = parseFloat(this.state.input);
      operator = this.state.prevOperator;
      if (this.state.prevOperator.length == 2) {
        inputValue = -inputValue;
        operator = operator.slice(0, -1);
      }
      switch(operator) {
        case '+':
          tempValue = this.state.value + inputValue
          break;
        case '-':
          tempValue = this.state.value - inputValue
          break;
        case '*':
          tempValue = this.state.value * inputValue
          break;
        case '/':
          tempValue = this.state.value / inputValue
          break;
      }
      this.setState({memory: this.state.memory + this.state.input + '=' + tempValue.toString(), 
                    input: tempValue.toString(), value: tempValue, prevOperator: '=', calculated:true});
    }
    else if (this.state.input == '') {
      if (event.target.value == '-' && this.state.prevOperator.length == 1){
        this.setState({memory: this.state.memory + event.target.value, input: '', prevOperator: this.state.prevOperator + event.target.value})
      }
      else if (event.target.value != '-') {
        this.setState({memory: this.state.memory.slice(0, -this.state.prevOperator.length) + event.target.value, input: '', prevOperator: event.target.value})
      }
    }
    else {
      let tempValue;
      let inputValue;
      let operator;
      inputValue = parseFloat(this.state.input);
      operator = this.state.prevOperator;
      if (this.state.prevOperator.length == 2) {
        inputValue = -inputValue;
        operator = operator.slice(0, -1);
      }
      switch(operator) {
        case '+':
          tempValue = this.state.value + inputValue
          break;
        case '-':
          tempValue = this.state.value - inputValue
          break;
        case '*':
          tempValue = this.state.value * inputValue
          break;
        case '/':
          tempValue = this.state.value / inputValue
          break;
        case '':
          if (this.state.input != '0') {
            tempValue = parseFloat(this.state.input);
          }
          else {tempValue = 0;}
      }
      this.setState({memory: this.state.memory + this.state.input + event.target.value, input: '', value: tempValue, prevOperator: event.target.value})
    }
  }

  render() {
    return (
      <div className="App">
        <Calculator input={this.state.input} memory={this.state.memory} handleInputClick={this.handleInputClick} handleOperatorClick={this.handleOperatorClick}/>
        <p id="signature">by enszrlu</p>
      </div>
    );
  }  
}

export default App;
