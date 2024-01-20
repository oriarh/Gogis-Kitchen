import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/menu.css';

export default function Menu() {

  return (
    <Container fluid className="menu-container">
        <Row className='menu-headers text-center'>
          <Col xs={4}>DETAILS</Col>
          <Col>TIFFIN</Col>
          <Col>HALF TRAY</Col>
          <Col>FULL TRAY</Col>
        </Row>
        <div className="menu-section">
          <Row className='menu-category text-center'>
            <Col>CHICKEN</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>KARAHI</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>GINGER (Boneless)</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>NIHARI</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>ALOO SALAN</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>ACHARI</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>KOFTA</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>HALEEM</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>BUTTER CHICKEN</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>CHARGA (WITH VEGGIES)</Col>
            <Col>40 FOR A WHOLE CHICKEN</Col>
          </Row>
        </div>
        <div className="menu-section">
          <Row className='menu-category text-center'>
            <Col>MUTTON</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>KARAHI</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>ALOO SALAN</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>ALOO QEEMA</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>ALOO MASALA</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>PAYA</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
        </div>
        <div className="menu-section">
          <Row className='menu-category text-center'>
            <Col>BEEF</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>HALEEM</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>NIHARI</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>QEEMA</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
        </div>
        <div className="menu-section">
          <Row className='menu-category text-center'>
            <Col>VEGETARIAN</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>KADHI PAKORA</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>MIX VEGETABLE</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>SAFAID CHANA SALAN</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>BHINDI MASALA</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>KALAY CAHANAY SALAN</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>SAFAID MAASH DAAL</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>ALOO PALAK</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>KHATTAY BAINGAN</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
          <Row className='menu-item text-center'>
            <Col xs={4}>ALOO METHI</Col>
            <Col>$30</Col>
            <Col>$60</Col>
            <Col>$120</Col>
          </Row>
        </div>
      </Container>
  );
}

//React Carousal Code
    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block foodImg"
    //       src={haleem}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>HALEEM</h3>
    //       <p>Order this delicious Haleem for $200</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block foodImg"
    //       src={chickenKarahi}
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block foodImg"
    //       src={chickenKarahi}
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>