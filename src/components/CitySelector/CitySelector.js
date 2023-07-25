import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const onKeyDown = (event) => {
    if (event.keyCode == 13) {
      onSearch(city);
    }
  };
  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <FormControl
            placeholder="Enter city"
            onChange={(event) => setCity(event.target.value)}
            value={city}
            onKeyDown={onKeyDown}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* don't forget to edit our function  */}
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
