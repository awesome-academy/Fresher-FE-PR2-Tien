import Dashboard from "../pages/main/index";
import News from "../pages/news/index.jsx";
import NowShowing from "../pages/films-info/now-showing/index";
import Incoming from "../pages/films-info/incoming/index";
import TheaterInfo from "../pages/theater-info/index";
import FilmDetail from "../pages/films-info/film-detail/index";
import LoginLogout from "../pages/login-logout/index";

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
    incoming: {
      path: "/incoming",
      exact: true,
      component: Incoming,
    },
    theaterInfo: {
      path: "/theater-info",
      exact: true,
      component: TheaterInfo,
    },
    filmDetail: {
      path: "/film-detail/:id",
      exact: true,
      component: FilmDetail,
    },
    LoginLogout: {
      path: "/login-logout",
      exact: true,
      component: LoginLogout,
    },
  },
};

export const userRoutes = ROUTES__CONFIG.USER__ROUTES;
export default ROUTES__CONFIG;
