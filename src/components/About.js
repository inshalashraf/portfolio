import { Col, Container, Row } from "react-bootstrap"

export const About = () => {
    return (
        <section className="about-section" id="about">
            <Container>
                <Row className="align-items-center g-5">
                    <Col lg={5}>
                        <span className="section-label">ABOUT ME</span>
                        <h2>Building software with purpose.</h2>
                    </Col>
                    <Col lg={7}>
                        <p>
                            I'm Inshal Ashraf, a Computer Science and Engineering (Data Science) student at
                            SRM Institute of Science and Technology with a strong interest in software engineering,
                            backend development, and data-driven applications.
                        </p>
                        <p>
                            I enjoy turning requirements into reliable software, working with databases and APIs,
                            and improving my problem-solving skills through DSA and hands-on projects.
                        </p>
                        <div className="about-stats">
                            <div><strong>9.27</strong><span>CGPA / 10</span></div>
                            <div><strong>104+</strong><span>LeetCode</span></div>
                            <div><strong>500+</strong><span>Event Participants</span></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
