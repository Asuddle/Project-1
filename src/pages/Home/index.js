import React from 'react'
import PropTypes from 'prop-types'
import Header from './Heading'
import Navbar from '../Navbar'
import {ReactComponent as DNA} from '../../dna.svg'
import SliderComponent from './Slider'
function Home(props) {
    return (
        <>
            <div className="App">
                <Navbar />
                <Header />
                <SliderComponent/>
            </div>
        </>
    )
}

Home.propTypes = {

}

export default Home

