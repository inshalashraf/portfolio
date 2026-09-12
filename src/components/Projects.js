import { Col, Container, Row } from "react-bootstrap"
import { Github, ArrowUpRight } from "react-bootstrap-icons"

const projects = [
    {
        title: "BookMark Manager",
        description: "A clean browser-based bookmark manager with add, delete, clear-all, and local storage support.",
        tech: "HTML • CSS • JavaScript",
        repo: "https://github.com/inshalashraf/BookMark-project"
    },
    {
        title: "Language Translator",
        description: "A Java-based language translation application built as a practical desktop project.",
        tech: "Java • Gradle",
        repo: "https://github.com/inshalashraf/Language-Translator"
    },
    {
        title: "CGPA Calculator",
        description: "A student-focused calculator for working with semester grades and CGPA calculations.",
        tech: "Java • Maven • SQL",
        repo: "https://github.com/inshalashraf/CGPA-Calculator"
    },
    {
        title: "Train Management App",
        description: "A Java application demonstrating train and bogie management concepts through use cases.",
        tech: "Java • OOP",
        repo: "https://github.com/inshalashraf/Train_Management_App"
    },
    {
        title: "BookMyStay App",
        description: "A Java project modelling hotel reservations, booking history, and reporting services.",
        tech: "Java • OOP",
        repo: "https://github.com/inshalashraf/BookMyStay_App"
    },
    {
        title: "Palindrome Checker",
        description: "A simple application that checks whether an input value is a palindrome.",
        tech: "Java",
        repo: "https://github.com/inshalashraf/Palindrome_Checker_App"
    }
]

export const Projects = () => {
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="projects-header">
                            <h2>Featured Projects</h2>
                            <p>
                                A selection of projects where I practice software development, problem solving,
                                Java, Python, web development, and data-focused concepts.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    {projects.map((project) => (
                        <Col md={6} lg={4} key={project.title}>
                            <article className="project-card">
                                <div>
                                    <span className="project-tech">{project.tech}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                    <Github /> View on GitHub <ArrowUpRight />
                                </a>
                            </article>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
