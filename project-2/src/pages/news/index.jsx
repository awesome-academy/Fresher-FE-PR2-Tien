import { useSelector } from "react-redux";
import "./styles.scss";

function News() {
  const news = useSelector((state) => state.new.news);
  return <div className="news">news</div>;
}

export default News;
