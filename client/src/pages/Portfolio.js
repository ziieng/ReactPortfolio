import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

function Portfolio(props) {
  const [projects, setProjects] = useState({})
  const [spotlight, setSpotlight] = useState({})

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              Portfolio
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Synopsis</h1>
            <p>
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Authors</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Portfolio;
