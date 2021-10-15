import { Row, Col } from "antd";
import "./styles.scss";

const logoCGV = "/assets/logo/cgvlogo.png";
const logoCine = "/assets/logo/kenhcine.gif";
const logoTicket = "/assets/logo/mua-ve_ngay.png";

const navLink = [
  {
    label: "PHIM",
    href: "#",
  },
  {
    label: "RẠP CGV",
    href: "#",
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

const navLinkShow = navLink.map((item) => {
  return (
    <li>
      <a className="nav__link" href={item.href}>
        {item.label}
      </a>
    </li>
  );
});

function NavLinkWithLogo() {
  return (
    <div
      className="header__navbar--bottom"
      style={{ background: `url("assets/img/bg-top.png") ` }}
    >
      <Row className="navbar container">
        <Col span={4} className="logo">
          <img src={logoCGV} alt="logo" />
        </Col>
        <Col span={12}>
          <ul className="nav__item">{navLinkShow}</ul>
        </Col>
        <Col span={8} className="logo__group">
          <img src={logoCine} alt="gif" />
          <img src={logoTicket} alt="mua vé ngay" />
        </Col>
      </Row>
    </div>
  );
}

export default NavLinkWithLogo;
