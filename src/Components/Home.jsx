import React from 'react'
import homeimage from '../images/homeimage.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <>

            <div style={{borderBottom:'2px solid #d3d3d3' , height:'600px'}}>
                <img src={homeimage} alt="" id='home-image' />

                    {/* Delivery Card */}
                <Card  id='card-1'>
                    <Card.Body>
                        <Card.Text>
                        <i  className="fa-solid fa-truck fa-beat-fade" style={{color: '#ff0000',marginLeft:'8px'}}></i>
                        <span id='del'>Delivery</span>
                        </Card.Text>
                    </Card.Body>
                </Card>

                    {/* Collect From Store */}
                <Card  id='card-2'>
                    <Card.Body>
                        <Card.Text>
                        <i className="fa-solid fa-store" style={{color: '#808185'}}></i>
                        <span id='store'>Collect From Store</span>

                        </Card.Text>
                    </Card.Body>
                </Card>

                    {/* Finding Nearest Hut */}
                <Card  id='card-3'>
                    <Card.Body>
                        <Card.Title style={{color:'#000000',fontWeight:'600'}}>FIND YOUR NEAREST HUT</Card.Title>
                        <Card.Text>
                        Enter your address to see your local deals, coupons and offers.
                        <input type="text" placeholder='Enter Your Location For Delivery' style={{color:'#808185'}} id='input-1'/>
                           <div className='icons'>
                                <i className="fa-brands fa-telegram" style={{color: '#3095d5'}}></i>
                                <input type="text" placeholder='Find My Current Location' style={{color:'#808185'}} id='input-2'/>
                           </div>
    
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default Home