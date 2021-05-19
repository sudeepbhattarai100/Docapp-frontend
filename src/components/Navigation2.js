
import {
  Container,
  Collapse,
  InputGroupText,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,

  CardImg, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, buttonLabel, Row, Col
} from 'reactstrap'
import { Link, Redirect, withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'

 class Navigation2 extends Component {


  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,

      isOpen: false,
      setIsOpen: false,
      modal: false
    }
  }

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/')
  }

  // conponentDidUpdate(prevProps){
  //   console.log(prevProps, this.props,"hhh")
  // }

  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/patient/login', this.state)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('token', response.data.token)
        this.setState({ isLoggedIn: true })
      }).catch((err) => console.log(err.response))
    this.setState({ username: '', password: '' })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  toggle1 = () => {
    this.setState({
      modal: !this.state.modal
    })
  }





  render() {
    if (this.state.isLoggedIn === true) {
      return <Redirect to='/Dashboard' />
    }
    return (
      <div>
        <Container>
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/Dashboard">Doc AS</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>



                  <NavItem>
                    <NavLink href="/Dashboard">Dashboard</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Appointment">Appointment</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Profile">My Profile</NavLink>
                  </NavItem>

                  {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                 </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                </DropdownItem>
                      <DropdownItem>
                        Option 2
                </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                </DropdownItem>
                    </DropdownMenu>

                  </UncontrolledDropdown> */}

                </Nav>
                <div className="Login">
                  <Button color='warning' onClick={this.handleLogout}> Logout</Button>

                </div>
              </Collapse>
            </Navbar>
          </div>
        </Container>
      </div>
    )
  }
}

export default withRouter(Navigation2)
