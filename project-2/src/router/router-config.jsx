import Dashboard from "../pages/main/index";
import News from "../pages/news/index.jsx";
import NowShowing from "../pages/films-info/now-showing/index";

const ROUTES__CONFIG = {
  USER__ROUTES: {
    dashboard: {
      path: "/",
      exact: true,
      component: Dashboard,
    },
    news: {
      path: "/news",
      exact: true,
      component: News,
    },
    nowShowing: {
      path: "/now-showing",
      exact: true,
      component: NowShowing,
    },
  },
};

export const userRoutes = ROUTES__CONFIG.USER__ROUTES;
export default ROUTES__CONFIG;
