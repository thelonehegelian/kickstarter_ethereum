import { Card } from "antd";



export default function BasicCard(props) {


  let cardsComponent = props.items.map(campaign => {
    return    (
        <Card
        key = {campaign.description} // ethereum addresses are unique and these one's are public anyway so using them as key would be okay 
        title={campaign.name} // campaign name
        extra={campaign.description} // link to campaign
        style={{ width: 500 }}
      >
        <p>{campaign.header}</p> {/* Campaign address */}
      </Card>
  )
  })

  return (
    <>
      {cardsComponent}
    </>
  );
}
