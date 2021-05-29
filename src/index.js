import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import Bottom from "./components/Bottom";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Top from "./components/Top";
import "./scss/style.scss";

const HelloWorld = () => {
  return (
    <>
      <Container fluid>
        <Top />
        <Row className="justify-content-md-center">
          <Sidebar />
          <Content />
        </Row>
        <Bottom />
      </Container>
    </>
  );
};
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
