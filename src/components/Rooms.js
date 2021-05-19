import React, { Component } from 'react'
import styled from 'styled-components'
import {
    Collapse, Modal, ModalHeader, ModalBody, ModalFooter,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
    UncontrolledCarousel,
    Jumbotron,
    Row,
    Navbar,
   
    DropdownItem, Container, Col, Form, FormGroup, Label, Input, Button, FormText, NavbarText, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
export default class Rooms extends Component {
    render() {
        return (
            <div>
             
       
                <Row>
                    <Col xs="6">

                        <CardImg width="70%" src={require('./images/About1.jpg')} />
                    </Col>
          
                </Row>
                <Row>

                    <Col xs="6">
                        <h5>Price</h5>
                        <h5>Location</h5>
                    </Col>
                    <Col xs="6">
                        <Button>Book</Button>
                    </Col>

                </Row><br />
                <h4>Facility</h4>

                <Row>
                    <Col xs="6">
                        <h5>Facility 1</h5>
                        <h5>Facility 2</h5>
                    </Col>
                    <Col xs="6">
                        <h5>Facility 3</h5>
                        <h5>Facility 4</h5>
                    </Col>
                </Row><br />

                <h4>Room</h4>

                <Row>
                    <Col xs="6">
                        <h5>Kitchen</h5>
                        <h5>Bedroom</h5>
                    </Col>
                    <Col xs="6">
                        <h5>Living room</h5>
                        <h5>Bathroom</h5>
                    </Col>
                </Row><br />

                <h4>Owner</h4>

                <Row>
                    <Col xs="6">
                        <h5>Name</h5>
                        <h5>Phone</h5>
                        <h5>Email</h5>
                    </Col>


                </Row>
         
            </div>
        
        )
    }
}
