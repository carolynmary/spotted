import React from "react";
import MapCom from "../components/MapCom/MapCom"
import { Col, Row } from "../components/Grid";

function Map() {
  return (
    <>
      <Row>
        <Col size="md-12">
          <MapCom />
        </Col>
      </Row>
    </>
  );
}

export default Map;
