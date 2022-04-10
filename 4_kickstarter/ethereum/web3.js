import Web3 from "web3";


let web3;


if  (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {

    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
}

else {
    // we are running the code on nextjs server or the user does not have metamask etc
    // set the rinkeby endpoint from infura
    const provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/75ae527684f249b583774781214dcbcc") 
    web3 = new Web3(provider)
}

export default web3;