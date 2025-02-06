import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";

function Achievements() {
  return (
    <Container fluid className="certifications-section">
      <br />
      <h2 className="section-title">Technical Certifications</h2>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I got.
        </p>
        <div className="cert-cards-wrapper">
          <Row className="cert-cards-container">
            <Col md={4} className="cert-card">
              <CertificationCard
                title="IBM AI Developer"
                issuer="Coursera IBM Certificate"
                date="September 28, 2020"
                description="I have completed certificates in the following courses: Introduction to Computer Vision and Image Processing, Introduction to AI, Building AI Applications with Watson APIs, Building AI Powered Chatbots Without Programming, Getting Started with AI using IBM Watson, and Python for Data Science, AI & Development."
                certLink="https://coursera.org/share/82a6005bd7d8282553153d876a760377"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="The Bits and Bytes of Computer Networking"
                issuer="Coursera Google Certificate"
                date="August 29, 2020"
                description=" Gained Skills are Domain Name System (DNS) Ipv4 Network Model Troubleshooting"
                certLink="https://coursera.org/share/7389f4acd9a08ff8d1f62ac66457ff87"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="The Bits and Bytes of Computer Networking"
                issuer="Coursera Google Certificate"
                date="August 29, 2020"
                description=" Gained Skills are Domain Name System (DNS) Ipv4 Network Model Troubleshooting"
                certLink="https://coursera.org/share/7389f4acd9a08ff8d1f62ac66457ff87"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="The Bits and Bytes of Computer Networking"
                issuer="Coursera Google Certificate"
                date="August 29, 2020"
                description=" Gained Skills are Domain Name System (DNS) Ipv4 Network Model Troubleshooting"
                certLink="https://coursera.org/share/7389f4acd9a08ff8d1f62ac66457ff87"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Achievements;
