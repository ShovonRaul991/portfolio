import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import {
  SiLeetcode,
  SiHackerrank,
  SiHackerearth,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
  SiCodingninjas
} from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Coding Platforms</strong> I use
        </h1>
        <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/ShovonRaul991/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/ShovonRaul991"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiHackerrank />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerearth.com/@shovon6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiHackerearth />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/ShovonRaul991"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodeforces />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/ShovonRaul991"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodechef />
                </a>
              </li>
              <li className="social-icons">
            <a
              href="https://www.geeksforgeeks.org/user/shovonf3ve/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <SiGeeksforgeeks />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.naukri.com/code360/profile/shovonraul"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <SiCodingninjas />
            </a>
          </li>
            </ul>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>

        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
