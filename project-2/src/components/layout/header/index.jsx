import {
  UserOutlined,
  TeamOutlined,
  TagOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./styles.scss";

const navlinkTop = [
  {
    key: "hiring",
    label: "TUYỂN DỤNG",
    icon: <TeamOutlined />,
  },
  {
    key: "news",
    label: "TIN MỚI VÀ ƯU ĐÃI",
    icon: <TagOutlined />,
  },
  {
    key: "ticket",
    label: "VÉ CỦA TÔI",
    icon: <IdcardOutlined />,
  },
  {
    key: "signin,signout",
    label: "ĐĂNG NHẬP / ĐĂNG KÝ",
    icon: <UserOutlined />,
  },
];

const navLinkTopShow = navlinkTop.map((item) => {
  return (
    <Menu.Item  key={item.key} icon={item.icon}>
      {item.label}
    </Menu.Item>
  );
});

function NavLinkWithIcon() {
  return (
    <div className="header__navbar--top">
      <Menu mode="horizontal">{navLinkTopShow}</Menu>
    </div>
  );
}

export default NavLinkWithIcon;
