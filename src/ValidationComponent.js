import React, { Component } from "react";
import "./App.css";

class Message extends Component {
  render() {
    const length = this.props.length;
    //console.log("message", length);
    let message = null;
    if (length > 0) {
      if (length < 5) {
        message = (
          <div>
            <p>text too short</p>
          </div>
        );
      } else {
        message = (
          <div>
            <p>text long enough</p>
          </div>
        );
      }
    }
    return <div>{message}</div>;
  }
}

export default Message;
