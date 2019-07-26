import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
            <Navbar.Brand href="#">Contact</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <i class="fab fa-medium"></i>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}
// https://www.flaticon.com/search?word=gmail use icons from here
export default Footer;
