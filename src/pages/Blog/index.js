import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import { Container } from 'reactstrap'
function BlogComponent(props) {
    return (
        <>
            <Navbar/>
            <Container>
                Blog
                </Container>
        </>
    )
}

BlogComponent.propTypes = {

}

export default BlogComponent

