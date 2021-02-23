import React from 'react';
import { useOFXQuoteContext } from '../../state/useOFXQuoteContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import useOFXQuoteForm from '../../hooks/useOFXQuoteForm';
import {CurrencyData} from '../../config/CurrenciesList';

export default function OFXViewQuote() {
    const {handleRestart} = useOFXQuoteForm();
    const { state } = useOFXQuoteContext();
    const { result, inputs } = state || {};
    return (
        <Row>
            <Col xs={12} className="text-center align-items-center">
                <div style={{ maxWidth: "600px", margin: "0 auto"}}>
                    <Row>
                        <Col xs={12} className="text-center"><h2>OFX Customer Rate</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <span className="btn btn-success"><h4><strong>{result.CustomerRate}</strong></h4>
                            </span>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "2rem"}}>
                        <Col md={4} className="text-left text-md-center"><h4>From</h4></Col>
                        <Col xs={6} md={4} className="text-left text-md-center"><span className="btn btn-secondary">{inputs.fromCurrency} </span></Col>
                        <Col xs={6} md={4}><span className="btn btn-info">{CurrencyData[inputs.fromCurrency].symbol} {inputs.amount} </span></Col>
                    </Row>
                    <Row style={{marginTop: "2rem"}}>
                        <Col md={4}className="text-left text-md-center"><h4>To</h4></Col>
                        <Col xs={6} className="text-left text-md-center" md={4}><span className="btn btn-secondary">{inputs.toCurrency} </span></Col>
                        <Col xs={6} md={4} ><span className="btn btn-info">{CurrencyData[inputs.toCurrency].symbol} {result.CustomerAmount} </span></Col>
                    </Row>
                    <Row style={{marginTop: "2rem"}}>
                        <Col>
                        <Button variant="primary" type="submit" size="lg" onClick={handleRestart}>Request New Quote</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}