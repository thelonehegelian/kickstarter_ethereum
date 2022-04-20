import { Button } from "antd";
import Link from "next/link";
export default function CreateCampaignButton() {
  // TODO: Move to the form page and use Link from next-routes
  return (
    <>
      <Button type="primary" size="large">
        <Link href="/new">Create Campaign</Link>
      </Button>
    </>
  );
}
