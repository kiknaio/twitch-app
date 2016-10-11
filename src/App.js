import React, { Component } from 'react';
import Navigation from './components/Navigation.component';
import Request from './components/Request.component';
import { Row, Col, Card } from 'elemental';
import './styles/styles.min.css';
import './styles/customStyle.css';

// Key: 8y4c38tqcnhbanpq2023ro8bcos4ykb

const Channels = [
  "ESL_SC2", "OgamingSC2",
  "cretetion", "freecodecamp",
  "storbeck", "habathcx",
  "RobotCaleb", "noobs2ninjas"
];

class App extends Component {

  render() {
    return (
      <div>
        <Navigation/>
        <Row>
          <Col sm="1/3" className="div-center">
            <Card><Request channels={Channels}/></Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
