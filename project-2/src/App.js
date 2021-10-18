import React from "react";
import Dashboard from "./pages/main/index.jsx";
import News from "./pages/news/index.jsx";
import { Layout } from "antd";
import Header from "./partials/header/header.jsx";
import Footer from "./partials/footer/footer.jsx";
import {
  BrowserRouter  as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>

            <Route path="/news">
              <News />
            </Route>

            <Redirect to="/" />
          </Switch>
        </Router>

        <Footer />
      </Layout>
    </div>
  );
}

export default App;
