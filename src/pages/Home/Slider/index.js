import React from 'react'
import PropTypes from 'prop-types'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Col, Container, Row } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import image1 from '../../../image-1.png'
import image2 from '../../../image-2.png'
import image3 from '../../../image-3.png'
import image4 from '../../../image-4.png'
import image5 from '../../../image-5.png'
import image6 from '../../../image-6.png'
import image7 from '../../../image-7.png'
import image8 from '../../../image-8.png'
import image9 from '../../../image-9.png'
import image10 from '../../../image-10.png'

let data = [{
    img1: image1,
    img2: image2,
    data1: "Data Can Transform your Business",
    data2: 'Applying the cutting edge tools we build systems that capture neglected data',
    data3: 'Change the way you look at the data and the data will change the way you do business.'
},
{
    img1: image3,
    img2: image4,
    data1: "Future is changing and you need to change the way you do business",
    data2: 'Finding the new trends hidden in plain sight. We use Machine Learning and AI to predict and model what is coming next.',
    data3: 'Data analytics is the future, and the future is happening NOW! If you are not making use of every click, key, swipe or tap you are not empowering your decisions well.'
},
{
    img1: image5,
    img2: image6,
    data1: "When there is data smoke, there is business fire",
    data2: 'Detect early signs of smoke by using the algorithms that find patterns and correlate it with the missed opportunities.',
    data3: 'Insights that fuel the business needs'
},
{
    img1: image7,
    img2: image8,
    data1: "There is no science without data",
    data2: 'We apply data science on the raw data and vigorously drive new facts .',
    data3: 'Data science is all about asking interesting questions based on the data you have or often the data you don’t have.'
},
{
    img1: image9,
    img2: image10,
    data1: "Your business needs vision beyond the knowledge you have",
    data2: 'Applying customized machine learning APIs that serve the new insights',
    data3: 'Something about the world that you didn’t know before.'
}]

