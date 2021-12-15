import React from 'react';
import { Nav } from 'react-bootstrap';

export default function MenuItem({ item }) {
    return (
        <Nav.Link href="/" className="text-uppercase fw-bold">
            {item}
        </Nav.Link>
    );
}
