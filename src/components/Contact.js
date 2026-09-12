import { Col, Container, Row } from "react-bootstrap"

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="contact-box">
                            <h2>Let's Connect</h2>
                            <p>I'm open to internship opportunities, software development roles, and meaningful projects.</p>
                            <a className="contact-button" href="mailto:inshalashraf2004@gmail.com">
                                Email Me
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
