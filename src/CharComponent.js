import React, { Component } from "react";
import "./App.css";

class LetterBox extends Component {
  render() {
    // const value = this.props.value;
    // let boxes = null;
    // if (value !== null) {
    //   const valuearray = value.split("");
    //   //console.log("array", valuearray);
    //   boxes = (
    //     <div>
    //       {valuearray.map((letter, index) => {
    //         return (
    //           <div
    //             className="LetterBox"
    //             key={index}
    //             onClick={this.props.clicked}
    //           >
    //             <p>{letter}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // }

    return (
      <div className="LetterBox" onClick={this.props.clicked}>
        {this.props.box}
      </div>
    );
  }
}

export default LetterBox;
