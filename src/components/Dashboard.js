import React, { Component } from 'react'
import Navigation2 from './Navigation2'
import { Container, Button } from 'reactstrap'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import Footer from './Footer'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            appoinmnts:[],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            appointmentId:''
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3002/appointment/myAppointmentReact/' , this.state.config)
        .then((response) => {
            console.log(response.data);
            this.setState({
                appoinmnts:response.data
            })
        })
    }

    removeAppointment = (appointmentId) => {

        Axios.delete(`http://localhost:3002/appointment/${appointmentId}/deleteAppointment`, this.state.config)
            .then((response) => {
                alert("Removed sucessfully")
                const filteredAppoinments = this.state.appoinmnts.filter((appointment) => {
                    return appointment._id !== appointmentId
                })
                this.setState({
                    appoinmnts: filteredAppoinments
                })
            }).catch((err) => console.log(err.response));
        this.props.history.push('/dashboard');
    }
    
    render() {
        return (
            <div>
                <Navigation2/>
            <Container>
            <h1 >My Appointments</h1>
            <table className='table'>
              <thead>
                  <tr>
                      <th scope="col">
                        Doctor name
                      </th>
                      <th scope="col">
                        Email
                      </th>
                      <th scope="col">
                        Appoinment Date
                      </th>
                      <th scope="col">
                        Appoinment Time
                      </th>
                      <th scope="col">
                       Cancel Appointment
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.appoinmnts.map(appointment => {
                      return(<tr key={appointment._id}>
                          <td>
                              {appointment.DoctorId.username}
                          </td>
                          
                          <td>
                              {appointment.DoctorId.email}
                          </td>
                          <td>
                              {appointment.AppointmentDate}
                          </td>
                          <td>
                              {appointment.AppointmentTime}
                          </td>
                          <td>
                              
                              <Button class='btn-danger' onClick={() => this.removeAppointment(appointment._id)}>Remove</Button>
                              
                          </td>
                      </tr>)
                  })}
              </tbody><br/>
          </table>
            </Container>
            <Footer/>
            </div>
        )
    }
}
