import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

function Header() {
    return (
        <>

            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="120"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            id='logo-Pizza-Hut'
                        />
                   <span id='sign-in'>Sign in</span>

                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Header