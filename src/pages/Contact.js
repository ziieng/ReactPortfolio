import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}


export default Home;
