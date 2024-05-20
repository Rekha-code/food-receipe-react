import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Gallery = ({ photos }) => {
  return (
    <div>
      <h1>Gallery</h1>
      <Container>
        <Row>
          {photos.map((photo, index) => (
            <Col key={index} sm={6} md={4}>
              <Card>
                <Card.Img src={photo.url} />
                <Card.Body>
                  <Card.Title>{photo.name}</Card.Title>
                  <Card.Text>{photo.description}</Card.Text>
                </Card.Body>
                <Button variant="secondary" className="btn">
                  Read More...
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
