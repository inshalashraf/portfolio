import { useState } from 'react'
import './App.css'

const projects = [
  { title: 'GradeHub', type: 'Desktop · Java', description: 'Academic record manager and CGPA calculator with semester-wise and cumulative calculations, JDBC CRUD operations, and role-based faculty access.', tags: ['Java 17', 'Swing', 'MySQL', 'JDBC'], repo: 'https://github.com/inshalashraf/CGPA-Calculator' },
  { title: 'Online Language Translator', type: 'Application · Java', description: 'Multi-language translation application supporting 7+ languages through REST APIs with SQLite persistence and fallback handling.', tags: ['Java 17', 'REST APIs', 'SQLite', 'Gradle'], repo: 'https://github.com/inshalashraf/Language-Translator' },
  { title: 'Predictive Marketing', type: 'Data Science · ML', description: 'Exploratory and predictive analysis of Meta Ads performance using preprocessing, EDA, feature analysis, and predictive modeling.', tags: ['Python', 'ML', 'EDA', 'Forecasting'], repo: 'https://github.com/inshalashraf' },
  { title: 'BookMyStay', type: 'Software Engineering', description: 'Hotel booking management application demonstrating clean object-oriented design and practical application workflows.', tags: ['Java', 'OOP', 'Design'], repo: 'https://github.com/inshalashraf/BookMyStay_App' },
  { title: 'Train Management App', type: 'Software Engineering', description: 'Train management application focused on structured Java design, reusable components, and clear console-based workflows.', tags: ['Java', 'OOP', 'CLI'], repo: 'https://github.com/inshalashraf/Train_Management_App' },
  { title: 'SOLID Principles', type: 'Architecture · Python', description: 'Hands-on implementation of SOLID principles through banking examples, covering SRP, OCP and LSP with before-and-after designs.', tags: ['Python', 'SOLID', 'Design Patterns'], repo: 'https://github.com/inshalashraf/STEP_Classes2026_Md_Inshal_Ashraf_RA2411056010013' }
]

const experience = [
  { period: 'Jul 2026 — Present', role: 'Backend Developer Intern', company: 'Icebrkr · Switzerland-based AI startup', text: 'Working on backend development and software engineering tasks for an AI-focused product environment.' },
  { period: 'Jun 2026 — Jul 2026', role: 'Backend Development Intern', company: 'Usha Martin Private Limited', text: 'Contributed to backend development work and gained practical experience with software systems and development workflows.' },
  { period: 'Oct 2024 — Present', role: 'Associate Director', company: 'Newton School Coding Club · SRMIST', text: 'Helped organize technical initiatives and community activities, supporting student learning and large-scale events.' }
]

