import React from "react";
import { Row, Col } from "react-bootstrap";
import WeatherCard from "../WeatherCard/WeatherCard";

const WeatherList = ({ weathers }) => {
  return (
    <Row>
      {weathers.map(({ main, dt, weather }) => (
        <Col key={dt}>
          <WeatherCard
            temp_max={main.temp_max}
            temp_min={main.temp_min}
            dt={dt * 1000}
            main={weather[0].main}
            icon={weather[0].icon}
          />
        </Col>
      ))}
    </Row>
  );
};

export default WeatherList;
