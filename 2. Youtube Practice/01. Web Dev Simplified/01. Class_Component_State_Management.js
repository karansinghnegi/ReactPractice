import { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleChangeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }

  handleResetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button onClick={() => this.handleChangeCount(1)}>+</button>
        <button onClick={() => this.handleChangeCount(-1)}>-</button>
        <button onClick={() => this.handleResetCount()}>Reset</button>
      </>
    );
  }
}

export default App;
