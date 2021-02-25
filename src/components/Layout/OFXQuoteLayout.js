import OFXNewQuoteForm from '../NewQuote/OFXNewQuoteForm';
import OFXViewQuote from '../ViewQuote/OFXViewQuote';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { STATE_VIEW_DISPLAY_QUOTE, STATE_VIEW_ERROR, STATE_VIEW_LOADING, STATE_VIEW_NEW_QUOTE } from '../../utils/Constants';
import { useOFXQuoteContext } from '../../state/useOFXQuoteContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Logo from '../../assets/logo-ofx.png';


function OFXQuoteLayout() {
    const { state } = useOFXQuoteContext();
    const { view } = state || {};
    return (
        <Container style={{ margin: "2rem auto"}}>
            <Card>
                <Card.Header>
                    <Row>
                        <Col className="text-center text-md-left"><img alt="OFX Logo" src={Logo} width="150px" height="50px"></img></Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={12}>
                            {view === STATE_VIEW_NEW_QUOTE ? <OFXNewQuoteForm /> : null}
                            {view === STATE_VIEW_LOADING ? <Loader /> : null}
                            {view === STATE_VIEW_DISPLAY_QUOTE ? <OFXViewQuote /> : null}
                            {view === STATE_VIEW_ERROR ? <Error /> : null}
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col><h5 className="small text-center" data-testid="copyright">Designed &amp; Developed by Naresh Siramsetty</h5></Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default OFXQuoteLayout;
