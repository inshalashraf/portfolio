import { useEffect, useState } from 'react'
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

const terminalResponses = {
  help: ['about       → who I am', 'projects    → selected work', 'skills      → technical toolkit', 'experience  → internships & leadership', 'contact     → ways to reach me', 'clear       → clear terminal'],
  about: ['Inshal Ashraf', 'B.Tech CSE (Data Science) · SRMIST · 2024–2028', 'Focused on backend engineering, DSA and data-driven systems.', 'CGPA: 9.27 / 10'],
  projects: ['GradeHub · Java / Swing / MySQL', 'Online Language Translator · Java / REST / SQLite', 'Predictive Marketing · Python / ML / EDA', 'BookMyStay · Java / OOP', 'Train Management App · Java / CLI'],
  skills: ['Python · Java · TypeScript · JavaScript · SQL', 'REST APIs · Next.js · JDBC · HTTP', 'PostgreSQL · MySQL · SQLite', 'DSA · OOP · DBMS · OS · Computer Networks', 'Machine Learning · EDA · Forecasting · Git / GitHub'],
  experience: ['Icebrkr — Backend Developer Intern · Jul 2026–Present', 'Usha Martin — Backend Development Intern · Jun–Jul 2026', 'Newton School Coding Club — Associate Director · Oct 2024–Present'],
  contact: ['Email     → mdinshalashraf@gmail.com', 'GitHub    → github.com/inshalashraf', 'LinkedIn  → linkedin.com/in/md-inshal-ashraf-0b85a92bb', 'LeetCode  → leetcode.com/u/InshalxD/']
}

const sectionForCommand = { about: 'about', projects: 'projects', skills: 'skills', experience: 'experience', contact: 'contact' }

