import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
import lottery from "./lotteryContract";

class App extends React.Component {
  // Define initial state
  constructor(props) {
    super(props);

    this.state = { manager: "" };
  }

  // TODO: use setState and useEffect() and  for this call
  async componentDidMount() {
    // function calls are invoked from a default metamask address set during the initial setup
    // this means that the .call({from: ''}) does not need to have a 'from' field
    const manager = await methods.manager.call();
    // update state
    this.setState({ manager: manager });
  }
  render() {
    console.log(web3.version); // version: 1.7.1
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
