import React from "react";
import { Layout } from "antd";
import Header from "./partials/header/header.jsx";
import Footer from "./partials/footer/footer.jsx";

const { Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Content>Content</Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
