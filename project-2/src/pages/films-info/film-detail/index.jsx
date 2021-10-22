import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDataById } from "../../../redux/thunks/movie.thunk";
import BreadCrump from "../../../components/layout/content/breadcrump";
import FilmCardHorizontal from "../../../components/pages/films-info/film-card-horizontal/index";
import "./styles.scss";

function FilmDetail(props) {
  const dispatch = useDispatch();
  const movieId = props.match.params.id;

  useEffect(() => {
    dispatch(getMovieDataById(movieId));
  }, [dispatch, movieId]);

  const movie = useSelector((state) => state.movie.movieById);

  const breadLinks = {
    links: [
      {
        href: "/" + movie.status,
      },
    ],
    current: movie.name,
  };

  return (
    <div className="film__detail">
      <BreadCrump breadLinks={breadLinks} />

      <div className="film__detail__container container">
        <h1 className="film__detail__title">Nội Dung Phim</h1>

        <FilmCardHorizontal movie={movie} />

        <p className="film__detail__intro">{movie.intro}</p>
      </div>
    </div>
  );
}

export default FilmDetail;
