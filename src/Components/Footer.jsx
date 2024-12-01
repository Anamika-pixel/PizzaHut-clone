import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AppStore from '../images/AppStore.svg'
import googleplay from '../images/googleplay.png'
import fssai from '../images/fssai.webp'


function Footer() {
  return (
    <>
    <div> 
        {/* !st section */}
        <Row style={{height:'200px'}}>

            <Col lg={1} style={{backgroundColor:'black',color:'white'}}></Col>
            <Col lg={2} style={{backgroundColor:'black',color:'white'}}>
            
           <div id='Order'>
                <div style={{marginTop:'35px',fontSize:'20px',marginLeft:'50%'}}>Order Now</div>
                <div style={{fontSize:'13px',marginLeft:'50%',marginTop:'10px'}}>Deals </div>
                <div style={{fontSize:'13px',position:'relative',marginLeft:'50%'}}>Pizza</div>
                <div style={{fontSize:'13px',position:'relative',marginLeft:'50%'}}>Sides</div>
                <div style={{fontSize:'13px',position:'relative',marginLeft:'50%'}}>Drinks</div>
                <div style={{fontSize:'13px',position:'relative',marginLeft:'50%'}}>Desserts</div>
    
           </div>

            
            </Col>
            <Col lg={1} style={{backgroundColor:'black',color:'white'}}></Col>
            <Col lg={2} style={{backgroundColor:'black',color:'white'}}>
            
            <div id='About'>
                <div style={{marginTop:'35px',fontSize:'20px'}}>About</div>
                <div style={{fontSize:'13px',marginTop:'10px'}}>About Us </div>
                <div style={{fontSize:'13px',position:'relative'}}>Contactless Delivery</div>
                <div style={{fontSize:'13px',position:'relative'}}>Nutrition</div>
                <div style={{fontSize:'13px',position:'relative'}}>Career</div>
    
            </div>

            </Col>


            <Col lg={1} style={{backgroundColor:'black',color:'white'}}></Col>
            <Col lg={2} style={{backgroundColor:'black',color:'white'}}>
            
           <div id='policies'>
                <div style={{marginTop:'35px',fontSize:'20px'}}>Our Policies</div>
                <div style={{fontSize:'13px',marginTop:'10px'}}>Privacy</div>
                <div style={{fontSize:'13px',position:'relative'}}>Terms & Conditions</div>
                <div style={{fontSize:'13px',position:'relative'}}>Responsible disclosure</div>
                <div style={{fontSize:'13px',position:'relative'}}>FAQs & Help</div>
           </div>

            </Col>
            <Col lg={2} style={{backgroundColor:'black',color:'white'}}>
            
            <div id='pizzaHut'>
                <div style={{marginTop:'35px',fontSize:'20px'}}>visit Pizza Hut</div>
                <div style={{fontSize:'13px',marginTop:'10px'}}>Locate a Store</div>
                <div style={{fontSize:'13px',position:'relative'}}>Global Blog</div>
    
            </div>

            </Col>
            <Col lg={1} style={{backgroundColor:'black',color:'white'}}></Col>
           

        </Row>


        <Row style={{backgroundColor:'black' , height:'100px'}}>
            <Col lg={6} sm={12}><img id='img1' src={AppStore} alt="" height={'40px'} width={'130px'}  style={{marginLeft:'84%'}}/></Col>
            <Col lg={6} sm={12}> <img id='img2' src={googleplay} alt="" height={'40px'} width={'130px'} style={{marginLeft:'4%'}} /></Col>

        </Row>

        <div style={{backgroundColor:'black'}}>

            <Row>
                <Col lg={2} style={{height:'50px'}}></Col>
                <Col lg={3} style={{height:'50px',color:'white'}}>
                <div id='Help'>
                    <span>Help Us in serving you better</span>
                    <button style={{height:'50px',marginLeft:'10px',borderRadius:'10px',width:'130px'}}>Give feedback</button>
                </div>
                </Col>
                <Col lg={1}>
                </Col>
                <Col lg={1}></Col>
                <Col lg={1}></Col>
                <Col lg={2}>
               <div id='Follow'>
                    <h5 style={{color:'white'}}>Follow Us</h5>
                    <i className="fa-brands fa-facebook" style={{color: '#ffffff',fontSize:'25px'}}></i>
                    <i className="fa-brands fa-twitter" style={{color: '#ffffff',fontSize:'25px',marginLeft:'15px'}}></i>
                    <i className="fa-brands fa-instagram" style={{color: '#ffffff',fontSize:'25px',marginLeft:'15px'}}></i>
                    <i className="fa-brands fa-youtube" style={{color: '#ffffff',fontSize:'25px',marginLeft:'15px'}}></i>
               </div>
                </Col>
                <Col lg={2}></Col>
                <div id='pizza'>Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than<br></br>
                <span style={{color:'#78838c',fontSize:'11px' , marginLeft:'30%'}}> thirty minutes. *T&C Apply.</span><br />
                <span style={{color:'#78838c',fontSize:'11px' , marginLeft:'28.5%'}}>Hurry up and place your order now!</span><br></br>
                <span  id='License'>&copy; 2024 Pizza Hut India. All rights reserved. License Number: 10017011004220</span><br />
                <img src={fssai} alt="" height={'60px'} id='fssai'  />

                
                </div>
            </Row>

        </div>
    </div>
    </>
  )
}

export default Footer