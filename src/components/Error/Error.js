import React from 'react';
import { useOFXQuoteContext } from '../../state/useOFXQuoteContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import useOFXQuoteForm from '../../hooks/useOFXQuoteForm';

export default function Error() {
    const {handleRestart} = useOFXQuoteForm();
    const { state } = useOFXQuoteContext();
    const { error } = state || {};
    return (
        <Row>
            <Col>
            <Row>
                <Col className="align-items-center">
                    <Alert variant="danger">
                        <Alert.Heading>Error!!</Alert.Heading>
                        <p>{error.message}</p>
                    </Alert>
                </Col>
                </Row>
                <Row style={{marginTop: "2rem"}} className="text-center">
                    <Col>
                        <Button variant="primary" type="submit" size="lg" onClick={handleRestart}>Request New Quote</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
        
    );
}