import React from 'react';
import factory from '../ethereum/factory'

 class CampaignIndex extends React.Component {
    async componentDidMount() {
    const campaigns = await factory.methods.getDeployedContracts().call()

        console.log(campaigns)
    }

    render() {
        return <div>Campaings Index</div>
    }
}

export default CampaignIndex