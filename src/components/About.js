
import { CardImg, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, buttonLabel, Container, Row, Col } from 'reactstrap';

import styled from 'styled-components'
import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';
export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>

          <ImageContainer>
  
            <div className="Image1">
              <Row>
                <Col xs="6">

                  <CardImg width="100%" height="350rem" src={require('./images/About1.jpg')} />
                </Col>
                <Col>
                As a physician, the daily grind is fraught with obstacles waiting to take you down. One such obstacle is pressure—exerted both externally from society and internally from within ourselves—to function without error. As surgeons, we sense this pressure more than most, as mistakes in our craft can have the highest of costs. If you're not careful, such an environment can breed dishonesty, backstabbing, and a moral depravity that can spread like wildfire; and the torch that is passed down the line within medical teams is not one you would ever want lighting your path. The most effective leaders fight the temptation to fall victim to this pressure by maintaining selfless service, an exhaustive work ethic, and consistency of character as tenets of their everyday practice. But most of all, true leadership is defined not with words but with actions. I've found that it is most often the toughest of times when leaders emerge. After all, anyone can hold the helm when the sea is calm, but it takes someone with true grit to hold steady when oceans rage.
          </Col>
              </Row>
            </div>
            <div className="Image">
              <Row>
                <Col>
                As a physician, the daily grind is fraught with obstacles waiting to take you down. One such obstacle is pressure—exerted both externally from society and internally from within ourselves—to function without error. As surgeons, we sense this pressure more than most, as mistakes in our craft can have the highest of costs. If you're not careful, such an environment can breed dishonesty, backstabbing, and a moral depravity that can spread like wildfire; and the torch that is passed down the line within medical teams is not one you would ever want lighting your path. The most effective leaders fight the temptation to fall victim to this pressure by maintaining selfless service, an exhaustive work ethic, and consistency of character as tenets of their everyday practice. But most of all, true leadership is defined not with words but with actions. I've found that it is most often the toughest of times when leaders emerge. After all, anyone can hold the helm when the sea is calm, but it takes someone with true grit to hold steady when oceans rage.
          </Col>
                <Col xs="6">

                  <CardImg width="100%" height="350rem" src={require('./images/About2.jpg')} />
                </Col>
              </Row>
            </div>
          </ImageContainer>
        </Container>
        <Footer />
      </div>
    )
  }
}


const ImageContainer = styled.footer`


bout{
  background-color: #cccccc;
}

.Image1{
  background-color: #cccccc;


  margin-top:10px;
}
.Image{
  background-color: #cccccc;

  padding-top:20px;
}
`;

