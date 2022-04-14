import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function AppLayout() {
  return (
    <>
      <Layout>
        <Header>NavBar</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}
