import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Sidebar extends Component {
  render() {
    return (
      <>
        <Col sm={2}>
          <div className="kotak sidebar">menu sidebar</div>
        </Col>
      </>
    );
  }
}
export default Sidebar;
