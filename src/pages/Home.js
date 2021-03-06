import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FaGithub, FaFileAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col size="lg-10" className="my-5 p-3 pgBody shadow">
          <Row className="d-flex">
            <Col size="md-8" className="order-xs-1 order-md-0">
              <h1 className="display-4 text-center">Zii Engelhardt</h1>
              <p className="lead text-center">Web developer specializing in intuitive user interface design.</p>
              <p>With my unusual background and experience working with users at every level of the "tech-savvy"
            spectrum, I am ready to help your company build a better way to connect with your customers. <strong>If customers can't effectively interact with your products, are you effectively interacting with your customer?</strong></p>
              <div className="row mx-auto">
                <div className="col-md-5">
                  <p className="mb-0">Technologies I've worked in:</p>
                  <ul className="mt-0">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>jQuery</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML5</li>
                  </ul>

                </div>
                <div className="col-md-7 mt-3">
                  <dl className="row">
                    <dt className="col-sm-3">Email:</dt>
                    <dd className="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="mailto:ziiengelhardt@gmail.com"> < FaEnvelope /> ziiengelhardt@gmail.com</a>
                    </dd>

                    <dt className="col-sm-3">GitHub:</dt>
                    <dd className="col-sm-9">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ziieng">< FaGithub /> github.com/ziieng</a>
                    </dd>

                    <dt className="col-sm-3">LinkedIn:</dt>
                    <dd className="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ziieng/"><FaLinkedin /> linkedin.com/in/ziieng/</a>
                    </dd>

                    <dt className="col-sm-3">Resume:</dt>
                    <dd className="col-sm-9"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1PLFvmRkLbO74XjR9L6c9dn1vp06lsfV9-lXtM_DrgCk/export?format=pdf"><FaFileAlt /> PDF available here.</a>
                    </dd>
                  </dl>
                </div>
              </div>
            </Col>
            <div className="col-md-4 my-2 order-xs-0 order-md-1 profileImg">
              <img src="assets/BusinessZii.jpg" className="img-fluid rounded"
                alt="Zii, a nerdy girl with short, curly brown hair and rectangular glasses. Her hair is buzzed very short on the sides, and is parted toward her left side." />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}


export default Home;
