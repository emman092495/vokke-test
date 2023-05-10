import React, { useState } from "react";
import "antd/dist/reset.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const items = [
  {
    key: 1,
    path: "/",
    icon: <OrderedListOutlined />,
    label: "Kangaroos",
  },
  {
    key: 2,
    path: "/add-new",
    icon: <UserAddOutlined />,
    label: "Add New",
  },
].map((item, index) => {
  return {
    key: index,
    label: <Link to={item.path}>{item.label}</Link>,
    icon: item.icon,
  };
});

function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{ height: 32, margin: 16, background: "#eee" }}
        />
        <Menu theme="dark" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
