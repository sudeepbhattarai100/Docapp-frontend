import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Footer from './components/Footer';
import About from './components/About';
import Index from './components/Index';
import Navigation from './components/Navigation';
import { Router, browserHistory } from 'react-router-dom';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import DocRegistration from './components/DocRegistration';
import Profile from './components/Profile';
import Appoinment from './components/Appoinment';
import Rooms from './components/Rooms';

import ViewDoctor from './components/ViewDoctors';
import BookAppoinment from './components/BookAppoinment'


function App() {
  return (
    <div>

{/* <Rooms/> */}

    { <BrowserRouter>
      <Route exact path ="/" component={Index}/>
      <Route path='/about' component={About} />
      <Route path= '/Registration' component={Registration}/>
      <Route path='/Dashboard' component={Dashboard}/>
      <Route path='/DocRegistration' component={DocRegistration}/>
      <Route path='/Appointment' component={Appoinment}/>
      <Route path='/Profile' component={Profile}/>
      <Route path='/viewdetails/:id' component={ViewDoctor}/>
      <Route path='/bookAppoinment/:id' component={BookAppoinment}/>
      </BrowserRouter> } 
  
    
    </div>
  );
}

export default App;
