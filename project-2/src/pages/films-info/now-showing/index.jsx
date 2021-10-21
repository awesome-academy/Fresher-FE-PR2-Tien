import BreadCrump from "../../../components/layout/content/breadcrump";
import FilmTitle from "../../../components/pages/films-info/film-title/index";
import FilmCard from "../../../components/pages/films-info/film-card/index";
import { List } from "antd";
import "./styles.scss";

const breadLinks = {
  links: [
    {
      href: "",
      name: "Phim",
    },
  ],
  current: "Phim đang chiếu",
};

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];

const filmTitle = {
  current: "Phim Đang Chiếu",
  redirect: "Phim Sắp Chiếu",
};

function NowShowing() {
  return (
    <div className="now-showing">
      <BreadCrump breadLinks={breadLinks} />

      <FilmTitle filmTitle={filmTitle} />

      <div className="container">
        <List
          className="film-grid"
          grid={{ gutter: 35, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <FilmCard />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default NowShowing;
