import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function Cards({ name, price, image }) {
    return (
        <Col xs={4} className="mb-4">
            <Card className="h-100">
                <div className="img-wrapper text-center">
                    <img
                        src={`/img/${image}.png`}
                        className="p-3"
                        alt="bikes"
                    />
                </div>
                <Card.Body>
                    <Card.Title className="h6 fw-bold">{name}</Card.Title>
                    <Card.Text>{price} $</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
