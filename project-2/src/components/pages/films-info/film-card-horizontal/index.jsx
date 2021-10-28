import { Button } from "antd";
import "./styles.scss";

const ticket = "/assets/icons/bg-cate-booking.png";

function FilmCardHorizontal({
  movie: { src, name, director, actors, type, time, start, language },
}) {
  return (
    <div className="film-card-horizontal">
      <img className="card__img" src={src} alt="banner" />

      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <span>
          <span className="bold">Đạo diễn: </span>
          {director}
        </span>
        <span>
          <span className="bold">Diễn viên: </span>
          {actors}
        </span>
        <span>
          <span className="bold">Thể loại: </span>
          {type}
        </span>
        <span>
          <span className="bold">Khởi chiếu: </span>
          {start}
        </span>
        <span>
          <span className="bold">Thời lượng: </span>
          {time}
        </span>
        <span>
          <span className="bold">Ngôn ngữ: </span>
          {language}
        </span>

        <Button
          className="card__btn"
          shape="round"
          icon={<img src={ticket} alt="ticket" />}
          size="large"
          href={"/film-detail/"}
        >
          MUA VÉ
        </Button>
      </div>
    </div>
  );
}

export default FilmCardHorizontal;
