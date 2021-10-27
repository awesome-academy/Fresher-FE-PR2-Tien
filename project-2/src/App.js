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
import { getMovieData } from "./redux/thunks/movie.thunk";
import { getTheaterData } from "./redux/thunks/theater.thunk";
import { getNewsData } from "./redux/thunks/news.thunk";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  /**
   * Fetch data
   */
  React.useEffect(() => {
    dispatch(getMovieData());
    dispatch(getTheaterData());
    dispatch(getNewsData());
  }, [dispatch]);

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
