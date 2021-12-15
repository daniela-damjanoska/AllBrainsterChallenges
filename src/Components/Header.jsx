import React from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import MenuItem from './MenuItem';

export default function Header() {
    return (
        <>
            <Navbar
                className="d-flex
border-bottom
justify-content-between
align-items-center
pt-4 px-3"
            >
                <Navbar.Brand href="/" className="">
                    <img src="./logo.png" alt="logo" />
                </Navbar.Brand>
                <Nav className="menu">
                    <MenuItem item={'home'} />
                    <MenuItem item={'bikes'} />
                    <MenuItem item={'gear'} />
                    <MenuItem item={'parts'} />
                    <MenuItem item={'tires'} />
                    <MenuItem item={'service-info'} />
                    <MenuItem item={'catalogues'} />
                    <MenuItem item={'contact'} />
                </Nav>
                <Nav>
                    <Nav.Link href="/">
                        <i className="fas fa-search"></i>
                    </Nav.Link>
                    <Nav.Link href="/">
                        <i className="fas fa-shopping-bag"></i>
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Row>
                <Col>
                    <h1 className="py-3 border-bottom">Bikes</h1>
                </Col>
            </Row>
        </>
    );
}
