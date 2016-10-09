import React, { Component } from 'react';
import './styles/styles.min.css';
import './styles/customStyle.css';
import { Row, Col, Card, Button } from 'elemental';

class App extends Component {
  render() {
    return (
      <div>

        <Row>
          <Col sm="1/3" className="div-center">
            <Card>
              <Row>
                <Col sm="1/3" className="center">
                  <Button type="hollow-primary">All channels</Button>
                </Col>
                <Col sm="1/3" className="center">
                  <Button type="hollow-success">Online channels</Button>
                </Col>
                <Col sm="1/3" className="center">
                  <Button type="hollow-danger">Offline channels</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
