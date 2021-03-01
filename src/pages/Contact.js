import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col size="lg-10" className="my-5 p-3 pgBody shadow">
          <h1 className="text-center">Contact</h1>
          <hr />
          <dl class="row mx-auto">
            <dt class="col-sm-3">Email:</dt>
            <dd class="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="mailto:ziiengelhardt@gmail.com"> <i class="fa fa-envelope"
              aria-hidden="true"></i> ziiengelhardt@gmail.com</a>
            </dd>

            <dt class="col-sm-3">GitHub:</dt>
            <dd class="col-sm-9">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ziieng"><i class="fa fa-github" aria-hidden="true"></i>
                        github.com/ziieng</a>
            </dd>

            <dt class="col-sm-3">LinkedIn:</dt>
            <dd class="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ziieng/"><i
              class="fa fa-linkedin-square" aria-hidden="true"></i>
                        linkedin.com/in/ziieng/</a></dd>

            <dt class="col-sm-3">Phone:</dt>
            <dd class="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1PLFvmRkLbO74XjR9L6c9dn1vp06lsfV9-lXtM_DrgCk/export?format=pdf"><i
              class="fa fa-phone-square" aria-hidden="true"></i> Phone number included
                        in resume.</a>
            </dd>
          </dl>
        </Col>
      </Row>
    </Container>
  );
}


export default Home;
