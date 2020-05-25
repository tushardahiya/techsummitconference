import React from 'react';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
import Auxiliary from '../../hoc/Auxiliary';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

const dignitaries =() => (
    <Auxiliary>
       <CardDeck>
  <Card>
    <Card.Img variant="top" src={avatar1} />
    <Card.Body>
      <Card.Title>MR JOH DOE</Card.Title>
      <Card.Text>
        AMBASSADOR
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">AUSTRALIAN HIGH COMMISION TO INDIA</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={avatar2} />
    <Card.Body>
      <Card.Title>MR S CHRISTOPHER</Card.Title>
      <Card.Text>
       DIRECTOR
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">DRDO INDIA</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={avatar3} />
    <Card.Body>
      <Card.Title>MR RAMAN MITTAL</Card.Title>
      <Card.Text>
        PROFESSOR
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">DEAN AT DELHI UNIVERSITY</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={avatar4} />
    <Card.Body>
      <Card.Title>MR ARVIND KEJRIWAL</Card.Title>
      <Card.Text>
        EX-IAS $ IITIAN
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">CHIEF MINISTER OF DELHI</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </Auxiliary>
);

export default dignitaries;
