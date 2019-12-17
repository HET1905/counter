import React from "react";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      err: ""
    };
  }
  handelDecrement = prevState => {
    console.log(this.state.counter);
    if (prevState <= 0) {
      this.setState({
        err: "Value can not be -ve",
        counter: 0
      });
    } else {
      this.setState({
        counter: prevState - 1
      });
    }
  };
  render() {
    const { counter } = this.state;
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">
          Counter : {counter <= 0 ? 0 : counter}
        </h1>
        <h2 data-test="error-display" style={{ color: "red" }}>
          {counter <= 0 ? "value can not be -ve" : null}
        </h2>
        <button
          onClick={() =>
            this.setState({
              counter: counter + 1
            })
          }
          data-test="button-increment"
        >
          Increment
        </button>
        <button
          data-test="button-decrement"
          onClick={() => this.handelDecrement(counter)}
        >
          Decrement
        </button>
        {/* {title} */}
      </div>
    );
  }
}

export default App;
