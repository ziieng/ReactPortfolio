import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

function NoMatch() {
  return (
    <Container className="mt-5">
    <Row>
        <Col size="lg-4" className="my-5 p-3 pgBody shadow text-center">
          <h1>¯\_(ツ)_/¯</h1>
          <h3 className="my-2">Page Not Found</h3>
          <Link to="/">Return to home?</Link>
      </Col>
    </Row>
  </Container>
  );
}

export default NoMatch;
