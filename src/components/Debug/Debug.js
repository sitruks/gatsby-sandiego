import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Debug.css'

class Debug extends Component {
  constructor(props) {
    super(props)
    this.myPre = null
    this.setMyPre = (element) => {
      this.myPre = element
    }
  }

  render() {
    return (
      <Row>
        <Col>
          <div>
            <pre className='pre' ref={this.setMyPre}>
              {JSON.stringify(this.props.state, null, 2)}
            </pre>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Debug
