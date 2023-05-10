import React from "react";
import "antd/dist/reset.css";
import DashboardLayout from "../components/Layout";
import KangarooTable from "../components/KangarooTable";

function Home() {
  return (
    <DashboardLayout>
      <KangarooTable />
    </DashboardLayout>
  );
}

export default Home;
