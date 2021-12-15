import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FooterItem from './FooterItem';

export default function Footer() {
    return (
        <Row className="bg-light py-5 footer">
            <Col className="border-end social">
                <h3 className="fw-bold h5 pb-4">Social share</h3>
                <a
                    href="https://www.facebook.com/"
                    className="me-2"
                    target="blank"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    href="https://www.instagram.com/"
                    className="me-2"
                    target="blank"
                >
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/" className="me-2" target="blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/" target="blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </Col>
            <Col className="border-end">
                <h3 className="fw-bold h5">Event info</h3>
                <ul>
                    <FooterItem content={'Enter Now'} />
                    <FooterItem content={'Event Info'} />
                    <FooterItem content={'Course Maps'} />
                    <FooterItem content={'Race Pack'} />
                    <FooterItem content={'Result'} />
                    <FooterItem content={'FAQs'} />
                    <FooterItem content={'Am I Registered?'} />
                </ul>
            </Col>
            <Col className="border-end">
                <h3 className="fw-bold h5">Registration</h3>
                <ul>
                    <FooterItem content={'Volunteers'} />
                    <FooterItem content={'Gallery'} />
                    <FooterItem content={'Press'} />
                    <FooterItem content={'Results'} />
                    <FooterItem content={'Privacy Policy'} />
                    <FooterItem content={'Service Plus'} />
                    <FooterItem content={'Contacts'} />
                </ul>
            </Col>
            <Col>
                <h3 className="fw-bold h5">Schedule</h3>
                <ul>
                    <FooterItem content={'Gallery'} />
                    <FooterItem content={'About'} />
                    <FooterItem content={'Videos'} />
                    <FooterItem content={'Results'} />
                    <FooterItem content={'FAQs'} />
                    <FooterItem content={'Volunteers'} />
                    <FooterItem content={'Contacts'} />
                </ul>
            </Col>
        </Row>
    );
}
