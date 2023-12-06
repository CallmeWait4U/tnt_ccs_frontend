import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { Menu } from "antd";
import {
  BarsOutlined,
  FileOutlined,
  InfoCircleOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { PATH } from "../../contants/common";
function Sidenav() {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  const [selectedKey, setSelectedKey] = useState("dashboard");
  return (
    <>
      <div className="flex flex-row items-center border-b-2 border-slate-300 p-4">
        <img src={logo} alt="logo" width={60} />
        <h1 className="font-bold text-black p-2 text-2xl">TNT CCS</h1>
      </div>
      <Menu mode="inline" theme="light">
        <Menu.Item
          key="dashboard"
          icon={<UserOutlined />}
          onClick={() => setSelectedKey("dashboard")}
          style={{
            backgroundColor: selectedKey === "dashboard" ? "#7364ff" : "",
            color: selectedKey === "dashboard" ? "#fff" : "",
          }}
        >
          <NavLink to={PATH.CUSTOMER}>Quản lý khách hàng</NavLink>
        </Menu.Item>
        <Menu.Item
          key="tables"
          icon={<PieChartOutlined />}
          onClick={() => setSelectedKey("tables")}
          style={{
            backgroundColor: selectedKey === "tables" ? "#7364ff" : "",
            color: selectedKey === "tables" ? "#fff" : "",
          }}
        >
          <NavLink to={PATH.DASHBOARD}>Thống kê - báo cáo</NavLink>
        </Menu.Item>
        <Menu.Item
          key="billing"
          icon={<BarsOutlined />}
          onClick={() => setSelectedKey("billing")}
          style={{
            backgroundColor: selectedKey === "billing" ? "#7364ff" : "",
            color: selectedKey === "billing" ? "#fff" : "",
          }}
        >
          <NavLink to={PATH.ACTIVITYMANAGEMENT}>Quản lý hoạt động</NavLink>
        </Menu.Item>
        <Menu.Item
          key="profile"
          icon={<FileOutlined />}
          onClick={() => setSelectedKey("profile")}
          style={{
            backgroundColor: selectedKey === "profile" ? "#7364ff" : "",
            color: selectedKey === "profile" ? "#fff" : "",
          }}
        >
          <NavLink to="/profile">Quản lý tổ chức</NavLink>
        </Menu.Item>
        <Menu.Item
          key="customers"
          icon={<InfoCircleOutlined />}
          onClick={() => setSelectedKey("customers")}
          style={{
            backgroundColor: selectedKey === "customers" ? "#7364ff" : "",
            color: selectedKey === "customers" ? "#fff" : "",
          }}
        >
          <NavLink to="/customers">Quản lý khiếu nại</NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Sidenav;
