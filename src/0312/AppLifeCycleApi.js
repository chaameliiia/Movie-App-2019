import React, { Component } from 'react';

class App extends Component {
  // React class 컴포넌트에서 component 관련 모든 속성 상속받음

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    count: 0,
  };

  add = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((current) => ({ count: current.count + 1 }));
  };

  subtract = () => {
    // this.setState({
    //   count: this.state.count - 1,
    // });
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("byebye");
  }

  render() {
    console.log("component rendering");
    return (
      <div>
        <h1>the number is {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.subtract}>subtract</button>
      </div>
    );
  }
}

export default App;
