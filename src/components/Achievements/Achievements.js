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
                title="Using Python to Access Web Data"
                issuer="Coursera | University of Michigan"
                date="September 6, 2020"
                description=" I have gained proficiency in extracting data from strings using regular expressions, 
                understanding the protocols web browsers use to retrieve documents and web applications, 
                retrieving data from websites and APIs using Python, and working with XML (eXtensible Markup Language) data."
                certLink="https://www.coursera.org/account/accomplishments/verify/AGWFRLN7HUKG"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="10th Rank in FutureSkills Prime Hackfest - ML Challenge 2021"
                issuer="FutureSkills"
                date="October 3rd, 2021"
                description=" Gained Skills in Machine Learing Domain in Linear Regression"
                certLink="https://drive.google.com/file/d/1RcLjHu9YocMfh5CojFU-Gikb_fG1Didj/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="AWS Skill UP"
                issuer="Andhra Pradesh STate Skill Development Corporation"
                date="December 13, 2021"
                description=" Gained Skills in AWS"
                certLink="https://drive.google.com/file/d/13LcJ7iNBi3S9yGzgFIeeq3bJgDFCzW-k/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Machine Learning - Linear Regression"
                issuer="Leaps Analyttica"
                date="June 26, 2021"
                description=" Gained Skills in Linear Regression in ML"
                certLink="https://drive.google.com/drive/u/0/folders/1wC406SQbM-qwoLSgi9OoIIVuCFtlGAHR/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="HackerRank Python (Basic) Certificate"
                issuer="HackerRank"
                date="June 26, 2021"
                description=" Gained Skills in Python Basics"
                certLink="https://www.hackerrank.com/certificates/a50f74970fcf"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="MTA Python"
                issuer="Microsoft"
                date="November 27, 2020"
                description=" Gained Skills in Python Basics"
                certLink="https://drive.google.com/drive/u/0/folders/1wC406SQbM-qwoLSgi9OoIIVuCFtlGAHR/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="The Joy of Computing using Python"
                issuer="NPTEL"
                date="April , 2022"
                description=" Gained Skills in Python Basics"
                certLink="https://drive.google.com/drive/u/0/folders/1wC406SQbM-qwoLSgi9OoIIVuCFtlGAHR/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="ASP.NET Core in .NET 6: Dependency Injection"
                issuer="Linkedin Learning"
                date="May 17, 2023"
                description=" Gained Skills in ASP.Net Dependency Injection"
                certLink="https://drive.google.com/drive/u/0/folders/1wC406SQbM-qwoLSgi9OoIIVuCFtlGAHR/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Deploying ASP.NET Core Applications"
                issuer="Linkedin Learning"
                date="May 22, 2023"
                description=" Gained Skills in ASP.Net Web API deployment"
                certLink="https://drive.google.com/drive/u/0/folders/1wC406SQbM-qwoLSgi9OoIIVuCFtlGAHR/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Level Up: Advanced SQL"
                issuer="Linkedin Learning"
                date="May 23, 2023"
                description=" Gained Skills in Database and SQLs"
                certLink="https://drive.google.com/drive/u/0/folders/1wC406SQbM-qwoLSgi9OoIIVuCFtlGAHR/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Managing App Secrets in .NET Core"
                issuer="Linkedin Learning"
                date="May 22, 2023"
                description="secret Json file and environment variables management in ASP.Net Web API"
                certLink="https://drive.google.com/drive/u/0/folders/1wC406SQbM-qwoLSgi9OoIIVuCFtlGAHR/view"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Introduction to CSS3"
                issuer="Coursera | University of Michigan"
                date="September 4, 2020"
                description=" Gained css skills"
                certLink="https://coursera.org/share/bb2b86455fb156970cf648316fc0d0f3"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Neural Networks and Deep Learning"
                issuer="Coursera | DeepLearning.ai"
                date="August 23, 2020"
                description=" Gained Skills in Basic Neural Networks Concept"
                certLink="https://www.coursera.org/account/accomplishments/verify/5G584JKESLJV"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Crash Course on Python"
                issuer="Coursera | Google Certification"
                date="August 23, 2020"
                description=" Gained Skills in Basic Python"
                certLink="https://coursera.org/share/e52687345b2e991c52fb5e896d72347d"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Python Data Structures"
                issuer="Coursera | University of Michigan"
                date="July 19, 2020"
                description=" Gained Skills in Basic Python Data Structures"
                certLink="https://coursera.org/share/ce502eec86b2be48ff0a63e2b80da3ef"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Learn to Program: The Fundamentals"
                issuer="Coursera | University of Toronto"
                date="May 27, 2020"
                description=" Learn to Program using fundamentals concepts"
                certLink="https://coursera.org/share/a6fcc8dd46dbe93e4f7cc40cda66bbc0"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Medical Diagnosis using Support Vector Machines"
                issuer="Coursera | Projects"
                date="July 10, 2020"
                description=" Learn to use SVM for Healthcare data"
                certLink="https://coursera.org/share/a0ea872a8af7134f5e533532506fe9e0"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Introduction to HTML5"
                issuer="Coursera | University of Michigan"
                date="July 22, 2020"
                description=" Gained Skills in Basic HTML5"
                certLink="https://coursera.org/share/266bb6254750500c9f139f32cb1020ed"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Algorithms, Data Collection, and Starting to Code"
                issuer="Coursera | University of Colorado System"
                date="May 26, 2020"
                description=" Gained Skills in Basic Algorithms and Data Structure"
                certLink="https://coursera.org/share/db2d5bbce6c40dd9cb8b6198b051a7cb"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Achievements;
