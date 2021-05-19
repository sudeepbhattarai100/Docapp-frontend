

import React, { Component } from 'react'
import Axios from 'axios';
import { Card, CardBody, CardTitle, Button, CardImg, Container, CardColumns } from 'reactstrap'
import {Link } from 'react-router-dom'
import Footer from './Footer';
import Navigation2 from './Navigation2';
import styled from 'styled-components'

export default class Appointment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryName: '',
      categoryImage: '',
      categoryId: '',
      category: []

    }
  }

  componentDidMount() {
    Axios.get('http://localhost:3002/speciality', this.config)
      .then((response) => {
        const data = response.data;
        this.setState({ category: data });
        console.log("data fecth");

      }).catch(error => console.log(error.response));
  }

  render() {
    return (
        <div>
        <Navigation2/>
        <Container>
      <CategoryContainer className="category_main">
      <h2 className="Category">Select Category</h2>
        <CardColumns>
          {this.state.category.map((categories =>
            <Card>
              <CardImg className="cardimg" top width="80%" height="300px" src={`http://localhost:3002/uploads/${categories.categoryImage}`} alt="Card image cap" />
              <CardBody>
                <CardTitle className="cardtitle">{categories.categoryName}</CardTitle>
                <hr></hr>
                <Link to={`/viewdetails/${categories._id}`} > <Button color="primary">Get Appointment</Button></Link>

              </CardBody>
            </Card>
          ))}
        </CardColumns>
        <hr></hr>
      </CategoryContainer>
      </Container>
      <Footer/>
      </div>
    )
  }
}

const CategoryContainer = styled.footer`

.Category:{
  text-align: center;
}
`;