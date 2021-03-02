import React, { useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa"

function PortCard(props) {
  // ({"title":"title",
  // "description":["p","p"],
  // "technologies":["t","t"],
  // "images":["ref","ref"]
  // "deployed":"url",
  // "repo":"url"})
  const [spotlight, setSpotlight] = useState(0)
  const carousel = props.images
  const project = props.project

  function cycleImg(dir) {

  }

  return (
    <Card className="portCard mx-md-auto my-2" style={{ backgroundColor: "#ffffff" }}>
      <Card.Body>
        <h3 class="card-title">{project.title}</h3>
        <Card.Img className="mb-2" src={project.images[spotlight].url} alt={project.images[spotlight].alt} />
        {project.description.map((text) => {
          return <Card.Text>{text}</Card.Text>
        })}
        {project.technologies[0] && (<>
          <Card.Text className="font-weight-bold mb-0">Key technologies:</Card.Text>
          <Card.Text>{project.technologies.map((tech) => {
            return <span className="mr-2 d-inline-block"><FaRegStar /> {tech} </span>
          })}</Card.Text>
        </>)}
        <hr className="mt-0" />
        <div className="linkBox mx-auto">
          <a target="_blank" href={project.deployed} rel="noopener noreferrer" className="btn btn-outline-info mx-1">Live App</a>
          <a target="_blank" href={project.repo} rel="noopener noreferrer" className="btn btn-outline-info mx-1">GitHub Repo</a>
        </div>
      </Card.Body>
    </Card>
  );
}


export default PortCard;
