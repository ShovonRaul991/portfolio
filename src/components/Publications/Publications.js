import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublicationCard from "./PublicationCard";
import deepfakePaper from "../../Assets/Projects/WhatsappChatAnalyser.png"
import aiEthicsPaper from "../../Assets/Projects/WhatsappChatAnalyser.png"

function Publications() {
  return (
    <Container fluid className="publications-section">
      <h2 className="section-title">Research Publications</h2>
      <Row>
        <Col md={4} className="pub-card">
          <PublicationCard
            imgPath={deepfakePaper}
            title="Multi-Attentional Deepfake Detection"
            authors="John Doe, Jane Smith"
            description="A novel deep learning approach integrating multi-attentional features for detecting AI-generated deepfakes."
            journal="IEEE Transactions on AI"
            year="2024"
            paperLink="https://ieeexplore.ieee.org/document/1234567"
            journalLink="https://ieee.org"
          />
        </Col>
        <Col md={4} className="pub-card">
          <PublicationCard
            imgPath={aiEthicsPaper}
            title="Ethical AI: Challenges and Future Directions"
            authors="Alice Johnson, Bob Williams"
            description="Discusses the ethical challenges in AI development and provides a framework for responsible AI."
            journal="Nature AI"
            year="2023"
            paperLink="https://nature.com/articles/ai-ethics"
            journalLink="https://nature.com"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Publications;
