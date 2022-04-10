import React from 'react';
import factory from '../ethereum/factory'

export class CampaignIndex extends Component {
    async componentDidMount() {
    const campaigns = await factory.methods.getDeployedContracts().call()

        console.log(campaigns)
    }

    render() {
        return <div>Campaings Index</div>
    }
}