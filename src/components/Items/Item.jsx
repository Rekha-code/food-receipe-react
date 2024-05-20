import React from "react";
import "./Item.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Item = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={12} sm={2}>
            <Card>
              <Card.Img src={props.image} className="card-img" />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
              </Card.Body>
              <Button variant="secondary" className="btn">
                Read More...
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Item;
