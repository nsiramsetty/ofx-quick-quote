import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Loader() {
  return (
      <Row>
          <Col className="text-center align-items-center">
            <Spinner animation="border" variant="danger" size="lg" />
          </Col>
      </Row>
  );
}