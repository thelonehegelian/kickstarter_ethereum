import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
import lottery from "./lotteryContract";

class App extends React.Component {
  // Define initial state
  state = {
    manager: "",
    players: [],
  };

  // TODO: use setState and useEffect() and  for this call
  async componentDidMount() {
    // function calls are invoked from a default metamask address set during the initial setup
    // this means that the .call({from: ''}) does not need to have a 'from' field
    const manager = await lottery.methods;
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    console.log(balance);
    // update state
    this.setState({ manager: manager, players: players });
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
