import React, { useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types'
import Logo from '../../logo.svg'
import {
    Row,
    Col,
    Container,
    Button
} from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { handleNav } from '../../actions';
function NavbarComponent({ history, margin = false }) {
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
    const [width, height] = useWindowSize();
    const data = useSelector(dt => dt.navbar?.value)
    let nav = [{ name: 'cloud', heading: 'Cloud' }, { name: 'Enterprise', heading: 'Small Enterprise' },
    { name: 'marketplace', heading: 'Insights' }, { name: 'documentation', heading: 'SuccessStories' }, { name: 'Blog', heading: 'Blog' }]
    const [navigation, setNavigation] = useState(nav)
    const dispatch = useDispatch();
    const handleLink = (text) => {
        dispatch(handleNav(text))
        history.push(`/${text.toLowerCase()}`)
    }
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);


    useEffect(() => {
        setNavigation([])
        console.log(data)
        setNavigation([...nav])
    }, [data])
    return (
        <>
            {width < 1000 ? <div style={{ paddingLeft: '20px' }}>
                <Row className="pt-45 pb-30 lesser-1000" style={{ width: '100%' }}>
                    <Navbar color="faded" light>
                        <img src={Logo} width="135px" style={{ float: 'right', cursor: 'pointer' }} onClick={() => {
                            dispatch(handleNav(''))
                            history.push('/')
                        }} />
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem className='small-nav'>
                                    {
                                        navigation.map(item => (
                                            <li className="front-link" style={{ paddingTop: '10px', paddingBottom: '10px', color: data === item.name ? "#2364d2" : '#1e375a' }} onClick={() => handleLink(item.name)} >{item.heading}</li>
                                        ))
                                    }
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Row>
            </div>
                :
                <Container>
                    <div className='greater-1000'>
                        <Row className="pt-45 pb-30" style={{ width: '100%' }}>
                            <Col xs={2} sm={2} md={{ size: 'auto' }} lg={{ size: 'auto' }} xl={2} xxl={2} className='logo-wrapper'>
                                <img src={Logo} width="135px" style={{ float: 'right', cursor: 'pointer' }} onClick={() => {
                                    dispatch(handleNav(''))
                                    history.push('/')
                                }} />
                            </Col>
                            <Col xs={8} sm={8} md={{ size: 'auto' }} lg={{ size: 'auto' }} xl={8} xxl={7} className='nav-column'>
                                <ul className='navbar-wrapper'>
                                    {
                                        navigation.map(item => (
                                            <li className="front-link link-li" style={{ color: data === item.name ? "#2364d2" : '#1e375a' }} onClick={() => handleLink(item.name)} >{item.heading}</li>
                                        ))
                                    }
                                </ul>
                            </Col>
                            <Col xs={1} sm={1} md={{ size: 'auto' }} lg={{ size: 'auto' }} xl={1} xxl={2} style={{ paddingTop: "3px" }}>
                                <Button className='button-chat'>CHAT</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>}
        </>
    )
}

NavbarComponent.propTypes = {

}

export default withRouter(NavbarComponent)

