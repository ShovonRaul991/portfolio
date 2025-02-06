import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillAwardFill } from "react-icons/bs";

function CertificationCard(props) {
  return (
    <Card className="certification-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="certificate-img" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Issued by: {props.issuer}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text>
          <strong>Date:</strong> {props.date}
        </Card.Text>

        {/* Button to view certificate */}
        {props.certLink && (
          <Button variant="success" href={props.certLink} target="_blank">
            <BsFillAwardFill /> &nbsp; View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
