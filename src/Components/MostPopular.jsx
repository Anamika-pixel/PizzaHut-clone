import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'

function MostPopular() {
  return (
    <>
    <div>
    <div className='Popular'><span style={{marginLeft:'40px'}}>Our Most Popular Deals</span></div>
    <Container>
                <div id='images'>
                    <Row className="d-flex justify-content-between">
                      <Col lg={2} xs={12} id='img1' style={{height:'300px', width:'500'}}> </Col>
                     
                         <Col lg={4} xs={12} id='img2' style={{ height:'300px' , width:'500'}}><img src={image1} alt="" style={{height:'300px' , width:'500px'}} />
                         <div id='text1' >Deal May Vary By Location , only at participating stores , excludig Dine-in Restaurents , T&Cs Apply</div>

                         </Col>
                         
                  
                      <Col lg={4} xs={12} id='img3' style={{height:'300px' , width:'500'}}><img src={image2} alt="" style={{height:'300px' , width:'500px'}} />
                      <div id='text2' >Deal May Vary By Location , only at participating stores , excludig Dine-in Restaurents , T&Cs Apply</div>

                      </Col>
                      <Col lg={2} xs={12} id='img4' style={{ height:'300px' , width:'500'}}></Col>
    
                    </Row>

                    
                </div>
    </Container>
    <button id='btn1' >View All Deals</button>


    </div>
    </>
  )
}

export default MostPopular