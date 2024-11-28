import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           Mes travaux  <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="pong "
              description="Jeu (PONG) avec Python :"
              ghLink="https://github.com/med21-oss/jeu-pong-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="VALORANT-strategy-maker-partie-d-un-projet"
              description="Site statique pour dfaire des strategies."
              ghLink="https://github.com/med21-oss/valorant-strategy-maker-partie-d-un-projet"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Analyser-et-visualiser-des-ventes-ssms-ssis-powerbi."
              description="Analyser-et-visualiser-des-ventes-ssms-ssis-powerbi."
              ghLink="https://github.com/med21-oss/Analyser-et-visualiser-des-ventes-ssms-ssis-powerbi-"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
