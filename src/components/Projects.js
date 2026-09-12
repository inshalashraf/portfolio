import { Col, Container, Row } from "react-bootstrap"
import { Github, ArrowUpRight } from "react-bootstrap-icons"

const projects = [
    { title: "GradeHub — CGPA Calculator", description: "Academic record management with real-time semester and cumulative CGPA calculations, JDBC CRUD operations, and role-based faculty access.", tech: "Java 17 • Maven • Swing • MySQL", repo: "https://github.com/inshalashraf/CGPA-Calculator" },
    { title: "Online Language Translator", description: "A desktop translation application supporting 7+ languages with multiple translation APIs and fallback handling for reliability.", tech: "Java 17 • Gradle • SQLite • REST APIs", repo: "https://github.com/inshalashraf/Language-Translator" },
    { title: "BookMyStay", description: "A Java reservation application modelling room bookings, booking history, reporting services, and object-oriented business logic.", tech: "Java • OOP", repo: "https://github.com/inshalashraf/BookMyStay_App" },
    { title: "Train Management App", description: "A Java project built around train and bogie management use cases, demonstrating object-oriented design and data structures.", tech: "Java • OOP • Data Structures", repo: "https://github.com/inshalashraf/Train_Management_App" },
    { title: "STEP Classes — SOLID Principles", description: "A structured Python lab project covering SRP, OCP, LSP and clean-code refactoring through a banking domain example.", tech: "Python • OOP • SOLID", repo: "https://github.com/inshalashraf/STEP_Classes2026_Md_Inshal_Ashraf_RA2411056010013" },
    { title: "BookMark Manager", description: "A browser-based bookmark manager with local storage, add/remove functionality, clear-all controls, and a responsive interface.", tech: "HTML • CSS • JavaScript", repo: "https://github.com/inshalashraf/BookMark-project" }
]

export const Projects = () => (
    <section className="projects" id="projects">
        <Container>
            <div className="projects-header">
                <span className="section-label">SELECTED WORK</span>
                <h2>Projects I've built</h2>
                <p>Practical software projects covering backend development, databases, Java, Python, web development, and data-driven problem solving.</p>
            </div>
            <Row className="g-4">
                {projects.map((project, index) => (
                    <Col md={6} lg={4} key={project.title}>
                        <article className="project-card">
                            <div className="project-number">0{index + 1}</div>
                            <div>
                                <span className="project-tech">{project.tech}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer"><Github /> View Repository <ArrowUpRight /></a>
                        </article>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
)
