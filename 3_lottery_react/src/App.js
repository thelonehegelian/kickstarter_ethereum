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
    balance: "",
  };

  // TODO: use setState and useEffect() and  for this call
  async componentDidMount() {
    // function calls are invoked from a default metamask address set during the initial setup
    // this means that the .call({from: ''}) does not need to have a 'from' field
    const manager = await lottery.methods.manager().call();
    //BUG: currently this is rturning an empty array for some reason
    console.log(manager);
    const players = await lottery.methods.getPlayers().call();
    // this will be an object wrapped in BigNumber.js library
    const balance = await web3.eth.getBalance(lottery.options.address);
    console.log(balance);
    // update state
    this.setState({ manager: manager, players: players.length });
  }
  render() {
    console.log(`Web3 version: ${web3.version}`); // version: 1.7.1
    // console logs the connected metamsk account
    // web3.eth.getAccounts().then((accounts) => {
    //   console.log("Connected", accounts);
    // });

    return (
      <div className="App">
        <h1>Lottery</h1>
        <p>Hello, I am ze Manakher</p>
        <br />
        <p>My address is: </p>
        <br />
        <p>
          There are currently {this.state.players} players in the lottery,
          {/*Coverts wei to ether*/}
          playing to win {web3.utils.fromWei(this.state.balance, "ether")}
        </p>
      </div>
    );
  }
}

export default App;