function InteractiveTerminal() {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 700)
    return () => clearTimeout(timer)
  }, [])

  const runCommand = command => {
    const cmd = command.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') { setHistory([]); return }
    const response = terminalResponses[cmd] || [`command not found: ${cmd}`, 'Type “help” to see available commands.']
    setHistory(prev => [...prev, { cmd, response }])
    if (sectionForCommand[cmd]) {
      window.setTimeout(() => document.getElementById(sectionForCommand[cmd])?.scrollIntoView({ behavior: 'smooth' }), 50)
    }
  }

  return (
    <div className={`interactive-terminal ${booted ? 'booted' : ''}`}>
      <div className="terminal-head"><span aria-hidden="true">● ● ●</span><small>inshal@portfolio:~</small><b>INTERACTIVE</b></div>
      <div className="terminal-body">
        <div className="terminal-welcome">{booted && <><span>INSHAL.OS v1.0</span><small>Type <strong>help</strong> to explore</small></>}</div>
        <div className="terminal-history" aria-live="polite">
          {history.map((item, index) => <div className="terminal-command" key={`${item.cmd}-${index}`}><div><i>inshal@portfolio</i>:~$ {item.cmd}</div>{item.response.map((line, lineIndex) => <div className="terminal-output" key={lineIndex}>{line}</div>)}</div>)}
        </div>
        <form onSubmit={e => { e.preventDefault(); runCommand(input); setInput('') }} className="terminal-input-row">
          <label htmlFor="terminal-command">inshal@portfolio:~$</label>
          <input id="terminal-command" value={input} onChange={e => setInput(e.target.value)} aria-label="Portfolio terminal command" autoComplete="off" spellCheck="false" placeholder="type a command..." />
        </form>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    const reveal = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      reveal.forEach(el => el.classList.add('visible'))
      return undefined
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.12 })
    reveal.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const moveGlow = e => {
    document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
    document.documentElement.style.setProperty('--my', `${e.clientY}px`)
  }

  return (
    <div className="site-shell" onMouseMove={moveGlow}>\n      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}><span aria-hidden="true">IA</span> INSHAL ASHRAF</a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation">☰</button>
        <div id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-resume" href="/portfolio/resume.html" target="_blank" rel="noopener noreferrer">Resume ↗</a>
        </div>
      </nav>

      <main id="main-content">
        <section id="home" className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><i aria-hidden="true" /> SOFTWARE ENGINEER · DATA SCIENCE <span className="availability"><b aria-hidden="true" /> OPEN TO OPPORTUNITIES</span></div>
            <h1 id="hero-title">I build <em>useful systems</em> with clean code and thoughtful interfaces.</h1>
            <p className="hero-lead">I'm Inshal Ashraf — a B.Tech CSE (Data Science) student at SRMIST focused on backend engineering, DSA and data-driven applications.</p>
            <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <span aria-hidden="true">→</span></a><a className="button ghost" href="/portfolio/resume.html" target="_blank" rel="noopener noreferrer">View resume</a></div>
            <div className="quick-facts"><span>9.27 CGPA</span><span>104+ LeetCode</span><span>Python-first</span></div><div className="social-row"><a href="https://github.com/inshalashraf" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">GitHub ↗</a><a href="https://www.linkedin.com/in/md-inshal-ashraf-0b85a92bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">LinkedIn ↗</a><a href="https://leetcode.com/u/InshalxD/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile">LeetCode ↗</a><a href="https://www.hackerrank.com/profile/mdinshalashraf" target="_blank" rel="noopener noreferrer" aria-label="HackerRank profile">HackerRank ↗</a></div>
          </div>
          <div className="hero-visual">
            <div className="flight-card" aria-label="Portfolio boarding pass">
              <div className="flight-top"><span aria-hidden="true">IA</span><small>BOARDING PASS / 2026</small></div>
              <div className="route"><div><small>PASSENGER</small><strong>INSHAL</strong></div><b aria-hidden="true">✦</b><div><small>ROLE</small><strong>SWE INTERN</strong></div></div>
              <div className="flight-meta"><span><small>FROM</small>SRMIST</span><span><small>TO</small>SOFTWARE</span><span><small>CLASS</small>FIRST</span><span><small>SEQ</small>0927</span></div>
              <div className="barcode" aria-hidden="true">|||| ||| |||| | ||| || |||| |||</div>
            </div>
            <InteractiveTerminal />
          </div>
        </section>

        <section id="about" className="section section-wrap reveal" aria-labelledby="about-title"><div className="section-label">01 / ABOUT</div><div className="two-col"><div><h2 id="about-title">Curious by nature.<br /><span>Engineer by practice.</span></h2></div><div className="body-copy"><p>I am a B.Tech CSE (Data Science) student at SRM Institute of Science and Technology, graduating in 2028 with a <strong>9.27/10 CGPA</strong>.</p><p>I enjoy taking ideas from a rough problem statement to a working product — designing the logic, building the backend, working with databases, and making the result dependable.</p><p>Alongside development, I actively practice problem solving and explore machine learning and data-driven systems.</p></div></div><div className="stats"><div><strong>9.27</strong><span>CGPA / 10</span></div><div><strong>104+</strong><span>LeetCode problems</span></div><div><strong>3★</strong><span>HackerRank Problem Solving</span></div><div><strong>2028</strong><span>Expected graduation</span></div></div></section>

        <section id="experience" className="section section-wrap dark-section reveal" aria-labelledby="experience-title"><div className="section-label">02 / EXPERIENCE</div><h2 id="experience-title">Where I've been <span>&amp; what I've learned.</span></h2><div className="timeline">{experience.map((item, i) => <article className="timeline-item" key={item.company}><div className="timeline-marker" aria-hidden="true">0{i + 1}</div><div className="timeline-content"><div className="period">{item.period}</div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.text}</p></div></article>)}</div></section>

        <section id="projects" className="section section-wrap reveal" aria-labelledby="projects-title"><div className="section-label">03 / SELECTED WORK</div><div className="section-heading"><div><h2 id="projects-title">Things I've <span>built.</span></h2></div><p>A selection of academic and personal projects spanning software engineering, backend development and data science.</p></div><div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-number" aria-hidden="true">0{i + 1}</div><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} project on GitHub`}>View project <span aria-hidden="true">↗</span></a></article>)}</div></section>

        <section id="skills" className="section section-wrap skills-section reveal" aria-labelledby="skills-title"><div className="section-label">04 / TOOLKIT</div><h2 id="skills-title">My <span>stack.</span></h2><div className="skill-grid">{skillGroups.map(group => <div className="skill-group" key={group[0]}><h3>{group[0]}</h3><div>{group.slice(1).map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

        <section className="section section-wrap credentials reveal" aria-labelledby="credentials-title"><div className="section-label">05 / CREDENTIALS</div><h2 id="credentials-title" className="sr-only">Credentials</h2><div className="credential-grid"><div><h3>Education</h3><p><strong>SRM Institute of Science and Technology</strong><br />B.Tech CSE (Data Science) · 2024–2028<br />CGPA: 9.27 / 10</p></div><div><h3>Certifications</h3><p>SAP Certified Data Analyst — SAP Analytics Cloud<br />Oracle University Certified Data Science Professional<br />NPTEL OOP Fundamentals — IIT Roorkee<br />NPTEL Programming in Java — IIT Kharagpur<br />Meta Introduction to Databases — Coursera</p></div><div><h3>Recognition</h3><p>22nd rank across CSE/CSE-related specializations at SRMIST KTR Campus in employability assessment.<br />HackerRank 3★ Problem Solving · 2★ Java</p></div></div></section>

        <section id="contact" className="contact section-wrap reveal" aria-labelledby="contact-title"><div className="section-label">06 / CONTACT</div><h2 id="contact-title">Let's build something<br /><em>worth shipping.</em></h2><p>I'm currently looking for software engineering and backend internship opportunities where I can learn, contribute, and grow.</p><a className="email-link" href="mailto:mdinshalashraf@gmail.com" aria-label="Email Inshal Ashraf">mdinshalashraf@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://github.com/inshalashraf" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/md-inshal-ashraf-0b85a92bb/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://leetcode.com/u/InshalxD/" target="_blank" rel="noopener noreferrer">LeetCode</a><a href="https://www.hackerrank.com/profile/mdinshalashraf" target="_blank" rel="noopener noreferrer">HackerRank</a></div></section>
      </main>
      <footer><span>© 2026 Inshal Ashraf</span><span>DESIGNED TO PERFORM</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}

export default App
