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
    href: "#",
  },
  {
    key: "news",
    label: "TIN MỚI VÀ ƯU ĐÃI",
    icon: <TagOutlined />,
    href: "/news",
  },
  {
    key: "ticket",
    label: "VÉ CỦA TÔI",
    icon: <IdcardOutlined />,
    href: "#",
  },
  {
    key: "signin,signout",
    label: "ĐĂNG NHẬP / ĐĂNG KÝ",
    icon: <UserOutlined />,
    href: "/login-logout",
  },
];

const navLinkTopShow = navlinkTop.map((item) => {
  return (
    <a href={item.href}>
      <Menu.Item key={item.key} icon={item.icon}>
        {item.label}
      </Menu.Item>
    </a>
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
