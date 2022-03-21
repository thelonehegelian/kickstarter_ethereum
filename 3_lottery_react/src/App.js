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
    connectedAccount: "", // is this okay security-wise?  (ㆆ_ㆆ) addresses are public anyway
  };

  // TODO: use setState and useEffect() for this call
  async componentDidMount() {
    // function calls are invoked from a default metamask address set during the initial setup
    // this means that the .call({from: ''}) does not need to have a 'from' field
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    // gets balance of the contract, this is also the sum of ETH all the players sent when they entered
    // this will be an object wrapped in BigNumber.js library
    const balance = await web3.eth.getBalance(lottery.options.address);
    // get connected metamask account
    const connectedAccount = await web3.eth.getAccounts();

    // update state
    this.setState({
      manager: manager,
      players: players.length,
      balance: balance,
      connectedAccount: connectedAccount[0],
    });
    // console logs current web3 version
    console.log(`Web3 version: ${web3.version}`); // version: 1.7.1
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
    this.setState({ message: "Transaction completed successfully" });
  };

  // pickWinner handler
  // calls the pickWinner function on the lottery contract
  handlePickWinner = async () => {
    console.log("handlePickWinner Called");
    this.setState({ message: "Waiting for the transaction to complete ..." });
    // get transaction receipt
    await lottery.methods
      .pickWinner()
      .send({ from: this.state.connectedAccount });
    this.setState({ message: "A winner has been picked!" });
  };

  render() {
    // Conditional render of pick winner button
    // renders only if connected metamask address == manager address
    const pickWinnerButton = () => {
      const { manager, connectedAccount } = this.state;
      let renderButton =
        manager === connectedAccount ? (
          // the button calls the handlePickWinner function
          <button onClick={this.handlePickWinner}>Pick Winner</button>
        ) : null;
      return renderButton;
    };

    return (
      <div className="App">
        {/*Heading*/}
        <h1>Lottery</h1>
        <p>Hello, I am the Manager</p>
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
        {/*This should only be visible if the connected MetaMask address is that of the Manager*/}
        {pickWinnerButton()}
        <hr />
        {/*Message to inform the user about the status of the transaction*/}
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
