import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from '../assets/img/R.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => setActiveLink(value)

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home" aria-label="Inshal Ashraf home">
                    <img src={logo} alt="Inshal Ashraf logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('contact')}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <Tooltip placement="bottom" overlay="LinkedIn">
                                <a href="https://www.linkedin.com/in/md-inshal-ashraf-0b85a92bb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <img src={navIcon1} alt="LinkedIn" />
                                </a>
                            </Tooltip>
                            <Tooltip placement="bottom" overlay="GitHub">
                                <a href="https://github.com/inshalashraf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <img src={navIcon2} alt="GitHub" />
                                </a>
                            </Tooltip>
                            <Tooltip placement="bottom" overlay="Instagram">
                                <a href="https://www.instagram.com/inshal_ashraf" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <img src={navIcon3} alt="Instagram" />
                                </a>
                            </Tooltip>
                        </div>
                        <button className="vvd" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
