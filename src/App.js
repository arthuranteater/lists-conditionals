import React, { Component } from "react";
import "./App.css";
import Message from "./ValidationComponent";
import LetterBox from "./CharComponent";

class App extends Component {
  state = {
    inputLength: 0,
    value: ""
  };

  getInputLength = event => {
    const copyState = { ...this.state };
    copyState.inputLength = event.target.value.length;
    console.log("new state length", copyState.inputLength);
    this.setState(copyState);
  };

  getValue = event => {
    const copyState2 = { ...this.state.value };
    copyState2.value = event.target.value;
    console.log("new state value", copyState2.value);
    this.setState(copyState2);
  };

  deleteLetter = index => {
    const text = this.state.value.split("");
    text.splice(index, 1);
    const afterLength = this.state.inputLength - 1;
    const newtext = text.join("");
    this.setState({ value: newtext, inputLength: afterLength });
    console.log(this.state);
  };

  render() {
    const value = this.state.value;
    let boxes = null;
    if (value !== null) {
      const valuearray = value.split("");
      //console.log("array", valuearray);
      boxes = valuearray.map((letter, index) => {
        return (
          <LetterBox
            box={letter}
            key={index}
            clicked={() => this.deleteLetter(index)}
          />
        );
      });
    }

    return (
      <div className="App">
        <h1>Lists Conditionals</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={event => {
            this.getInputLength(event);
            this.getValue(event);
          }}
        />
        <Message length={this.state.inputLength} />
        {/* <LetterBox
          value={this.state.value}
          clicked={key => this.deleteLetter(key)}
        /> */}
        {boxes}
      </div>
    );
  }
}

export default App;
