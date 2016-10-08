import React, { Component } from 'react';
import './styles/styles.min.css';
import './styles/customStyle.css';
import { Row, Col, Card } from 'elemental';

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="1/3">
            <Card>
              Test
            </Card>
          </Col>
          <Col sm="1/3">
            <Card>
              Test
            </Card>
          </Col>
          <Col sm="1/3">
            <Card>
              Test
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
