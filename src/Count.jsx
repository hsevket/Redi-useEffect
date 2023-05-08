import React, { Component } from "react";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: window.innerWidth,
    };
  }
componentDidMount(){
   this.setState({windowSize: window.innerWidth})
}

componentDidUpdate(){
    window.addEventListener('resize', () => this.setState({windowSize: window.innerWidth}))
}

componentWillUnmount(){
    window.removeEventListener("resize", () => this.setState({windowSize: window.innerWidth}))
}
  render() {
    return <h1>{this.state.windowSize}</h1>;
  }
}
