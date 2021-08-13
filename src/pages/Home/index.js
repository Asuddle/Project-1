import React from 'react'
import PropTypes from 'prop-types'
import Header from './Heading'
import Navbar from '../Navbar'
function Home(props) {
    return (
        <>
            <div className="App">
                <Navbar />
                <Header />
            </div>
            {/* <Header />
            <Header />
            <Header />
            <Header />
            <Header /> */}
        </>
    )
}

Home.propTypes = {

}

export default Home

