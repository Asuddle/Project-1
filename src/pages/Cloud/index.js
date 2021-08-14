import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import { Container } from 'reactstrap'
function CloudComponent(props) {
    return (
        <div>
            <Navbar  style='image-dna2'/>
            <Container>
            Cloud
            </Container>
        </div>
    )
}

CloudComponent.propTypes = {

}

export default CloudComponent

