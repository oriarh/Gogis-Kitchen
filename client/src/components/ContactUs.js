import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/contactus.css';

export default function ContactUs() {
  return (
    <>
    <div className='mainContactUsDiv'>
      <h1 className='contactUsHeading'>We'd love to hear from you!</h1>
      <Form>
        {/* <Row className='mb-3'>
          <Col>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formMessage">
          {/* <Form.Label>Message</Form.Label> */}
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
    </>
  );
}