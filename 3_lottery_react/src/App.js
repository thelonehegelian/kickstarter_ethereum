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
    value: "",
    message: "",
  };

  // TODO: use setState and useEffect() and  for this call
  async componentDidMount() {
    // function calls are invoked from a default metamask address set during the initial setup
    // this means that the .call({from: ''}) does not need to have a 'from' field
    const manager = await lottery.methods.manager().call();
    //BUG: currently this is rturning an empty array for some reason
    console.log(manager);
    const players = await lottery.methods;

    console.log(`Players: ${players.length}`);
    // this will be an object wrapped in BigNumber.js library
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({});
    console.log(`Balance: ${balance}`);
    // update state
    this.setState({
      manager: manager,
      players: players.length,
      balance: balance,
    });
  }
  // form submit handler
  // with arrow function syntax: this = component
  onSubmit = async (event) => {
    // prevent form from rerendering the component
    event.preventDefault();
    // this gets the connected accounts from the users Metamask
    const accounts = await web3.eth.getAccounts();
    // message for the user to wait until the transaction is complete
    this.setState({ message: "Waiting for the transaction to complete..." });
    // enter lottery by sending a transaction with specific amount of ETH
    await lottery.methods.enter().send({
      from: accounts[0],
      // get 'value' from the state as it is derived from the form input
      // the user enter the amount in ETH, so needs to be converted to Wei
      value: web3.utils.toWei(this.state.value, "ether"),
    });
    // update message once the transaction has completed
    this.setState({ message: "You have entered the Lottery" });
  };
  render() {
    console.log(`Web3 version: ${web3.version}`); // version: 1.7.1
    // console logs the connected metamsk account
    // web3.eth.getAccounts().then((accounts) => {
    //   console.log("Connected", accounts);
    // });
    return (
      <div className="App">
        {/*Heading*/}
        <h1>Lottery</h1>
        <p>Hello, I am ze Manakher</p>
        <br />
        <p>My address is: {this.state.manager}</p>
        <br />
        {/*Introduction the lottery*/}
        <p>
          There are currently {this.state.players} players in the lottery,{" "}
          {/* Coverts wei to ether */}
          playing to win {web3.utils.fromWei(this.state.balance, "ether")}
          ETH
        </p>
        {/*Form to enter the Lottery*/}
        <form onSubmit={this.onSubmit}>
          <label>Amount of Ether to enter</label>
          {/*Form input*/}
          <input
            onChange={(event) => {
              this.state.value = event.target.value;
            }}
          />
          <button>Enter</button>
        </form>
        <hr />
        {/*Message to inform the user about the status of the transaction*/}
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
