import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import faceRecognition from "../../Assets/Projects/FaceRecognition.png";
import ftpServer from "../../Assets/Projects/FtpServer.png";
import wpChatAnalyser from "../../Assets/Projects/WhatsappChatAnalyser.png";
import addressbook from "../../Assets/Projects/addressbook.jpg";
import CorporateClassifieds from "../../Assets/Projects/MarketPlaceApi.jpg";

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wpChatAnalyser}
              isBlog={false}
              title="Whatsapp Group Chat Analyzer"
              description="Analyze WhatsApp group chats to understand user behavior and sentiment. This project provides detailed insights and comprehensive reports, helping improve communication and engagement within the group by identifying key trends, user interactions, and overall sentiment. Ideal for community managers, businesses, and researchers."
              ghLink="https://github.com/ShovonRaul991/Whatsapp-Sentiment-Analyzer"
              demoLink="https://a2zwhatsapp.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CorporateClassifieds}
              isBlog={false}
              title="Corpoate Classifieds API"
              description="The Corporate Classifieds API, built with ASP.NET, enables users to buy, sell, or rent items within a corporate environment. This project streamlines the process of listing and searching for classifieds, providing a secure and efficient platform for corporate users to manage their transactions seamlessly."
              ghLink="https://github.com/ShovonRaul991/CorporateClassifieds"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ftpServer}
              isBlog={false}
              title="FTP Server using C "
              description="This project is a simple FTP (File Transfer Protocol) client and server 
written in C. The client can send requests to upload, download, or delete 
files on the server. The application facilitates basic file management 
operations over a network connection"
              ghLink="https://github.com/ShovonRaul991/FTP_using_C"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceRecognition}
              isBlog={false}
              title="Face Recognition using OpenCV"
              description="Develop a face detection and recognition system using Haar-Cascade Classifier, OpenCV, Python, and an IP camera. This project captures real-time video, detects faces, and recognizes individuals, providing a robust solution for security and surveillance applications. Ideal for enhancing monitoring systems with efficient and accurate facial recognition capabilities."
              ghLink="https://github.com/ShovonRaul991/Face-Recognition-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={addressbook}
              isBlog={false}
              title="AddressBook Application"
              description="Developed a full-stack application with a responsive HTML, CSS, and JavaScript frontend, and a robust ASP.NET backend Web API. This project seamlessly integrates user-friendly interfaces with powerful server-side functionality, providing a comprehensive solution for dynamic web applications. Ideal for enhancing user experience and backend efficiency."
              ghLink="https://github.com/ShovonRaul991/AddressBookFullstack"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
