import styles from "./Navbar.module.css";
import Link from "next/link";
import { Button } from "antd";

export default function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <ul>
        <Link href="/">
          <Button ghost>CrowdCoin</Button>
        </Link>
      </ul>
    </nav>
  );
}
