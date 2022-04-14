import { Card } from "antd";

export default function BasicCard(props) {
  return (
    <div>
      <Card
        title= {props.items[0].name} // campaign name
        extra= {props.items[0].description} // link to campaign 
        style={{ width: 500 }}
      >
        <p>{props.items[0].header}</p> {/* Campaign address */}       
      </Card>
    </div>
  );
}
