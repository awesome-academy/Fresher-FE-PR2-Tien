import { Card } from "antd";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./styles.scss";

const { Meta } = Card;

const logoPrice = "/assets/logo/logo-price/ribon-49k.png";

const ticket = "/assets/icons/bg-cate-booking.png";

function FilmCard() {
  return (
    <div className="film-card">
      <Card
        className="card"
        cover={
          <div>
            <img className="ribbon" src={logoPrice} alt="ribbon price" />
            <img
              className="card__img"
              alt="thẻ phim"
              src="/assets/img/movies-incoming/_m-tr_i-bu_c-poster_1.jpg"
            />
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
          title={<span className="bold">ĐÊM TRÓI BUỘC</span>}
          description={
            <div className="description">
              <span>
                <span className="bold">Thể loại:</span> Hành Động
              </span>
              <span>
                <span className="bold">Thời lượng:</span> 110 phút
              </span>
              <span>
                <span className="bold">Khởi chiếu:</span> 16-04-2021
              </span>
            </div>
          }
        />
      </Card>
    </div>
  );
}

export default FilmCard;
