import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(250)

    const toRotate = ["Software Developer", "Python Developer", "Data Science Student"]
    const period = 1800

    useEffect(() => {
        const ticker = setInterval(() => tick(), delta)
        return () => clearInterval(ticker)
    }, [text, delta, isDeleting, loopNum])

    const tick = () => {
        const i = loopNum % toRotate.length
        const fullText = toRotate[i]
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(250)
        }
    }

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>Hi, I'm Inshal — <span className="wrap">{text}</span></h1>
                        <p>
                            I'm a B.Tech Computer Science and Data Science student focused on
                            software development, Python, data structures, and building practical projects.
                        </p>
                        <button onClick={scrollToContact}>
                            Let's Connect <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Developer illustration" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
