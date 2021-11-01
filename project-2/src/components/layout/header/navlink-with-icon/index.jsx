import {
  UserOutlined,
  TeamOutlined,
  TagOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { userLogOut } from "../../../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

const navlinkTop = [
  {
    key: "hiring",
    label: "TUYỂN DỤNG",
    icon: <TeamOutlined />,
    to: "#",
  },
  {
    key: "news",
    label: "TIN MỚI VÀ ƯU ĐÃI",
    icon: <TagOutlined />,
    to: "/news",
  },
];

const ticketNavLink = {
  key: "ticket",
  label: "VÉ CỦA TÔI",
  icon: <IdcardOutlined />,
  to: "/ticket-cart",
};

const userNavLink = {
  key: "signin,signout",
  label: "ĐĂNG NHẬP / ĐĂNG KÝ",
  logOutLabel: " THOÁT",
  icon: <UserOutlined />,
  to: "/login-logout",
};

const navLinkTopShow = navlinkTop.map((item) => {
  return (
    <Link to={item.to}>
      <Menu.Item key={item.key} icon={item.icon}>
        {item.label}
      </Menu.Item>
    </Link>
  );
});

function NavLinkWithIcon() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const auth = useSelector((state) => state.user.isLoggedIn);

  const userLinkShow = (user) => {
    if (user.username) {
      return (
        <a href={userNavLink.to} onClick={() => dispatch(userLogOut())}>
          <Menu.Item key={userNavLink.key} icon={userNavLink.icon}>
            <span>Xin Chào </span>
            <span className="username">{user.username}</span>
            {userNavLink.logOutLabel}
          </Menu.Item>
        </a>
      );
    } else {
      return (
        <Link to={userNavLink.to}>
          <Menu.Item key={userNavLink.key} icon={userNavLink.icon}>
            {userNavLink.label}
          </Menu.Item>
        </Link>
      );
    }
  };

  const ticketNavLinkShow = (auth) => {
    if (auth) {
      return (
        <Link to={ticketNavLink.to}>
          <Menu.Item key={ticketNavLink.key} icon={ticketNavLink.icon}>
            {ticketNavLink.label}
          </Menu.Item>
        </Link>
      );
    }
  };

  return (
    <div className="header__navbar--top">
      <Menu mode="horizontal">
        {navLinkTopShow}

        {ticketNavLinkShow(auth)}

        {userLinkShow(user)}
      </Menu>
    </div>
  );
}

export default NavLinkWithIcon;