function SliderComponent(props) {
    console.log('check')
    return (
        <>
            <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode" autoPlay infiniteLoop>
                {data.map((item, index) => (
                    <div key={`slide${index + 1}`} style={{ padding: 20 }}>
                        <Container>
                            <Row>
                                <Col className='slider-font'>
                                    <strong>Why?</strong><br /><br />
                                    {item.data1}
                                </Col>
                                <Col>
                                    <img src={item.img1} alt='image-1' style={{ height: '180px', width: '300px' }} />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col className='slider-font'>
                                    <strong>How?</strong><br /><br />
                                    {item.data2}
                                </Col>
                                <Col>
                                    <img src={item.img2} alt='image-2' style={{ height: '180px', width: '300px' }} />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col className='slider-font' style={{ centerAlign: 'left' }}>
                                    <strong>What?</strong><br /><br />
                                    {item.data3}
                                </Col>
                                <Col sm='0' xs='0'>
                                </Col>
                            </Row>
                        </Container>
                        <br/>
                        <br/>
                    </div>
                ))}
            </Carousel>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode" autoPlay infiniteLoop>
                {data.map((item, index) => (
                    <div key={`slide${index + 1}`} style={{ padding: 20 }}>
                        <Container>
                            <Card style={{borderRadius:'32px', width:'90%',backgroundColor:'white',boxShadow: "0 4px 20px rgb(0 0 0 / 20%)"}}>
                            <Row>
                                <Col className='slider-font3' lg="8" sm="12" xs="12">
                                    <h3 style={{textAlign:'left', paddingLeft:'60px',paddingTop:'20px'}}>Why?</h3>
                                    <p style={{textAlign:'left',paddingLeft:'75px',paddingTop:'10px'}}>
                                    {item.data1}
                                    </p>
                                </Col>
                                <Col lg="4" sm="12" xs="12">
                                <CardImg top src={item.img1} alt='image-1' style={{ float:'right',borderTopRightRadius:'32px',borderBottomRightRadius:'32px', height: '178px', width: '300px' }} /> 
                                </Col>
                            </Row>
                            </Card>
                            <br/>
                            <Card style={{borderRadius:'32px', width:'90%',backgroundColor:'white',boxShadow: "0 4px 20px rgb(0 0 0 / 20%)"}}>
                            <Row>
                                <Col className='slider-font3' lg="8">
                                    <h3 style={{textAlign:'left' ,paddingLeft:'60px',paddingTop:'20px'}}>How?</h3>
                                    <p style={{textAlign:'left',paddingLeft:'75px',paddingTop:'10px'}}>
                                    {item.data2}
                                    </p>
                                </Col>
                                <Col lg="4">
                                <CardImg top src={item.img2} alt='image-1' style={{ float:'right',borderTopRightRadius:'32px',borderBottomRightRadius:'32px', height: '178px', width: '300px' }} /> 
                                </Col>
                            </Row>
                            </Card>
                            <br />
                            <Card style={{height:'178px',borderRadius:'32px', width:'90%',backgroundColor:'white', boxShadow: "0 4px 20px rgb(0 0 0 / 20%)"}}>
                            <Row>
                                <Col className='slider-font3'>
                                    <h3 style={{textAlign:'left' ,paddingLeft:'60px',paddingTop:'20px'}}>What?</h3>
                                    <p style={{textAlign:'left',paddingLeft:'75px',paddingTop:'10px'}}>
                                    {item.data2}
                                    </p>
                                </Col>
                            </Row>
                            </Card> 
                        </Container>
                        <br/>
                        <br/>
                    </div>
                ))}
            </Carousel>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode" autoPlay infiniteLoop>
                {data.map((item,index)=><div key={`slide${index+1}`} style={{ padding: 20 }}>
                    <Container>
                        <Row>
                            <Col className='slider-font1'>
                                <Card style={{ boxShadow: '0 4px 16px rgb(16 29 45 / 8%)',background:'white' }}>
                                    <CardImg top src={item.img1} height='300' alt="Card image cap" />
                                    <CardBody style={{height:'200px'}}>
                                        <CardTitle tag="h3" className='heading'>Why?</CardTitle>
                                        <CardText>{item.data1}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <br/>
                            <Col className='slider-font1'>
                                <Card style={{ boxShadow: '0 4px 16px rgb(16 29 45 / 8%)', }}>
                                    <CardImg top height='300' src={item.img2} alt="Card image cap" />
                                    <CardBody style={{height:'200px'}}>
                                        <CardTitle tag="h3" className='heading'>How?</CardTitle>
                                        <CardText>{item.data2}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <br/>
                            <Col className='slider-font1'>
                                <Card style={{ boxShadow: '0 4px 16px rgb(16 29 45 / 8%)'}}>
                                    {/* <CardImg top height='300' src={image3} alt="Card image cap" /> */}
                                    <div style={{height:'300px'}}></div>
                                    <CardBody style={{height:'200px'}}>
                                        <CardTitle tag="h3" className='heading'>What?</CardTitle>
                                        <CardText>{item.data3}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <br />
                </div>)}
                
            </Carousel>
            <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode" autoPlay infiniteLoop>
                {data.map((item,index)=><div key={`slide${index+1}`} style={{ padding: 20 }}>
                    <Container>
                        <Row>
                            <Col lg={1}></Col>
                            <Col className='slider-font1' lg={3}>
                                <Card style={{ boxShadow: '0 4px 16px rgb(16 29 45 / 8%)',borderRadius:'16px' }}>
                                    <CardImg top src={item.img1} height='300' alt="Card image cap" style={{borderTopLeftRadius:'16px',borderTopRightRadius:'16px'}} />
                                    <CardBody style={{height:'200px'}}>
                                        <CardTitle tag="h3" className='heading'>Why?</CardTitle>
                                        <CardText>{item.data1}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className='slider-font1' lg={3}>
                                <Card style={{ boxShadow: '0 4px 16px rgb(16 29 45 / 8%)',borderRadius:'16px'}}>
                                    <CardImg top height='300' src={item.img2} style={{borderTopLeftRadius:'16px',borderTopRightRadius:'16px'}} alt="Card image cap" />
                                    <CardBody style={{height:'200px'}}>
                                        <CardTitle tag="h3" className='heading'>How?</CardTitle>
                                        <CardText>{item.data2}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className='slider-font1' lg={3}>
                                <Card style={{ boxShadow: '0 4px 16px rgb(16 29 45 / 8%)',borderRadius:'16px'}}>
                                    <CardBody style={{height:'500px'}}>
                                        <CardTitle tag="h3" className='heading'>What?</CardTitle>
                                        <CardText style={{ display: "flex",justifyContent: "center",alignItems: "center"}}>{item.data3}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <br />
                </div>)}               
            </Carousel>
        </>
    )
}

SliderComponent.propTypes = {

}

export default SliderComponent

