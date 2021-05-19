import React, { Component } from 'react'
import styled from 'styled-components'
import { InputGroup, InputGroupAddon, InputGroupText, CustomInput,  Input, Container, Form, FormGroup, Label, Button, FormText, Col, Row } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Footer from './Footer'
import Axios from 'axios'
import Navigation2 from './Navigation2'
import FileUploadButton from './FileUploadButton'

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patient: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            selectedFile: null,
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3002/patient/me', this.state.config)
            .then((response) => {
                this.setState({
                    patient: response.data
                })
            });
    }

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('imageFile', this.state.selectedFile)
        Axios.post('http://localhost:3002/upload', data, this.state.config)
            .then((response) => {
                this.setState({
                    patient: { ...this.state.patient, profileImage: response.data.filename }
                })
            }).catch((err) => console.log(err.response))
    }

    updatePatient = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3002/patient/updateProfile', this.state.patient, this.state.config)
            .then((response) =>alert("Updated sucessfully")).catch((err) => console.log(err.response))
        //this.props.history.push('/dashboard');
    }

    handleChange(e) {
        this.setState({
            patient: { ...this.state.patient, [e.target.name]: e.target.value }
        })
    }
    render() {
        if (this.state.patient === null) {
            return <h3>Loading ...</h3>
        } else {
        return (
            <div>
                <Navigation2/>
                <Container>
                <ProfileContainer className="main-container">
                    <h2 className="Profile">My Profile</h2>
                    <Form className="My_profile">
                        <Row>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for='firstName'>First Name</Label>
                                    <Input type='text' name='firstName' id="firstName"
                                    value={this.state.patient.firstName}   
                                     onChange={(e) => this.handleChange(e)} />      
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for='lastName'>Last Name</Label>
                                    <Input type='text' name='lastName' id="lastName" 
                                     value={this.state.patient.lastName}  
                                     onChange={(e) => this.handleChange(e)} />      
                               </FormGroup>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                <Label for='address'>Address</Label>
                                    <Input type='text' name='address' id='address'  
                                    value={this.state.patient.address} 
                                     onChange={(e) => this.handleChange(e)} />      
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                       
                                <FormGroup>
                                <Label for='phoneNumber'>Phone no.</Label>
                                    <Input type='text' name='phoneNumber' id='phoneNumber'  
                                    value={this.state.patient.phoneNumber} 
                                    onChange={(e) => this.handleChange(e)} />
                                </FormGroup>
                          
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for='username'>Username</Label>
                                    <Input type='text' name='username' id='username' 
                                    value={this.state.patient.username} onChange={(e) => this.handleChange(e)} />
                                    
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail"   
                                  value={this.state.patient.email} onChange={(e) => this.handleChange(e)} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                                <img className='img-thumbnail'
                                    width='400' src={`http://localhost:3002/uploads/${this.state.patient.profileImage}`}
                                    alt="profile" />
                                <CustomInput type='file' id='profilePic'
                                    onChange={this.handleFileSelect} />
                                {this.state.selectedFile ? (<FileUploadButton
                                    uploadFile={this.uploadFile} />) : null}
                            </FormGroup>
               
                   
                        <Button color='primary' onClick={this.updatePatient}>Update Profile</Button>
                      
                    </Form>
                </ProfileContainer>
                </Container>
                <Footer/>
            </div>
        )
        }
    }
}

const ProfileContainer = styled.footer`

.main-container{
    .background: red;
}
.Profile{
    margin-bottom: 2rem;
    margin-top: 2rem;
    text-align: center;
}

.My_profile{
    margin-bottom: 2rem;
}
`;