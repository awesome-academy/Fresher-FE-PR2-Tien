import { Card } from "antd";
import { Button } from "antd";
import "./styles.scss";

const { Meta } = Card;

const logoPrice = "/assets/logo/logo-price/ribon-49k.png";

const ticket = "/assets/icons/bg-cate-booking.png";

function FilmCard({ movie: { src, name, type, time, start, status } }) {
  return (
    <div className="film-card">
      <Card
        className="card"
        cover={
          <div>
            {status === "now-showing" && (
              <img className="ribbon" src={logoPrice} alt="ribbon price" />
            )}
            <img className="card__img" alt="thẻ phim" src={src} />
          </div>
        }
        actions={[
          <Button
            className="card__btn"
            shape="round"
            icon={<img src={ticket} alt="ticket" />}
            size="large"
          >
            MUA VÉ
          </Button>,
        ]}
      >
        <Meta
          title={<span className="bold">{name}</span>}
          description={
            <div className="description">
              <span>
                <span className="bold">Thể loại:</span>
                {type}
              </span>
              <span>
                <span className="bold">Thời lượng:</span>
                {time}
              </span>
              <span>
                <span className="bold">Khởi chiếu:</span>
                {start}
              </span>
            </div>
          }
        />
      </Card>
    </div>
  );
}

export default FilmCard;
