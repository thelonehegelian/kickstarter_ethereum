import { Form, Select, InputNumber, Switch, Slider, Button } from 'antd'

// Custom DatePicker that uses Day.js instead of Moment.js
import DatePicker from '../components/DatePicker'



export default function Home() {
  return <div>Hello Old Friend</div>
}
/**
 
import React from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends React.Component {
  // get data from the ethereum contract and set it as props
 // the function should resolve to an object   
  static async getInitialProps() {
    // get the deployd campaign array from the factory contract
    const campaigns = await factory.methods.getDeployedContracts().call();
    console.log(campaigns);
    //  return the data
     return (campaigns);
  }

 

  render() {
    return <div>{this.props.campaings}</div>;
  }
}

export default CampaignIndex;
*/