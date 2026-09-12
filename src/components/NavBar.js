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
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const updateActive = (value) => setActiveLink(value)

    const links = [
        ['home', 'Home'], ['about', 'About'], ['experience', 'Experience'],
        ['projects', 'Projects'], ['skills', 'Skills'], ['contact', 'Contact']
    ]

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home" aria-label="Inshal Ashraf home">
                    <img src={logo} alt="Inshal Ashraf" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto align-items-lg-center">
                        {links.map(([id, label]) => (
                            <Nav.Link key={id} href={`#${id}`} className={activeLink === id ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActive(id)}>
                                {label}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <Tooltip placement="bottom" overlay="LinkedIn"><a href="https://www.linkedin.com/in/md-inshal-ashraf-0b85a92bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a></Tooltip>
                            <Tooltip placement="bottom" overlay="GitHub"><a href="https://github.com/inshalashraf" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src={navIcon2} alt="GitHub" /></a></Tooltip>
                            <Tooltip placement="bottom" overlay="Instagram"><a href="https://www.instagram.com/inshal_ashraf" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={navIcon3} alt="Instagram" /></a></Tooltip>
                        </div>
                        <a className="nav-resume" href="/portfolio/resume.html" target="_blank" rel="noopener noreferrer">Resume</a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
