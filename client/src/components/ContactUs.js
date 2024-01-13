import React from 'react'
import Label from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../styles/aboutus.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col' 

export default function AboutUs() {
  return (
    <>
      <div className='mainAboutUsDiv'>
        <h1 className='aboutUsHeading'>CONTACT US</h1>
        <Form>
          <Row className='firstLastNameRow'>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </div>
    </>
    )
}
