import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import { Container } from 'reactstrap'
function DocumentationComponent(props) {
    return (
        <div>
            <Navbar margin='103px'/>
            <Container>
            Documentation
            </Container>
        </div>
    )
}

DocumentationComponent.propTypes = {

}

export default DocumentationComponent

