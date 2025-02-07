import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import BadgeCard from "./BadgeCard";
import Particle from "../Particle";

const badgeEmbeddings = [
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6224a73c-0f2b-4204-9aa5-11480238d8da" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="074cba13-3a2e-4832-9921-6ca331557016" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="4ca37e97-b9dc-42c0-a84f-16298212ce93" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="04e34dde-3197-4557-8e55-fd668dbb990d" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="047ece1b-8045-47e3-b647-3b4db07946dd" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="cfe9c0f8-bb78-406e-a9d5-e96ac9ac6a19" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="8ce46a42-a7ed-44df-8989-c5d8487a5da4" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="165a3f3c-c914-472f-8507-1d3a24989ace" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b59d3830-475d-4b55-98ae-9b5c45fba303" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7b2d861d-65ce-411f-9069-d2ad6ef47701" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="562a5a6d-7d96-4a89-a65c-8f2e3fa9cc9c" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="c2699b74-59d1-475c-8496-7eb8a5e594d3" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="63fd1cd5-2f33-4610-b9d5-a4b6bc8b4344" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="40577640-828c-48b8-aeda-3f4465bd4dca" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="5d12e040-45fb-4353-8b1d-a5152837ed65" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`,
  `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f249b0ea-96f9-473f-bb4b-2317032531e0" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>`
];


function Achievements() {
  return (
    <Container fluid className="certifications-section">
      <container>
        <h2 className="section-title">Badges</h2>
        <Particle />
          <div className="badge-list">
        <h2 className="section-title">Digital Badges</h2>
        <Row className="badge-cards-container">
          {badgeEmbeddings.map((embedCode, index) => (
            <Col md={4} className="badge-card" key={index}>
              <BadgeCard badgeEmbedCode={embedCode} />
            </Col>
          ))}
        </Row>
      </div>
      </container>
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
                certLink="https://drive.google.com/file/d/13uRzwP9Y3jFHiwJ7rNxFwrU3PWpQs6oR/view?usp=drive_link"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="AWS Skill UP"
                issuer="Andhra Pradesh STate Skill Development Corporation"
                date="December 13, 2021"
                description=" Gained Skills in AWS"
                certLink="https://drive.google.com/file/d/13LcJ7iNBi3S9yGzgFIeeq3bJgDFCzW-k/view?usp=drive_link"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Machine Learning - Linear Regression"
                issuer="Leaps Analyttica"
                date="June 26, 2021"
                description=" Gained Skills in Linear Regression in ML"
                certLink="https://drive.google.com/file/d/163DZWzPdFN0oOgdRR5LgEGJdDJtA0_Tj/view?usp=drive_link"
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
                certLink="https://drive.google.com/file/d/14TczuYNGKbGhYl03aleqB241vKExoYEa/view?usp=drive_link"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="The Joy of Computing using Python"
                issuer="NPTEL"
                date="April , 2022"
                description=" Gained Skills in Python Basics"
                certLink="https://drive.google.com/file/d/16QtMqqpPkWfmIOwK1JnxcmIyWRPwJETu/view?usp=drive_link"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="ASP.NET Core in .NET 6: Dependency Injection"
                issuer="Linkedin Learning"
                date="May 17, 2023"
                description=" Gained Skills in ASP.Net Dependency Injection"
                certLink="https://drive.google.com/file/d/14B_HNGih9mOxpE5WkAhGWrCV6AtYlpkW/view?usp=drive_link"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Deploying ASP.NET Core Applications"
                issuer="Linkedin Learning"
                date="May 22, 2023"
                description=" Gained Skills in ASP.Net Web API deployment"
                certLink="https://drive.google.com/file/d/160e2kedFenjDwxc8oYDNIQj5OrJTAuuF/view?usp=drive_link"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Level Up: Advanced SQL"
                issuer="Linkedin Learning"
                date="May 23, 2023"
                description=" Gained Skills in Database and SQLs"
                certLink="https://drive.google.com/file/d/15uxJszSLGbHv9r8S6ukqm25gee29rENA/view?usp=drive_link"
              />
            </Col>
            <Col md={4} className="cert-card">
              <CertificationCard
                title="Managing App Secrets in .NET Core"
                issuer="Linkedin Learning"
                date="May 22, 2023"
                description="secret Json file and environment variables management in ASP.Net Web API"
                certLink="https://drive.google.com/file/d/13OIO9NgV3mTTGcaa3mzs3ZXZ7Cnj96Ej/view?usp=drive_link"
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
