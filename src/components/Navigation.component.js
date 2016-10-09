import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'elemental';

class Navigation extends Component {
  render () {
    return (
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
    );
  }
};

export default Navigation;