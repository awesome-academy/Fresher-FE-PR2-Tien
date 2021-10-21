import "./styles.scss";

function FilmTitle({ filmTitle: { current, redirect, link } }) {
  return (
    <div className="container">
      <div className="film__title">
        <h1 className="film__title__current">{current}</h1>

        <a href={link}>
          <h2 className="film__title__redirect">{redirect}</h2>
        </a>
      </div>
    </div>
  );
}

export default FilmTitle;
