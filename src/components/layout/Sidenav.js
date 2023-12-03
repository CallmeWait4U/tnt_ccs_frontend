import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import {
  BarsOutlined,
  FileOutlined,
  InfoCircleOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
function Sidenav() {
  return (
    <div className="fixed top-0 left-0 z-40 w-50 h-screen pl-2 py-2">
      <div className="flex flex-row items-center border-b-2 border-slate-300 p-4">
        <img src={logo} alt="logo" width={60} />
        <h1 className="font-bold text-black p-2 text-2xl">TNT CCS</h1>
      </div>
      <ul className="text-black flex flex-col w-42 py-2 ">
        <li className="hover:text-white hover:bg-indigo-500 focus:bg-indigo-500 focus:text-white p-2 rounded-md">
          <Link className="hover:text-white" to="/customers">
            <UserOutlined style={{ fontSize: "24px" }} />
            <span className="px-2">Quản lý khách hàng</span>
          </Link>
        </li>
        <li className="hover:text-white hover:bg-indigo-500 focus:bg-indigo-500 focus:text-white p-2 rounded-md">
          <Link className="hover:text-white" to="/tables">
            <PieChartOutlined style={{ fontSize: "24px" }} />
            <span className="px-2">Thống kê - báo cáo</span>
          </Link>
        </li>
        <li className="hover:text-white hover:bg-indigo-500 focus:bg-indigo-500 focus:text-white p-2 rounded-md">
          <Link className="hover:text-white" to="/billing">
            <BarsOutlined style={{ fontSize: "24px" }} />
            <span className="px-2">Quản lý hoạt động</span>
          </Link>
        </li>
        <li className="hover:text-white hover:bg-indigo-500 focus:bg-indigo-500 focus:text-white p-2 rounded-md">
          <Link className="hover:text-white" to="/profile">
            <FileOutlined style={{ fontSize: "24px" }} />
            <span className="px-2">Quản lý tổ chức</span>
          </Link>
        </li>
        <li className="hover:text-white hover:bg-indigo-500 focus:bg-indigo-500 focus:text-white p-2 rounded-md">
          <Link className="hover:text-white" to="/profile">
            <InfoCircleOutlined style={{ fontSize: "24px" }} />
            <span className="px-2">Quản lý khiếu nại</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
