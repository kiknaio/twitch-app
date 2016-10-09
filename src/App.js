import React, { Component } from 'react';
import './styles/styles.min.css';
import './styles/customStyle.css';
import { Row, Col, Card } from 'elemental';
import Navigation from './components/Navigation.component';

class App extends Component {
  render() {
    return (
      <div>

        <Navigation/>

        <Row>
          <Col sm="1/3" className="div-center">
            <Card>Channel name</Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
