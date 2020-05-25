import React from 'react';
import chiefguest1 from '../../assets/CHIEFGUEST1.jpg';
import chiefguest2 from '../../assets/CHIEFGUEST2.jpg';
import chiefguest3 from '../../assets/CHIEFGUEST3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import classes from './Speakers.module.css';

const speakers= () => (

  <div className={classes.carousel}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chiefguest1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CHIEF GUEST</h3>
          <p>CEO OF ALPHABET.INC</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chiefguest2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SPECIAL GUEST</h3>
          <p>CEO OF APPLE.INC</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chiefguest3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SPECIAL GUEST </h3>
          <p>CEO OF MICROSOFT</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
);

export default speakers;