import React from "react";
import { Col, Row } from "../components/Grid";
import plus from "../images/plus.svg"

function Post() {
  return (
    <Row>
      <Col size="md-12">
        <div className="plus">
          <img src={plus} alt="add sighting"/>
        </div>
      </Col>
    </Row>
  );
}

export default Post;
