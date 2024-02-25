import React from "react";
import "./products.css";
import { data } from "./Data";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  return (
    <div className="products">
      <h1>Products</h1>

      <Row>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={2} sm={1}>
          <Card className="cards" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={data[0].img} />
            <Card.Body>
              <Card.Title>card Title</Card.Title>
              <Card.Text>Hi I am Olefile</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {data.map((item) => {
        return (
          <div>
            <Card>
              <Card.Img
                src={item.img}
                variant="top"
                style={{ width: "10rem" }}
                alt={item.alt}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
