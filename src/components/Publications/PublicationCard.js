import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBook, BsGlobe } from "react-icons/bs";

function PublicationCard(props) {
  return (
    <Card className="publication-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="publication-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.authors}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text>
          <strong>Published in:</strong> {props.journal} <br />
          <strong>Year:</strong> {props.year}
        </Card.Text>

        {/* Link to the paper */}
        {props.paperLink && (
          <Button variant="primary" href={props.paperLink} target="_blank">
            <BsBook /> &nbsp; View Paper
          </Button>
        )}

        {/* Link to DOI or Journal */}
        {props.journalLink && (
          <Button
            variant="success"
            href={props.journalLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGlobe /> &nbsp; Journal
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default PublicationCard;