const skillGroups = [
  ['Languages', 'Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  ['Backend & Web', 'REST APIs', 'JDBC', 'JSON', 'HTTP', 'Next.js', 'HTML/CSS'],
  ['Databases', 'PostgreSQL', 'MySQL', 'SQLite'],
  ['Core CS', 'DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  ['Data & ML', 'Machine Learning', 'EDA', 'Data Preprocessing', 'Predictive Modeling', 'Forecasting'],
  ['Tools', 'Git', 'GitHub', 'Maven', 'Gradle']
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <nav className="nav">
        <a className="brand" href="#home" onClick={closeMenu}><span>IA</span> Inshal Ashraf</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-resume" href="/portfolio/resume.html" target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><i /> SOFTWARE ENGINEERING · DATA SCIENCE</div>
            <h1>Building software that is <em>useful, reliable &amp; human.</em></h1>
            <p className="hero-lead">I'm Inshal Ashraf, a CSE (Data Science) student at SRMIST focused on backend engineering, DSA, and data-driven applications.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <span>→</span></a>
              <a className="button ghost" href="/portfolio/resume.html" target="_blank" rel="noreferrer">View resume</a>
            </div>
            <div className="social-row">
              <a href="https://github.com/inshalashraf" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/md-inshal-ashraf-0b85a92bb/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://leetcode.com/u/InshalxD/" target="_blank" rel="noreferrer">LeetCode ↗</a>
              <a href="https://www.hackerrank.com/profile/mdinshalashraf" target="_blank" rel="noreferrer">HackerRank ↗</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="code-top"><span /><span /><span /><small>inshal.py</small></div>
            <pre>{`class Inshal:
    role = "Software Engineer"
    focus = [
        "Backend",
        "DSA",
        "Data Science"
    ]

    def build(self):
        return "impactful software"`}</pre>
            <div className="availability"><b /> Open to internship opportunities</div>
          </div>
        </section>

        <section id="about" className="section section-wrap">
          <div className="section-label">01 / ABOUT</div>
          <div className="two-col">
            <div><h2>Curious by nature.<br /><span>Engineer by practice.</span></h2></div>
            <div className="body-copy"><p>I am a B.Tech CSE (Data Science) student at SRM Institute of Science and Technology, graduating in 2028 with a <strong>9.27/10 CGPA</strong>.</p><p>I enjoy taking ideas from a rough problem statement to a working product — designing the logic, building the backend, working with databases, and making the result dependable.</p><p>Alongside development, I actively practice problem solving and explore machine learning and data-driven systems.</p></div>
          </div>
          <div className="stats"><div><strong>9.27</strong><span>CGPA / 10</span></div><div><strong>104+</strong><span>LeetCode problems</span></div><div><strong>3★</strong><span>HackerRank Problem Solving</span></div><div><strong>2028</strong><span>Expected graduation</span></div></div>
        </section>

        <section id="experience" className="section section-wrap dark-section">
          <div className="section-label">02 / EXPERIENCE</div>
          <h2>Where I've been <span>&amp; what I've learned.</span></h2>
          <div className="timeline">{experience.map((item, i) => <article className="timeline-item" key={item.company}><div className="timeline-marker">0{i + 1}</div><div className="timeline-content"><div className="period">{item.period}</div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.text}</p></div></article>)}</div>
        </section>

        <section id="projects" className="section section-wrap">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-heading"><div><h2>Things I've <span>built.</span></h2></div><p>A selection of academic and personal projects spanning software engineering, backend development and data science.</p></div>
          <div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-number">0{i + 1}</div><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.repo} target="_blank" rel="noreferrer">View project <span>↗</span></a></article>)}</div>
        </section>

        <section id="skills" className="section section-wrap skills-section">
          <div className="section-label">04 / TOOLKIT</div><h2>My <span>stack.</span></h2>
          <div className="skill-grid">{skillGroups.map(group => <div className="skill-group" key={group[0]}><h3>{group[0]}</h3><div>{group.slice(1).map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>
        </section>

        <section className="section section-wrap credentials"><div className="section-label">05 / CREDENTIALS</div><div className="credential-grid"><div><h3>Education</h3><p><strong>SRM Institute of Science and Technology</strong><br />B.Tech CSE (Data Science) · 2024–2028<br />CGPA: 9.27 / 10</p></div><div><h3>Certifications</h3><p>SAP Certified Data Analyst — SAP Analytics Cloud<br />Oracle University Certified Data Science Professional<br />NPTEL OOP Fundamentals — IIT Roorkee<br />NPTEL Programming in Java — IIT Kharagpur<br />Meta Introduction to Databases — Coursera</p></div><div><h3>Recognition</h3><p>22nd rank across CSE/CSE-related specializations at SRMIST KTR Campus in employability assessment.<br />HackerRank 3★ Problem Solving · 2★ Java</p></div></div></section>

        <section id="contact" className="contact section-wrap"><div className="section-label">06 / CONTACT</div><h2>Let's build something<br /><em>worth shipping.</em></h2><p>I'm currently looking for software engineering and backend internship opportunities where I can learn, contribute, and grow.</p><a className="email-link" href="mailto:mdinshalashraf@gmail.com">mdinshalashraf@gmail.com <span>↗</span></a><div className="contact-links"><a href="https://github.com/inshalashraf" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/md-inshal-ashraf-0b85a92bb/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://leetcode.com/u/InshalxD/" target="_blank" rel="noreferrer">LeetCode</a><a href="https://www.hackerrank.com/profile/mdinshalashraf" target="_blank" rel="noreferrer">HackerRank</a></div></section>
      </main>

      <footer><span>© 2026 Inshal Ashraf</span><span>Designed &amp; built with purpose.</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}

export default App
