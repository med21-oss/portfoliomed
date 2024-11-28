import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="t2">
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          
          
            
        
          <div className="t4">
          
            <p className="para">
            <h1 style={{ fontSize: "3.6em" }}>
              <span className="purple"> Profil </span> 
            </h1>
            Je suis étudiant en 3ème année d'Ingénierie des Systèmes Informatiques (Computer Engineering).<br />
               J’ai des compétences en développement frontend, notamment en HTML, CSS et JavaScript <i>
                <b className="purple"> HTML, CSS et JavaScript  </b>
              </i> 
              ainsi qu’en conception de sites web avec  <b className="purple"> figma  </b>
              Côté backend, je maîtrise
              <i>
                <b className="purple"> PHP et  sql  </b>
              </i>.
              <br />
              <br />
              Je dispose de notions de base en programmation orientée objet avec 
               
              <i>
                <b className="purple"> Python et  Java{" "}</b>
                
                et utilise  <b className="purple">StarUML</b>pour la conception UML.
                 
                
              </i>
              <br />
              
              J'ai également des connaissances en réseaux, notamment avec ."
              <i>
                <b className="purple">
                  {" "}
                  Cisco Packet Tracer
                </b>
              </i>
              </p>
              </div>
            
              
          
         
        
        
          <div className="t3">
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/med21-oss"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/med-benhmida"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             </ul>
          </Col>
          </div>
        </Row>
        
      </Container>
    </Container>
    </div>
  );
}
export default Home2;
