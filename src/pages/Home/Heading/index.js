import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'reactstrap'

function Header(props) {
    return (
        <Container>
            <Row>
                <Col xs={12} xl={6} lg={8} md={12} sm={12} xxl={6}>
                    <div className='test-header'>
                        Automate Software Build and Testing
                    </div>
                    <div className='intro-text'>
                        Drone is a self-service Continuous Integration platform for busy development teams.
                    </div>
                    <div>
                        <Row>
                            <div className='button-wrapper'>
                                    <a className='get-start-button'>Get Started</a>
                                    <a className='get-start-button documentation-button'>Documentation</a>
                            </div>
                            <div>
                                <div className='button-wrapper-small'>
                                <div style={{marginTop:'40px'}}>
                                    <a className='get-start-button'>Get Started</a>
                                </div>
                                <div style={{marginTop:'40px'}}>
                                <a className='get-start-button documentation-button-sm'>Documentation</a>
                                </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

Header.propTypes = {

}

export default Header

