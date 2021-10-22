import {
  UserOutlined,
  TeamOutlined,
  TagOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { userLogOut } from "../../../../redux/actions/user.actions";
import { useDispatch } from "react-redux";
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

const userNavLink = {
  key: "signin,signout",
  label: "ĐĂNG NHẬP / ĐĂNG KÝ",
  logOutLabel: " THOÁT",
  icon: <UserOutlined />,
  href: "/login-logout",
};

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
  const dispatch = useDispatch();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const userLinkShow = (user) => {
    if (user) {
      return (
        <a href={userNavLink.href} onClick={() => dispatch(userLogOut())}>
          <Menu.Item key={userNavLink.key} icon={userNavLink.icon}>
            <span>Xin Chào </span>
            <span className="username">{user.username}</span>
            {userNavLink.logOutLabel}
          </Menu.Item>
        </a>
      );
    } else {
      return (
        <a href={userNavLink.href}>
          <Menu.Item key={userNavLink.key} icon={userNavLink.icon}>
            {userNavLink.label}
          </Menu.Item>
        </a>
      );
    }
  };
  return (
    <div className="header__navbar--top">
      <Menu mode="horizontal">
        {navLinkTopShow}

        {userLinkShow(user)}
      </Menu>
    </div>
  );
}

export default NavLinkWithIcon;
