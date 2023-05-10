import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/reset.css";
import DashboardLayout from "../components/Layout";
import KangarooTable from "../components/KangarooTable";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme, Table } from "antd";

const { Header, Sider, Content } = Layout;

function Home() {
  const store = useSelector((state) => state.listings);

  return (
    <DashboardLayout>
      <KangarooTable />
    </DashboardLayout>
  );
}

export default Home;
