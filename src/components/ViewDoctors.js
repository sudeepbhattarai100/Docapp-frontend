import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Footer from './Footer'
import Navigation2 from './Navigation2'
import { Container } from 'reactstrap'

export default class ViewDoctors extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             doctors:[],
             user:{},
             config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:3002/doctor/getdoctorybycategory/' + (this.props.match.params.id), this.state.config)
        .then((response) => {
            console.log(response.data);
            this.setState({
                doctors:response.data
            })
        })
    }
    
    render() {
        return (
            <div>
                <Navigation2/>
                <Container>
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
                        Specialist At
                      </th>
                      <th scope="col">
                        Make an Appoinment
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.doctors.map(doctor => {
                      return(<tr key={doctor._id}>
                          <td>
                              {doctor.username}
                          </td>
                          <td>
                              {doctor.email}
                          </td>
                          <td>
                              {doctor.categoryName.categoryName}
                          </td>
                          <td>
                              <Link to={`/bookAppoinment/${doctor._id}`}>
                              <Button class='btn-primary'>Book Now</Button>
                              </Link>
                          </td>
                      </tr>)
                  })}
              </tbody>
          </table>
          </Container>
          <Footer/>
          </div>
               
        )
    }
}
