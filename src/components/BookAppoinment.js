import React, { Component } from 'react'
import Axios from 'axios'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Form, FormGroup, Label, Button, FormText, Col, Row } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Navigation2 from './Navigation2'
import Footer from './Footer'
export default class BookAppoinment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            DoctorId: '',
            BookedBy: '',
            AppointmentDate: '',
            AppointmentTime: '',
            patient: {},
            Query: '',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },

        }
    }
    componentDidMount() {
        Axios.get('http://localhost:3002/patient/me', this.state.config)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    patient: response.data
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    bookAppoinment = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3002/appointment/appointDoctor', {
            DoctorId: this.props.match.params.id,
            BookedBy: this.state.patient._id,
            AppointmentDate: this.state.AppointmentDate,
            AppointmentTime: this.state.AppointmentTime,

            Query: this.state.Query
        }, this.state.config)
            .then((response) => {
                alert("Booked sucessfully")
                this.setState({
                    AppointmentDate: '',
                    AppointmentTime: '',
                    Query: ''
                })

            })

    }



    render() {
        return (
            <div>
                <Navigation2 />
                <Container>
                    {/* <h2>say hi {this.props.match.params.id}</h2> */}
                    <Col md={6}>
                        <FormGroup>
                            <Label for='AppointmentDate'>Appoinment Date</Label>
                            <Input type='date' name='AppointmentDate' id='AppointmentDate'
                                value={this.state.AppointmentDate} onChange={this.handleChange} />

                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for='AppointmentTime'>AppointmentTime</Label>
                            <Input type='time' name='AppointmentTime' id='AppointmentTime'
                                value={this.state.AppointmentTime} onChange={this.handleChange} />

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for='Query'>Query</Label>
                            <Input type='text' name='Query' id='AppointmentTime'
                                value={this.state.Query} onChange={this.handleChange} />

                        </FormGroup>
                    </Col>
                    <Container>
                    <Button color='primary' onClick={this.bookAppoinment}>Book Now</Button>
                    </Container>
                </Container><br/>
                <Footer />
            </div>
        )
    }
}
