import { useSelector } from "react-redux";
import TheaterTable from "../../components/pages/theater-info/theater-table/index";
import LogoTitle from "../../components/pages/main/logo-title/index";
import "./styles.scss";

const backgroundSrc = "/assets/img/theater-background/Untitled-1.png";

const titleSrc = "/assets/logo/logo-title/h3_theater.gif";

function TheaterInfo() {
  const theaters = useSelector((state) => state.theater.theaters);
  let theaterHidden = true;

  function setTheaterHidden() {
    theaterHidden = false;
  }

  return (
    <div className="theater__info container">
      <img
        className="theater__info__background"
        src={backgroundSrc}
        alt="background"
      />

      <TheaterTable theaters={theaters} setTheaterHidden={setTheaterHidden} />

      <div
        className="theater__slide"
        style={{ display: theaterHidden ? "block" : "none" }}
      >
        <LogoTitle src={titleSrc} />
      </div>
    </div>
  );
}

export default TheaterInfo;
