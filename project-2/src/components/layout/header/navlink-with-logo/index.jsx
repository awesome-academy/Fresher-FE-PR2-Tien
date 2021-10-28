import { Row, Col, Menu } from "antd";
import "./styles.scss";

const logoCGV = "/assets/logo/logo-header/cgvlogo.png";
const logoCine = "/assets/logo/logo-header/kenhcine.gif";
const logoTicket = "/assets/logo/logo-header/mua-ve_ngay.png";

const navLink = [
  {
    label: "PHIM",
    href: "/now-showing",
  },
  {
    label: "RẠP CGV",
    href: "/theater-info",
  },
  {
    label: "THÀNH VIÊN",
    href: "#",
  },
  {
    label: "CULTURE PLEX",
    href: "#",
  },
];

const navLinkShow = navLink.map((item, index) => {
  return (
    <li key={index}>
      <a className="nav__link" href={item.href}>
        {item.label}
      </a>
    </li>
  );
});

const menuShow = navLink.map((item, index) => {
  return (
    <Menu.Item key={index} icon={item.icon}>
      {item.label}
    </Menu.Item>
  );
});

function NavLinkWithLogo() {
  return (
    <div
      className="header__navbar--bottom"
      style={{
        background: `url("/assets/img/background/bg-top.png") `,
      }}
    >
      <Row className="navbar container">
        <Col xs={24} lg={4} className="logo">
          <a href="/">
            <img src={logoCGV} alt="logo" />
          </a>
        </Col>
        <Col xs={0} lg={12}>
          <ul className="nav__item">{navLinkShow}</ul>
        </Col>
        <Col xs={0} lg={8} className="logo__group">
          <img src={logoCine} alt="gif" />
          <img src={logoTicket} alt="mua vé ngay" />
        </Col>
      </Row>

      <br />

      <Row>
        <Col xs={24} lg={0}>
          <Menu mode="horizontal">{menuShow}</Menu>
        </Col>
      </Row>
    </div>
  );
}

export default NavLinkWithLogo;
