import React,{useState} from 'react';
import useOFXQuoteForm from '../../hooks/useOFXQuoteForm';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CurrenciesList from '../../config/CurrenciesList'
export default function OFXNewQuoteForm() {
  const {values, handleInputChange, handleSubmit} = useOFXQuoteForm();
  const [validated, setValidated] = useState(false);
  const handleValidation = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);
    handleSubmit(event);
  };
  return (
    <Row>
      <Col>
        <Form noValidate validated={validated} onSubmit={handleValidation}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>FirstName</Form.Label>
              <Form.Control name="firstName" required type="text" placeholder="Enter First Name" onChange={handleInputChange} value={values.firstName}/>
              <Form.Control.Feedback type="invalid">
                Please Enter First Name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" required type="text" placeholder="Password" onChange={handleInputChange}  value={values.lastName}/>
              <Form.Control.Feedback type="invalid">
                Please Enter Last Name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter Email Address" onChange={handleInputChange}  value={values.email}/>
            <Form.Control.Feedback type="invalid">
                Please Enter Valid Email.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Mobile</Form.Label>
            <Form.Control name="mobile" placeholder="Enter Mobile" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFromCurrency">
              <Form.Label>From Currency</Form.Label>
              <Form.Control name="fromCurrency" required as="select" onChange={handleInputChange}  value={values.fromCurrency}>
              <option value="">--- Select ---</option>
                {CurrenciesList.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please Select From Currency.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridToCurrency">
              <Form.Label>To Currency</Form.Label>
              <Form.Control name="toCurrency" required as="select" onChange={handleInputChange}  value={values.toCurrency}>
              <option value="">--- Select ---</option>
                {CurrenciesList.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please Select To Currency.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control name="amount" required min="1" type="number" placeholder="Enter Amount" onChange={handleInputChange} value={values.amount}/>
              <Form.Control.Feedback type="invalid">
                Please Enter Amount.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridSubmit" className="text-center">
              <Button variant="primary" type="submit" size="lg">Get Quote</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
}