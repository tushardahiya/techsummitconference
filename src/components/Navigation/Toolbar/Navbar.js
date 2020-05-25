import React from 'react';
import {Navbar,Nav,Form} from 'react-bootstrap';
import classes from './Navbar.module.css';

const toolbar = () => (
    <>
    <Navbar bg="light" variant="light">
      <Navbar.Brand >TECHSUMMIT CONFERENCE</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/about">ABOUT</Nav.Link>
        <Nav.Link href="/contact">CONTACT US</Nav.Link>
      </Nav>
      <Form inline>
        <a href="http://www.facebook.com" class="fa fa-facebook" className={classes.a}>Facebook</a>
        <a href="http://www.twitter.com" class="fa fa-twitter" className={classes.a}>Twitter</a>
        <a href="http://www.instagram.com" class="fa fa-instagram" className={classes.a}>Instagram</a>
        <a href="http://www.youtube.com" class="fa fa-youtube" className={classes.a}>Youtube</a>
        
      </Form>
    </Navbar>
  </>
);

export default toolbar ;