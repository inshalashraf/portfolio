import { Col, Container, Row } from "react-bootstrap"

const experience = [
    {
        role: "Backend Developer Intern",
        company: "Icebrkr · Switzerland-based AI Startup",
        period: "Jul 2026 — Present",
        points: [
            "Contributing to an AI-powered campus platform that helps students connect, discover communities, and collaborate.",
            "Developing backend and web application components using Java, TypeScript, Next.js, PostgreSQL, and JSON.",
            "Collaborating with developers and stakeholders to translate student use cases into maintainable backend functionality."
        ]
    },
    {
        role: "Backend Development Intern",
        company: "Usha Martin Private Limited",
        period: "Jun 2026 — Jul 2026",
        points: [
            "Built and maintained backend components and Python scripts as part of the backend engineering team.",
            "Used Git-based development practices to build, test, debug, and improve backend logic.",
            "Improved code quality and reliability through debugging and code reviews with senior developers."
        ]
    },
    {
        role: "Associate Director",
        company: "Newton School Coding Club · SRMIST",
        period: "Oct 2024 — Present",
        points: [
            "Designed database schema for the official hackathon registration and submission platform supporting 500+ participants.",
            "Helped build and manage submission platforms and evaluation pipelines for 2 Pan-India hackathons and 2 ideathons.",
            "Worked with mentors, judges, and team members on technical requirements, evaluation criteria, and execution."
        ]
    }
]

export const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <Container>
                <div className="section-heading">
                    <span className="section-label">EXPERIENCE</span>
                    <h2>Where I've worked & contributed</h2>
                    <p>Hands-on experience across backend engineering, software development, and technical event platforms.</p>
                </div>
                <Row>
                    <Col lg={10} className="mx-auto">
                        <div className="timeline">
                            {experience.map((item) => (
                                <article className="timeline-item" key={`${item.role}-${item.company}`}>
                                    <div className="timeline-dot" />
                                    <div className="timeline-content">
                                        <div className="timeline-top">
                                            <div>
                                                <h3>{item.role}</h3>
                                                <h4>{item.company}</h4>
                                            </div>
                                            <span>{item.period}</span>
                                        </div>
                                        <ul>
                                            {item.points.map((point) => <li key={point}>{point}</li>)}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
