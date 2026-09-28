import { useState } from 'react'
import { awards, profile, projects, specialAward } from './content.js'
import './App.css'

const navigation = [
  { href: '#recognition', label: 'Recognition' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#about', label: 'About' },
]

function ArrowUpRight({ size = 16 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Star({ size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="m12 2.8 2.5 6.7 6.7 2.5-6.7 2.5-2.5 6.7-2.5-6.7-6.7-2.5 6.7-2.5L12 2.8Z" fill="currentColor" />
    </svg>
  )
}

function ProjectArtwork({ project }) {
  if (project.image) {
    return (
      <div className="project-art project-art--image">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`project-art project-art--${project.art}`} aria-hidden="true">
      {project.art === 'path' && (
        <svg className="art-svg path-art" viewBox="0 0 520 300" fill="none">
          <path className="art-grid" d="M0 60H520M0 120H520M0 180H520M0 240H520M70 0V300M150 0V300M230 0V300M310 0V300M390 0V300M470 0V300" />
          <path className="path-shadow" d="M76 234 169 234c38 0 45-82 86-82h82c48 0 41-87 100-87" />
          <path className="path-line" d="M76 234 169 234c38 0 45-82 86-82h82c48 0 41-87 100-87" />
          <circle cx="76" cy="234" r="10" className="path-node" />
          <circle cx="169" cy="234" r="8" className="path-node path-node--soft" />
          <circle cx="255" cy="152" r="8" className="path-node path-node--soft" />
          <circle cx="437" cy="65" r="11" className="path-node" />
          <path d="m421 54 17 11-17 11" className="path-arrow" />
          <text x="42" y="278" className="art-label">START</text>
          <text x="390" y="35" className="art-label">SMOOTH PATH</text>
        </svg>
      )}
      {project.art === 'exam' && (
        <svg className="art-svg exam-art" viewBox="0 0 520 300" fill="none">
          <rect x="101" y="39" width="255" height="222" rx="22" className="exam-sheet" />
          <rect x="129" y="68" width="73" height="8" rx="4" className="exam-line exam-line--dark" />
          <rect x="129" y="91" width="185" height="6" rx="3" className="exam-line" />
          <rect x="129" y="108" width="143" height="6" rx="3" className="exam-line" />
          <circle cx="145" cy="151" r="10" className="exam-choice exam-choice--selected" />
          <rect x="166" y="147" width="137" height="7" rx="3.5" className="exam-line" />
          <circle cx="145" cy="182" r="10" className="exam-choice" />
          <rect x="166" y="178" width="112" height="7" rx="3.5" className="exam-line" />
          <circle cx="145" cy="213" r="10" className="exam-choice" />
          <rect x="166" y="209" width="128" height="7" rx="3.5" className="exam-line" />
          <rect x="327" y="120" width="113" height="110" rx="22" className="exam-note" />
          <path d="M359 183v-25a7 7 0 0 1 14 0v13-25a7 7 0 0 1 14 0v22-17a7 7 0 0 1 14 0v22-10a7 7 0 0 1 14 0v19c0 22-13 34-34 34h-8c-12 0-19-8-27-19l-9-12a7 7 0 0 1 11-9l11 12Z" className="exam-hand" />
          <path d="m393 51 7 15 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2 7-15Z" className="exam-spark" />
        </svg>
      )}
      {project.art === 'lidar' && (
        <svg className="art-svg lidar-art" viewBox="0 0 520 300" fill="none">
          <path d="M36 69H484M36 119H484M36 169H484M36 219H484M86 34V268M136 34V268M186 34V268M236 34V268M286 34V268M336 34V268M386 34V268M436 34V268" className="lidar-grid" />
          <circle cx="250" cy="158" r="28" className="lidar-robot" />
          <circle cx="250" cy="158" r="69" className="lidar-wave lidar-wave--one" />
          <circle cx="250" cy="158" r="116" className="lidar-wave lidar-wave--two" />
          <path d="M250 158 399 79M250 158 443 151M250 158 362 243" className="lidar-ray" />
          <path d="M250 158c61-50 101-54 149-79M250 158c49-4 125 3 193-7M250 158c43 37 79 65 112 85" className="lidar-map" />
          <circle cx="399" cy="79" r="8" className="lidar-point" />
          <circle cx="443" cy="151" r="8" className="lidar-point" />
          <circle cx="362" cy="243" r="8" className="lidar-point" />
          <path d="M242 158h16M250 150v16" className="lidar-cross" />
          <text x="39" y="288" className="art-label">MAP THE SPACE</text>
        </svg>
      )}
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card--${project.theme}`}>
      <ProjectArtwork project={project} />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{project.area}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <div className="contribution">
          <span className="contribution__label">MY PART</span>
          <p>{project.contribution || <em>Personal contribution to add before publishing.</em>}</p>
        </div>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
        {project.links?.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}<ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function AwardCard({ award, index }) {
  return (
    <article className={`award-card award-card--${index % 3}`}>
      <div className="award-card__top">
        <span className="award-card__icon" aria-hidden="true"><Star size={20} /></span>
        <span className="team-label">TEAM AWARD</span>
      </div>
      <p className="award-card__year">{award.year}</p>
      <h3>{award.event}</h3>
      <p className="award-card__result">{award.result}</p>
    </article>
  )
}

function SocialLinks() {
  const items = [
    profile.links.github && { label: 'GitHub', href: profile.links.github },
    profile.links.linkedin && { label: 'LinkedIn', href: profile.links.linkedin },
    profile.links.email && { label: 'Email', href: `mailto:${profile.links.email}` },
  ].filter(Boolean)

  if (items.length === 0) {
    return <p className="contact-placeholder">Add your GitHub profile and public email in <code>src/content.js</code> before sharing.</p>
  }

  return (
    <div className="social-links">
      {items.map((item) => (
        <a key={item.label} href={item.href} target={item.label === 'Email' ? undefined : '_blank'} rel={item.label === 'Email' ? undefined : 'noreferrer'}>
          {item.label}<ArrowUpRight size={15} />
        </a>
      ))}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Portfolio home">
          <span className="brand__mark"><Star size={20} /></span>
          <span className="brand__text">CURIOUS<br />WORKS</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
          <span className={`menu-toggle__icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="main-navigation" className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Say hello <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__dot" /> A LITTLE BIT OF EVERYTHING I LOVE</p>
            <h1 id="hero-title">Hi, I’m <span>{profile.name || 'Your Name'}</span><br />I make ideas <em>move.</em></h1>
            <p className="hero__intro">A growing collection of projects, experiments, and team wins — from agentic AI to robotics.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">Explore my work <ArrowUpRight /></a>
              <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero__counts" aria-label="Portfolio summary">
              <div><strong>{projects.length.toString().padStart(2, '0')}</strong><span>projects</span></div>
              <span className="hero__counts-divider" aria-hidden="true" />
              <div><strong>{awards.length.toString().padStart(2, '0')}</strong><span>team awards</span></div>
              <span className="hero__counts-note">and plenty of things learned along the way <span aria-hidden="true">↗</span></span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero-sticker hero-sticker--top"><Star size={16} /> AI × ROBOTICS × SOFTWARE</div>
            <div className="portrait-frame">
              {profile.photo ? (
                <img src={profile.photo} alt={`${profile.name} portrait`} />
              ) : (
                <div className="portrait-placeholder">
                  <div className="portrait-placeholder__sun" />
                  <div className="portrait-placeholder__person">
                    <div className="portrait-placeholder__head" />
                    <div className="portrait-placeholder__body" />
                  </div>
                  <span>Add your photo<br /><small>in src/content.js</small></span>
                </div>
              )}
              <span className="portrait-frame__stamp">MADE WITH<br />CURIOSITY</span>
            </div>
            <div className="hero-sticker hero-sticker--bottom"><span className="sticker-spark">✳</span> Scroll to explore</div>
            <span className="hero__scribble" aria-hidden="true">✳</span>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            <span>AI & DATA</span><i>✳</i><span>ROBOTICS</span><i>✳</i><span>SOFTWARE</span><i>✳</i><span>TEAMWORK</span><i>✳</i>
            <span>AI & DATA</span><i>✳</i><span>ROBOTICS</span><i>✳</i><span>SOFTWARE</span><i>✳</i><span>TEAMWORK</span><i>✳</i>
          </div>
        </div>

        <section className="recognition-section section-wrap" id="recognition" aria-labelledby="recognition-title">
          <div className="recognition-card">
            <div className="recognition-card__emblem" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none">
                <path d="M32 30h56l20 27-48 49L12 57l20-27Z" fill="#f4dc9d" />
                <path d="m32 30 28 27 28-27H32Z" fill="#fff5d7" />
                <path d="M12 57h48L32 30 12 57Zm96 0H60l28-27 20 27Z" fill="#e9c574" />
                <path d="m38 57 22 49 22-49H38Z" fill="#fff1c2" />
                <path d="M32 30h56l20 27-48 49L12 57l20-27Zm-20 27h96M32 30l6 27 22 49 22-49 6-27M38 57l22-27 22 27" stroke="#9c732d" strokeWidth="2" strokeLinejoin="round" />
                <path d="M104 14v12m-6-6h12M16 85v8m-4-4h8" stroke="#b98b39" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="recognition-card__copy">
              <p className="eyebrow"><span className="eyebrow__dot eyebrow__dot--orange" /> SPECIAL RECOGNITION</p>
              <h2 id="recognition-title">{specialAward.title}<span>“{specialAward.name}”</span></h2>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow__dot eyebrow__dot--blue" /> THE THINGS I BUILT</p>
              <h2 id="projects-title">A few projects.<br /><em>A lot of learning.</em></h2>
            </div>
            <p className="section-heading__aside">Different problems, different tools — each one taught me something new.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
        </section>

        <section className="awards-section" id="awards" aria-labelledby="awards-title">
          <div className="section-wrap">
            <div className="section-heading section-heading--awards">
              <div>
                <p className="eyebrow"><span className="eyebrow__dot eyebrow__dot--orange" /> TEAMWORK THAT PAID OFF</p>
                <h2 id="awards-title">Good things<br />happen <em>together.</em></h2>
              </div>
              <p className="section-heading__aside">Every result below is a team award. The work behind it mattered just as much as the place.</p>
            </div>
            <div className="awards-grid">
              {awards.map((award, index) => <AwardCard key={`${award.event}-${award.year}`} award={award} index={index} />)}
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="about-card">
            <div className="about-card__marker" aria-hidden="true"><Star size={25} /></div>
            <div className="about-card__copy">
              <p className="eyebrow"><span className="eyebrow__dot eyebrow__dot--green" /> THE PERSON BEHIND THE PROJECTS</p>
              <h2 id="about-title">Curious by nature.<br /><em>Hands-on by choice.</em></h2>
              <p>{profile.bio}</p>
              {profile.education && <p className="education-line"><span>STUDYING</span>{profile.education}</p>}
            </div>
            <div className="about-card__skills">
              <p className="skills-title">TOOLS & TOPICS I EXPLORE</p>
              <ul className="skill-list">
                {profile.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              <p className="skills-note">A snapshot of tools used across the projects on this page.</p>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-card">
            <div className="contact-card__decoration" aria-hidden="true"><span>↗</span><span>✳</span><span>●</span></div>
            <p className="eyebrow"><span className="eyebrow__dot eyebrow__dot--pink" /> GOT SOMETHING IN MIND?</p>
            <h2 id="contact-title">Let’s make<br /><em>something good.</em></h2>
            <p className="contact-card__lead">Have a question, an idea, or just want to say hi? I’d love to hear from you.</p>
            <SocialLinks />
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand brand--footer" href="#top">
          <span className="brand__mark"><Star size={18} /></span>
          <span className="brand__text">CURIOUS<br />WORKS</span>
        </a>
        <p>Made with care, curiosity, and React.</p>
        <a className="back-top" href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
