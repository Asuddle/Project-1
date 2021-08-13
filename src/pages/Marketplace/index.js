import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import { Container } from 'reactstrap'
function MarketplaceComponent(props) {
    return (
        <div>
            <Navbar margin='103px'/>
            <Container>
            Marketplace
            </Container>
        </div>
    )
}

MarketplaceComponent.propTypes = {

}

export default MarketplaceComponent

