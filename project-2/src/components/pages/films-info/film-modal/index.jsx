import { Modal, Button, List } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import "./styles.scss";

function FilmModal(props) {
  const isModalVisible = props.isModalVisible;
  const handleCancel = props.handleCancel;
  const { days } = props.movieChosen;
  const dispatch = useDispatch();
  const [city, setCity] = React.useState();
  const [showTime, setShowTime] = React.useState();
  const [time, setTime] = React.useState();

  let calendar = [];
  for (let i = 0; i < 10; i++) {
    let today = moment().add(i, "days");
    calendar.push(today.format("ll"));
  }

  const calendarShow = calendar.map((day) => {
    return (
      <Button className="day__btn" onClick={() => filterCity(day)}>
        {day}
      </Button>
    );
  });

  function filterCity(day) {
    setCity("");
    setShowTime("");
    setTime("");
    const places = days.find((item) => item.day === day);
    if (places) {
      setCity(places.places);
    }
  }

  function filterShowTime(showTime) {
    setShowTime(showTime);
    setTime("");
  }

  return (
    <Modal
      className="film-modal-dialog"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width={1300}
    >
      <div className="calendar">{calendarShow}</div>
      <List
        className="calendar__grid"
        grid={{ gutter: 70, column: 5 }}
        dataSource={city}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            onClick={() => {
              filterShowTime(item.showTime);
            }}
            actions={[<Button className="calendar__item">{item.city}</Button>]}
          ></List.Item>
        )}
      />

      <List
        className="calendar__grid"
        grid={{ gutter: 70, column: 5 }}
        dataSource={showTime}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            onClick={() => setTime(item.time)}
            actions={[
              <Button className="calendar__item">{item.theater}</Button>,
            ]}
          ></List.Item>
        )}
      />

      <List
        className="calendar__grid"
        grid={{ gutter: 70, column: 5 }}
        dataSource={time}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            actions={[<Button className="calendar__item">{item}</Button>]}
          ></List.Item>
        )}
      />
    </Modal>
  );
}

export default FilmModal;
