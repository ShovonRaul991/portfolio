import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shovon Raul </span>
            from <span className="purple"> Contai, West Bengal, India.</span>
            <br />
            I am currently pursuing M.Tech from IIEST, Shibpur
            <br />
            I'm a passionate coder with an interest in innovation and a knack for 
            learning.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Audio Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shovon Raul</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
