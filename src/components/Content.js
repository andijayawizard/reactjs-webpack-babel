import React, { Component } from "react";
import { Breadcrumb, Button, Col, Form, Image } from "react-bootstrap";
import Todo from "./todo/Todo";
// import * as ReactBootstrap from "react-bootstrap";

export default class Content extends Component {
  render() {
    return (
      <>
        <Col>
          <div className="content">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First name..." />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name..." />
                </Col>
                <Col>
                  <Button>Submit</Button>
                </Col>
              </Form.Row>
            </Form>
            <Todo />
            <Image src="https://dummyimage.com/170x180/000/fff.png&text=TEST123" />
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Profile</Breadcrumb.Item>
              <Breadcrumb.Item active>Test123</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Col>
      </>
    );
  }
}
