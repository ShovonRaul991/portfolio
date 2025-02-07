import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PublicationCard from "./PublicationCard";
// import deepfakePaper from "../../Assets/deepfake-paper.jpg";
// import aiEthicsPaper from "../../Assets/ai-ethics-paper.jpg";

function Publications() {
  return (
    <Container fluid className="publications-section">
      <Particle />
      <Container>
        <h1 className="section-title">Research Publications</h1>
        <h2 className="project-heading">
          My Recent <strong className="purple">Publications</strong>
        </h2>
        <p className="section-description">
          Explore my latest contributions to AI and deepfake detection research.
        </p>
        
        <Row>
          <Col md={6} className="pub-card">
            <PublicationCard
              // imgPath={deepfakePaper}
              title="A Review on Intelligent Health Care System Using Learning Methods"
              authors="Shovon Raul, Subhasis Das, Ch.S.V.V.S.N.Murty, B.S. Kiruthika Devi "
              description="There are discussions in detail the various systems for providing high 
quality health services."
              journal="IOS Press"
              year="March 20, 2023"
              paperLink="https://www.academia.edu/98807850/A_Review_on_Intelligent_Health_Care_System_Using_Learning_Methods"
              
            />
          </Col>
          
          <Col md={6} className="pub-card">
            <PublicationCard
              // imgPath={aiEthicsPaper}
              title="DDT-SegNet : Hybrid Video Deepfake Detection
Approach using Diffusion and Temporal
Convolution"
              authors="Shovon Raul, Dr. Tamal Pal"
              description="A hybrid
model which integrates Denoising Diffusion Probabilistic Models
(DDPM) and Temporal Convolutional Networks (TCN) to effectively
identify and segment fake portions within videos."
              journal="AIIOT- 2025"
              year="1st January, 2025"
              paperLink="https://drive.google.com/drive/u/0/folders/1wC406SQbM-qwoLSgi9OoIIVuCFtlGAHR/view"
              journalLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
