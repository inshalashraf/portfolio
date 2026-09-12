import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle, Download, Github, Linkedin } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(150)

    const toRotate = ["Software Engineer", "Backend Developer", "Data Science Student"]
    const period = 1600

    // The typing callback intentionally updates state on each timer tick.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const ticker = setInterval(() => tick(), delta)
        return () => clearInterval(ticker)
    }, [text, delta, isDeleting, loopNum])

    const tick = () => {
        const i = loopNum % toRotate.length
        const fullText = toRotate[i]
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(150)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <span className="tagline">SOFTWARE ENGINEERING · DATA SCIENCE</span>
                        <h1>Hi, I'm Inshal.<br /><span className="wrap">{text}</span></h1>
                        <p>
                            I build reliable backend systems, practical web applications, and data-driven solutions.
                            Currently pursuing B.Tech CSE (Data Science) at SRMIST and looking for opportunities to build impactful software.
                        </p>
                        <div className="hero-actions">
                            <a className="primary-action" href="#projects">View My Work <ArrowRightCircle /></a>
                            <a className="secondary-action" href="/portfolio/resume.html" target="_blank" rel="noopener noreferrer"><Download /> Resume</a>
                        </div>
                        <div className="hero-links">
                            <a href="https://github.com/inshalashraf" target="_blank" rel="noopener noreferrer"><Github /> GitHub</a>
                            <a href="https://www.linkedin.com/in/md-inshal-ashraf-0b85a92bb/" target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a>
                        </div>
                    </Col>
                    <Col lg={5} className="hero-image-col">
                        <img src={headerImg} alt="Inshal Ashraf software developer illustration" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
