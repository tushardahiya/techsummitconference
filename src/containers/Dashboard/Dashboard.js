import React, { Component } from "react";
import Auxiliary from '../../hoc/Auxiliary';
import Dignitaries from '../../components/Dignitaries/Dignitaries';
import Speakers from '../../components/Speakers/Speakers';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import About from '../../components/About/About';
import { Route } from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import SpeakerHeader from '../../components/SpeakerHeader/SpeakerHeader';
import GuestHeader from "../../components/GuestHeader/GuestHeader";


class Dashboard extends Component {
    render() {
        return (
            <Auxiliary>
                <Route path="/about" exact
                 render={ () =>
                
                    <Alert variant="success">
                    <Alert.Heading>ABOUT US</Alert.Heading>
                    <p>
                    JOHN DOE TECHNOLOGIES is the world's gathering place for all those who thrive on the business of consumer technologies.
                    It has served as the proving ground for innovators and breakthrough technologies for 50 years —
                     the global stage where next-generation innovations are introduced to the marketplace.
                    </p>
                    <hr />
                    <p className="mb-0">
                    We showcase more than 4,400 exhibiting companies, including manufacturers, developers and suppliers of consumer technology hardware,
                     content, technology delivery systems and more; a conference program with more than 250 conference sessions 
                     and more than 170,000 attendees from 160 countries.
                    </p>
                  </Alert>
                   
                 }
                />
                 <Route path="/contact" exact component={About} />
                <Jumbotron />
                <SpeakerHeader />
                <Speakers/>
                <GuestHeader />
                <Dignitaries/>
                <About />
            </Auxiliary>
        )
    }
}

export default Dashboard;