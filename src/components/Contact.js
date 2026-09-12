import { Col, Container, Row } from "react-bootstrap"
import { Envelope, Github, Linkedin, FileEarmarkText } from "react-bootstrap-icons"

export const Contact = () => (
    <section className="contact" id="contact">
        <Container>
            <Row><Col>
                <div className="contact-box">
                    <span className="section-label">GET IN TOUCH</span>
                    <h2>Let's build something useful.</h2>
                    <p>I'm open to software engineering internships, backend development opportunities, and meaningful technical collaborations.</p>
                    <div className="contact-links">
                        <a className="contact-button" href="mailto:mdinshalashraf@gmail.com"><Envelope /> &nbsp;Email Me</a>
                        <a className="contact-button" href="https://www.linkedin.com/in/md-inshal-ashraf-0b85a92bb/" target="_blank" rel="noopener noreferrer"><Linkedin /> &nbsp;LinkedIn</a>
                        <a className="contact-button" href="https://github.com/inshalashraf" target="_blank" rel="noopener noreferrer"><Github /> &nbsp;GitHub</a>
                        <a className="contact-button" href="/portfolio/resume.html" target="_blank" rel="noopener noreferrer"><FileEarmarkText /> &nbsp;Resume</a>
                    </div>
                </div>
            </Col></Row>
        </Container>
    </section>
)
