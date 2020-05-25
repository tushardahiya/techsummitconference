import React from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import Auxiliary from '../../hoc/Auxiliary';

const speakerheader = () => (
    <Auxiliary>
        <Jumbotron >
            <Container>
                <h1>THE SPEAKERS</h1>
                <p>
                Some of the esteemed SPEAKERS that will grace us with their presence !!
                </p>
                </Container>
        </Jumbotron>
    </Auxiliary>
);

export default speakerheader;