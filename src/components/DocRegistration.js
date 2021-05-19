import React, { Component } from 'react'
import styled from 'styled-components'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Form, FormGroup, Label, Button, FormText, Col, Row } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import axios from 'axios'
import Axios from 'axios'
export default class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            address:'',
            email:'',
            phoneNumber:'',
            isRegistered: false,
            categoryId:'',
            categories:[],
            categoryName:'',
            speciality:''

        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3002/speciality', this.state)
        .then((response) => {
            console.log(response.body)
            this.setState({
                categories:response.data,
                categoryId:response.data[0]._id
            })
        })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:3002/doctor/docRegister', {
            firstname: this.state.firstname,
            lastname: this.state.lastename,
            username: this.state.username,
            password: this.state.password,
            address:this.state.address,
            email:this.state.email,
            phoneNumber:this.state.phoneNumber,
            categoryName:this.state.categoryName,
            speciality:this.state.speciality
        })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                this.setState({
                    firstname: '',
                    lastname: '',
                    username: '',
                    password: '',
                    email:'',

                    phoneNumber:'',
                    isRegistered: true
                });

            }).catch((err) => console.log(err))
    }

    render() {
        if (this.state.isRegistered === true) {
            return <Redirect to='/Dashboard' />}
        return (
            <div>
                <Navigation/>
                 <Container>
                <RegistrationContainer className="main-container">
                    <h2 className="sign">Doctor Registration</h2>
                    <Form>
                        <Row>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for='firstname'>First Name</Label>
                                    <Input type='text' name='firstname' id='firstname'
                                    value={this.state.firstname} onChange={this.handleChange} />      
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for='lastname'>Last Name</Label>
                                    <Input type='text' name='lastname' id='lastname'
                                     value={this.state.lastname} onChange={this.handleChange} />
                               </FormGroup>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                <Label for='address'>Address</Label>
                                    <Input type='text' name='address' id='address'
                                    value={this.state.address} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                       
                                <FormGroup>
                                <Label for='phoneNumber'>Phone no.</Label>
                                    <Input type='text' name='phoneNumber' id='phoneNumber'
                                    value={this.state.phoneNumber} onChange={this.handleChange} />
                                </FormGroup>
                          
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for='username'>Username</Label>
                                    <Input type='text' name='username' id='username'
                                    value={this.state.username} onChange={this.handleChange} />
                                    
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" 
                                    value={this.state.email} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                

                        <FormGroup>
                            <label for="category">Category</label>
                            <Input type="select" name="categoryName" id="categoryName" value={this.state.categoryId}
                            onChange={this.handleChange}>
                               {
                                   this.state.categories.map((categoryName) => {
                                   return<option key={categoryName._id} value={categoryName._id}>{categoryName.categoryName}</option>
                                   })
                               }
                            </Input>
                            </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                <Label for='password'>Password</Label>
                                    <Input type='password' name='password' id='password'
                                    value={this.state.password} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                       
                                <FormGroup>
                                <Label for='confirmPassword'>Confirm Password</Label>
                                    <Input type='password' name='confirmPassword' id='confirmPassword'/>
                                </FormGroup>
                          
                            </Col>
                        </Row>
                   
                        <Button color='primary' onClick={this.register}>Sign Up</Button>
                      
                    </Form><br/>
                </RegistrationContainer>
                </Container>
                <Footer/>
            </div>
        )
    }
}

const RegistrationContainer = styled.footer`

.main-container{
    .background: red;
}
.sign{
    margin-bottom: 2rem;
}
`;