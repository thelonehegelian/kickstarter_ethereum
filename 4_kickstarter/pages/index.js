
import React from "react";
import { Button, Space, DatePicker, Card } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';

export default function Home() {
  const onChange = () => {};
  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        <CiCircleFilled />
      </Space>
    </div>
  );
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