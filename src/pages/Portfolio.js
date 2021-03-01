import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container, Card } from "react-bootstrap";
import PortCard from "../components/PortCard"

function Portfolio(props) {
  const projects = require("../projects.json")
  // ({"title":"title",
  // "description":["p","p"],
  // "technologies":["t","t"],
  // "images":["ref","ref"]
  // "deployed":"url",
  // "repo":"url"})
  const [spotlight, setSpotlight] = useState({})

  return (
    <Container className="my-5">
      <Row>
        <Col size="lg-10" className="my-5 p-3 pgBody shadow">
          <h1 className="text-center">Portfolio</h1>
          <hr />
          <main class="row">
            {projects.map((project) => {
              return <PortCard project={project} />
            })}
          </main>
        </Col>
      </Row>
    </Container>
  );
}


export default Portfolio;
