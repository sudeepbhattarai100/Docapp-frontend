import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Collapse, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, 
  UncontrolledCarousel,
  Jumbotron,
  Row,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Container, Col, Form, FormGroup, Label, Input, Button, FormText, NavbarText, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import image1 from './images/doctor1.jpg';
import image2 from './images/doctor2.png';
import image3 from './images/doctor3.jpg';
import Navigation from './Navigation';
import Footer from './Footer';
import styled from 'styled-components';


const Example = (props) => {
  const [isOpen, setIsOpen, modal, setModal] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  

  // const toggle1 = () => setModal(!modal);

  const {
    buttonLabel,
    className
  } = props;



  const items = [
    {
      src: image1,
      altText: 'Slide 1',
      caption: 'Health is wealth',
      height:'500px',
      header:'We would help you to deal with',
      key: '1'
    },
    {
      src: image2,
      altText: 'Slide 2',
      caption: 'Follow ups are necessary',
      header: 'Reservation is free and easy',
      key: '2'
    },
    {
      src: image3,
      altText: 'Tension Free, Hassle',
      caption: 'Come for us we care about you',
      header: 'This is why we are here',
      key: '3'
    }
  ];


  return (
    <div>
        <Navigation/>
      
     
        <Container className="main">
          <Row>
            <Col className="carousel">
              <UncontrolledCarousel  className="custom-tag" items={items} />

            </Col>
           

          </Row>
          <div>
          <Jumbotron>
            <h1 className="display-3">Health is wealth</h1>
            <p className="lead">A healthy life enables one to remain positive and face all life challenges. Good health promotes mental, emotional, social, and physical well-being.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
          </div>
        </Container>
        <Container>
         <Row >
           <Col xs="4">
            <Card>
              <CardImg top width="100%" src={require('./images/doc1.jpg')} alt="Card image cap" />
              <CardBody>
                <CardTitle>Dr. Ahana Pandey</CardTitle>
                <CardSubtitle>We do our best </CardSubtitle>
                <CardText>This site allows the patient and doctor to manage various appointment easily. Now its yours..</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
            </Col>
                    <Col xs="4">
                
            <Card>
              <CardImg top width="100%" src={require('./images/doc4.jpg')} alt="Card image cap" />
              <CardBody>
                <CardTitle>Dr. jemes galager</CardTitle>
                <CardSubtitle>May I help you??</CardSubtitle>
                <CardText>There never was and there never will be delay for the service. You came and we are taking care..</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
            </Col>
            <Col xs="4">
                
            <Card>
              <CardImg top width="100%" src={require('./images/doc2.jpg')} alt="Card image cap" />
              <CardBody>
                <CardTitle>Dr. Akshya Gupta</CardTitle>
                <CardSubtitle>take your time to reach us!!</CardSubtitle>
                <CardText>Your time is valuable for us too,We are available at any time anywhere you want.</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
            </Col>
          </Row>
         
        </Container>
      <Footer/>
      

    </div>
  );
}


export default Example;

