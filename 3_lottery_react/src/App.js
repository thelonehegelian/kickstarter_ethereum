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
    const manager = await lottery.methods;
    console.log(manager);
    // update state
    this.setState({ manager: manager });
  }
  render() {
    console.log(`Web3 version: ${web3.version}`); // version: 1.7.1
    // web3.eth.getAccounts().then((accounts) => {
    //   console.log("Connected", accounts);
    // });

    lottery.methods
      .manager()
      .call()
      .then((managerAccount) => {
        console.log(managerAccount);
      });
    return (
      <div className="App">
        <h1>Lottery</h1>
        <p>Hello, I am ze Manakher</p>
        <br />
        <p>My address is: </p>
      </div>
    );
  }
}

export default App;
