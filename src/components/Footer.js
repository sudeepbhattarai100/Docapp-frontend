import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMapMarkerAlt, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'reactstrap'

function Footer() {
    return (
        <Container>
        <FooterContainer className="main-footer">

            <div className="footer-middle">
                <div className="container">
                    <div className="row">

                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Doc AS</h4>
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon icon ={faMapMarkerAlt} /> &nbsp;Nilkantha, Dhading</li>
                                <li><FontAwesomeIcon icon ={faEnvelope} /> &nbsp;sudeepbhattarai@Docas.com</li>
                                <li><FontAwesomeIcon icon ={faMobile} /> &nbsp;9823374373</li>
                                
                            </ul>
                        </div>


                     


                        {/* Column 2 */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Quick Links</h4>
                            <ul className="list-unstyled">
                                <li><a href="/Appointment">Appointment</a></li>
                                <li><a href="/">Home</a></li>
                    
                                <li><a href="/About">About</a></li>
                                <li><a href="/Registration">Registration</a></li>
                                
                            </ul>
                        </div>

                        {/* Column 3 */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Get in touch</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Google</a></li>
                                <li><a href="/">Facebook</a></li>
                    
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Viber</a></li>
                                
                            </ul>
                        </div>



                        {/* Column 4 */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Our Partners</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Ali Pvt.ltd</a></li>
                                <li><a href="/">Grand Hospital</a></li>
                    
                                <li><a href="/">City Ambulance service</a></li>
                                <li><a href="/">Sahid Memorial</a></li>
                                
                            </ul>
                        </div>

                    </div>

                    {/* Footer Bottom */}

                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Doc As all right reserved
                    </p>
                    </div>

                </div>
            </div>
        </FooterContainer>
        </Container>
    );
}

export default Footer;

const FooterContainer = styled.footer`

.footer-middle{

    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-topo: 3rem;
    padding-bottom: 2rem;
}

ul li a{
    color: var(--mainGrey);
    text-decoration: none;
}

ul li a:hover{
    color: var(--mainLightGrey);
}
`;