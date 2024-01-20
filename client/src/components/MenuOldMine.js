import react, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import Carousel from 'react-bootstrap/Carousel';
// import haleem from '../images/haleem.jpeg'
// import chickenKarahi from '../images/chickenKarahi.jpeg'
import '../styles/menu.css'

export default function Menu() {

  return (
      <Container>
        <Row className='menuHeadersRow text-center align-items-center'>
          <Col className='menuHeaders' xs={4}>DETAILS</Col>
          <Col className='menuHeaders'>TIFFIN</Col>
          <Col className='menuHeaders'>HALF TRAY</Col>
          <Col className='menuHeaders'>FULL TRAY</Col>
        </Row>
        <Row className='menuHeadersMeat text-center'>
          <Col className='menuHeaders'>CHICKEN</Col>
        </Row>
        <Row className='firstMenuItem text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>KARAHI</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>GINGER (Boneless)</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>NIHARI</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>ALOO SALAN</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>ACHARI</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>KOFTA</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>HALEEM</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>BUTTER CHICKEN</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>CHARGA (WITH VEGGIES)</Col>
          <Col className='menuItems'>$40 FOR A WHOLE CHICKEN</Col>
        </Row>
        <Row className='menuHeadersMeat text-center'>
          <Col className='menuHeaders'>MUTTON</Col>
        </Row>
        <Row className='firstMenuItem text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>KARAHI</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>ALOO SALAN</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>ALOO QEEMA</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>ALOO MASALA</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>PAYA</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuHeadersMeat text-center'>
          <Col className='menuHeaders'>BEEF</Col>
        </Row>
        <Row className='firstMenuItem text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>HALEEM</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>NIHARI</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>QEEMA</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuHeadersMeat text-center'>
          <Col className='menuHeaders'>VEGETARIAN</Col>
        </Row>
        <Row className='firstMenuItem text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>KADHI PAKORA</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail' xs={4}>MIX VEGETABLE</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>SAFAID CHANA SALAN</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>BHINDI MASALA</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>KALAY CAHANAY SALAN</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>SAFAID MAASH DAAL</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>ALOO PALAK</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='menuItemsRow text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>KHATTAY BAINGAN</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
        <Row className='text-center align-items-center'>
          <Col className='menuItemsDetail'xs={4}>ALOO METHI</Col>
          <Col className='menuItems'>$30</Col>
          <Col className='menuItems'>$60</Col>
          <Col className='menuItems'>$120</Col>
        </Row>
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