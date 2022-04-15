import { Button } from "antd";
import Link from "next/link";
export default function CreateCampaignButton() {
  return (
    <>
      <Button type="primary" size="large">
        <Link href="/new">Create Campaign</Link>
      </Button>
    </>
  );
}
