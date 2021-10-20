import React from "react";
import { userRoutes } from "./router/router-config.jsx";
import { Layout } from "antd";
import Header from "./partials/header/header.jsx";
import Footer from "./partials/footer/footer.jsx";
import {
  BrowserRouter as Router,
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
            {Object.entries(userRoutes).map(([name, route]) => {
              return (
                <Route
                  key={name}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}

            <Redirect to="/" />
          </Switch>
        </Router>

        <Footer />
      </Layout>
    </div>
  );
}

export default App;
