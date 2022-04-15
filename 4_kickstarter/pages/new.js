import React from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
export default class CampaignNew extends React.Component {
  render() {
    return (
      <Layout>
        <Header>Navbar</Header>
        <Content>
            <h1>Create a Campaign</h1>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Minimum Contribution"
              name="minimumContribution"
              rules={[
                {
                  required: true,
                  message: "Please add minimum contribution for the campaign",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    );
  }
}
