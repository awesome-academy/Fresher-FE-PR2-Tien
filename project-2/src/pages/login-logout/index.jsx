import { Tabs } from "antd";
import LogIn from "../../components/pages/login-logout/login/index";
import Register from "../../components/pages/login-logout/register/index";
import "./styles.scss";

const { TabPane } = Tabs;

function LoginLogout() {
  return (
    <div className="login-logout container">
      <Tabs className="tabs" defaultActiveKey="1" centered>
        <TabPane tab="ĐĂNG NHẬP" key="1">
          <LogIn />
        </TabPane>
        <TabPane tab="ĐĂNG KÝ" key="2">
          <Register />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default LoginLogout;
