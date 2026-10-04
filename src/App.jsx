import { useEffect, useRef, useState } from 'react'
import { profile, projects, specialAward, teamStories } from './content.js'
import { useCardTilt, useHeroMotion, useMotionPreferences, useSectionReveal } from './motion.js'
import TeamStories from './TeamStories.jsx'
import './App.css'

const navigation = [
  { href: '#profile', label: 'Profile' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Achievements' },
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

function ContactIcon({ type }) {
  const commonProps = {
    'aria-hidden': true,
    className: 'social-links__icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    focusable: false,
  }

  if (type === 'facebook') {
    return <svg {...commonProps}><path d="M13.5 21v-8h2.8l.4-3.1h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V13h2.8v8h3.3Z" fill="currentColor" /></svg>
  }

  if (type === 'instagram') {
    return <svg {...commonProps}><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" /></svg>
  }

  if (type === 'linkedin') {
    return <svg {...commonProps}><path d="M5 9v10M5 5.1v.1M10 19v-6.1c0-2 1.2-3.2 3-3.2s3 1.2 3 3.2V19m0-6.1c0-2 1.2-3.2 3-3.2s3 1.2 3 3.2V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="5" cy="5" r="1.2" fill="currentColor" /></svg>
  }

  if (type === 'email') {
    return <svg {...commonProps}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  }

  return <svg {...commonProps}><path d="M7.2 3.8 10 7.5 8.3 9.4a14.2 14.2 0 0 0 6.3 6.3l1.9-1.7 3.7 2.8-.7 3.1c-.2.8-1 1.3-1.8 1.2C9.8 20 4 14.2 2.9 6.3c-.1-.8.4-1.6 1.2-1.8l3.1-.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-scene__grid" />
      <div className="hero-scene__floor" />
      <div className="hero-scene__aura hero-scene__aura--green" />
      <div className="hero-scene__aura hero-scene__aura--cyan" />
      <div className="hero-scene__beam" />
      <svg className="hero-scene__stack" viewBox="0 0 620 650" fill="none" focusable="false">
        <g className="hero-scene__layer hero-scene__layer--top">
          <path d="m310 52 240 110-240 110L70 162 310 52Z" />
          <path d="M70 162v28l240 110 240-110v-28M310 272v28" />
        </g>
        <g className="hero-scene__layer hero-scene__layer--middle">
          <path d="m310 218 228 104-228 104L82 322 310 218Z" />
          <path d="M82 322v26l228 104 228-104v-26M310 426v26" />
        </g>
        <g className="hero-scene__layer hero-scene__layer--bottom">
          <path d="m310 375 252 118-252 118L58 493 310 375Z" />
          <path d="M58 493v30l252 118 252-118v-30M310 611v30" />
        </g>
        <path className="hero-scene__trace" d="m70 162 240 110 240-110M82 322l228 104 228-104M58 493l252 118 252-118" pathLength="1" />
      </svg>
    </div>
  )
}

function HeroArtwork() {

  return (
    <svg className="hero-art" viewBox="0 0 480 400" fill="none" aria-hidden="true">
      <path className="hero-art__grid" d="M0 80h480M0 160h480M0 240h480M0 320h480M80 0v400M160 0v400M240 0v400M320 0v400M400 0v400" />
      <circle className="hero-art__orbit" cx="240" cy="190" r="128" />
      <circle className="hero-art__orbit" cx="240" cy="190" r="164" />
      <path className="hero-art__connection" d="M148 94h32v66h8M292 212h46v42M192 316h48v-78" />
      <path className="hero-art__signal hero-art__signal--ai" d="M148 94h32v66h8" pathLength="1" />
      <path className="hero-art__signal hero-art__signal--robotics" d="M292 212h46v42" pathLength="1" />
      <path className="hero-art__signal hero-art__signal--software" d="M192 316h48v-78" pathLength="1" />
      <rect className="hero-art__node hero-art__node--ai" x="36" y="62" width="112" height="64" rx="8" />
      <text className="hero-art__label" x="92" y="90" textAnchor="middle">AI &amp; DATA</text>
      <text className="hero-art__detail" x="92" y="109" textAnchor="middle">GRAPHRAG</text>
      <rect className="hero-art__node hero-art__node--robotics" x="338" y="222" width="112" height="64" rx="8" />
      <text className="hero-art__label" x="394" y="250" textAnchor="middle">ROBOTICS</text>
      <text className="hero-art__detail" x="394" y="269" textAnchor="middle">SLAM / PATH</text>
      <rect className="hero-art__node hero-art__node--software" x="64" y="284" width="128" height="64" rx="8" />
      <text className="hero-art__label" x="128" y="312" textAnchor="middle">SOFTWARE</text>
      <text className="hero-art__detail" x="128" y="331" textAnchor="middle">REACT / C++</text>
      <path className="hero-art__connection" d="M206 134v-12m22 12v-12m24 12v-12m22 12v-12M206 238v12m22-12v12m24-12v12m22-12v12M188 154h-12m12 22h-12m12 24h-12m12 22h-12M292 154h12m-12 22h12m-12 24h12m-12 22h12" />
      <rect className="hero-art__chip-glow" x="180" y="126" width="120" height="120" rx="16" />
      <rect className="hero-art__chip" x="188" y="134" width="104" height="104" rx="12" />
      <path className="hero-art__code" d="m224 170-14 16 14 16m32-32 14 16-14 16m-9-38-14 44" />
      <circle className="hero-art__point" cx="180" cy="126" r="3" />
      <circle className="hero-art__point" cx="322" cy="212" r="3" />
      <circle className="hero-art__point" cx="240" cy="270" r="3" />
      <text className="hero-art__detail" x="240" y="379" textAnchor="middle">CONNECT IDEAS. BUILD SOMETHING.</text>
    </svg>
  )
}

function ProjectArtwork({ project }) {
  const githubLink = project.links?.find((link) => link.label === 'GitHub')

  if (project.image) {
    return (
      <div className={`project-art project-art--image project-art--${project.imageType || 'photo'}`}>
        <a className="project-art__image-link" href={project.image} target="_blank" rel="noreferrer" aria-label={`View ${project.title} ${project.imageType === 'diagram' ? 'diagram' : 'image'} in full`}>
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        </a>
      </div>
    )
  }

  const ArtworkContainer = githubLink ? 'a' : 'div'
  const artworkLinkProps = githubLink
    ? {
        href: githubLink.href,
        target: '_blank',
        rel: 'noreferrer',
        'aria-label': `Open ${project.title} on GitHub`,
      }
    : { 'aria-hidden': true }

  return (
    <ArtworkContainer className={`project-art project-art--${project.art}${githubLink ? ' project-art--linked' : ''}`} {...artworkLinkProps}>
      {project.art === 'graph' && (
        <svg className="art-svg graph-art" viewBox="0 0 520 300" fill="none" aria-hidden="true" focusable="false">
          <path className="art-grid" d="M0 60H520M0 120H520M0 180H520M0 240H520M70 0V300M150 0V300M230 0V300M310 0V300M390 0V300M470 0V300" />
          <circle cx="260" cy="150" r="104" className="graph-orbit" />
          <path className="graph-link" d="m108 73 56 62-71 66 77 39m-6-105 6 105m194-181 53 72-16 105-76 5m39-182-39 182m-161-106 96 15 157-19" />
          <path className="graph-link graph-link--active" d="M108 73c74 0 72 77 152 77M93 201c88 0 88-51 167-51m0 0c82 0 62-91 104-91m-104 91c73 0 82 86 141 86" />
          <circle cx="108" cy="73" r="12" className="graph-node" />
          <circle cx="164" cy="135" r="9" className="graph-node graph-node--soft" />
          <circle cx="93" cy="201" r="11" className="graph-node graph-node--soft" />
          <circle cx="170" cy="240" r="8" className="graph-node" />
          <circle cx="364" cy="59" r="11" className="graph-node" />
          <circle cx="417" cy="131" r="9" className="graph-node graph-node--soft" />
          <circle cx="401" cy="236" r="12" className="graph-node graph-node--soft" />
          <circle cx="325" cy="241" r="8" className="graph-node" />
          <rect x="218" y="108" width="84" height="84" rx="18" className="graph-hub" />
          <path d="m242 159 18-24 18 24h-36Z" className="graph-link graph-link--active" />
          <circle cx="260" cy="135" r="5" className="graph-node graph-hub__node" />
          <circle cx="242" cy="159" r="5" className="graph-node graph-hub__node" />
          <circle cx="278" cy="159" r="5" className="graph-node graph-hub__node" />
          <text x="42" y="278" className="art-label">KNOWLEDGE GRAPH</text>
        </svg>
      )}
      {project.art === 'path' && (
        <svg className="art-svg path-art" viewBox="0 0 520 300" fill="none" aria-hidden="true" focusable="false">
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
        <svg className="art-svg exam-art" viewBox="0 0 520 300" fill="none" aria-hidden="true" focusable="false">
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
        <svg className="art-svg lidar-art" viewBox="0 0 520 300" fill="none" aria-hidden="true" focusable="false">
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
          <text x="39" y="288" className="art-label">FLOOR EDGE DETECTION</text>
        </svg>
      )}
    </ArtworkContainer>
  )
}

function ProjectCard({ project, index, canTilt }) {
  const { sceneRef, cardRef, handlePointerMove, resetTilt } = useCardTilt(canTilt)
  const githubLink = project.links?.find((link) => link.label === 'GitHub')

  return (
    <div className="project-card-scene" ref={sceneRef} onPointerMove={handlePointerMove} onPointerLeave={resetTilt} onPointerCancel={resetTilt} onFocusCapture={resetTilt}>
      <article className="project-card" ref={cardRef}>
        <ProjectArtwork project={project} />
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{project.area}</span>
          </div>
          <h3>
            {githubLink ? (
              <a className="project-card__title-link" href={githubLink.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                {project.title}<ArrowUpRight size={14} />
              </a>
            ) : project.title}
          </h3>
          <p className="project-card__summary">{project.summary}</p>
          {project.contribution && (
            <div className="contribution">
              <span className="contribution__label">MY CONTRIBUTION</span>
              <p>{project.contribution}</p>
            </div>
          )}
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
          {(project.imageType === 'diagram' || project.links?.length > 0) && (
            <div className="project-links">
              {project.imageType === 'diagram' && project.image && (
                <a href={project.image} target="_blank" rel="noreferrer">View full diagram<ArrowUpRight size={14} /></a>
              )}
              {project.links?.map((link) => (
                <a key={link.href} className={link.label === 'GitHub' ? 'button button--secondary' : undefined} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label === 'GitHub' ? `GitHub for ${project.title}` : undefined}>
                  {link.label}<ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  )
}

function SocialLinks({ compact = false, includeGitHub = true }) {
  const items = [
    includeGitHub && profile.links.github && { label: 'GitHub', display: 'GitHub', href: profile.links.github, external: true, icon: 'github' },
    profile.links.facebook && { label: 'Facebook', display: 'Facebook', href: profile.links.facebook, external: true, icon: 'facebook' },
    profile.links.instagram && { label: 'Instagram', display: 'Instagram', href: profile.links.instagram, external: true, icon: 'instagram' },
    profile.links.linkedin && { label: 'LinkedIn', display: 'LinkedIn', href: profile.links.linkedin, external: true, icon: 'linkedin' },
    profile.links.email && { label: 'Email', display: profile.links.email, href: `mailto:${profile.links.email}`, icon: 'email' },
    profile.links.phone && { label: 'Phone', display: profile.links.phone, href: `tel:${profile.links.phone.replace(/[^+\d]/g, '')}`, icon: 'phone' },
  ].filter(Boolean)

  if (items.length === 0) {
    return null
  }

  return (
    <div className={`social-links${compact ? ' social-links--compact' : ''}`}>
      {items.map((item) => (
        <a
          className={compact ? 'social-links__link' : 'button button--secondary'}
          key={item.label}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          aria-label={item.label === 'Email' ? `Email ${item.display}` : item.label === 'Phone' ? `Call ${item.display}` : item.label}
          title={compact ? item.label : undefined}
        >
          {compact && <ContactIcon type={item.icon} />}
          {!compact && <span>{item.label}</span>}
          {!compact && <ArrowUpRight size={15} />}
        </a>
      ))}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const { reducedMotion, canTilt } = useMotionPreferences()
  useHeroMotion(heroRef, reducedMotion)
  useSectionReveal(mainRef, reducedMotion)
  const hasProfileName = Boolean(profile.name && profile.name !== 'Your Name')

  useEffect(() => {
    if (!menuOpen) return
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <>
      <div id="top" aria-hidden="true" />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${profile.fullName} portfolio home`}>
          <span className="brand__mark"><Star size={20} /></span>
          <span className="brand__text"><strong>{profile.name.toUpperCase()}<span className="brand__period" aria-hidden="true">.</span></strong><small>PERSONAL PORTFOLIO</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={menuButtonRef}
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

      <main id="main" ref={mainRef} tabIndex={-1}>
        <section className="hero" ref={heroRef} aria-labelledby="hero-title" data-reveal>
          <HeroScene />
          <div className="hero__layout section-wrap">
            <div className="hero__copy">
              <p className="eyebrow"><span className="eyebrow__dot" /> AI / ROBOTICS / SOFTWARE</p>
              <h1 id="hero-title">{hasProfileName ? <><span className="hero__hello">Hi, I’m</span><span className="hero__name">{profile.name}<span className="hero__period" aria-hidden="true">.</span></span></> : null}</h1>
              <p className="hero__intro">{profile.bio}</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#projects">Explore my work <ArrowUpRight /></a>
                <a className="button button--secondary" href="#about">About me <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero__counts" aria-label="Portfolio summary">
                <div><strong>{projects.length.toString().padStart(2, '0')}</strong><span>projects</span></div>
                <div><strong>{teamStories.length.toString().padStart(2, '0')}</strong><span>team stories</span></div>
              </div>
            </div>

            <div className="hero__visual">
              <div className="portrait-frame">
                <div className="portrait-frame__header"><span>AI × ROBOTICS</span><span><i aria-hidden="true" /> SOFTWARE</span></div>
                {profile.photo ? (
                  <div className="portrait-frame__photo">
                    <img src={profile.photo} alt={`Portrait of ${profile.fullName || (hasProfileName ? profile.name : 'the portfolio owner')}`} fetchPriority="high" />
                  </div>
                ) : (
                  <HeroArtwork />
                )}
                <div className="portrait-frame__footer"><span>BUILD · EXPERIMENT · LEARN</span><ArrowUpRight size={14} /></div>
              </div>
            </div>
          </div>
        </section>

        <div className="interest-strip" aria-label="Areas of interest">
          <div className="interest-strip__items section-wrap">
            {['AI & DATA', 'ROBOTICS', 'SOFTWARE', 'TEAMWORK'].map((topic) => <span key={topic}><i aria-hidden="true" />{topic}</span>)}
          </div>
        </div>

        <section className="profile-section section-wrap" id="profile" aria-labelledby="profile-title" data-reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow__dot" /> THE PERSON BEHIND THE WORK</p>
              <h2 id="profile-title">Profile</h2>
            </div>
          </div>
          <div className="profile-grid">
            <div className="profile-card">
              <p className="profile-card__label">PERSONAL DETAILS</p>
              <h3>{profile.fullName}</h3>
              <dl className="profile-facts">
                <div><dt>Nickname</dt><dd>{profile.nickname}</dd></div>
                <div><dt>GPAX</dt><dd>{profile.gpax}</dd></div>
                <div className="profile-facts__education"><dt>Education</dt><dd>{profile.education}</dd></div>
              </dl>
            </div>
            <div className="profile-award">
              <div className="profile-award__emblem" aria-hidden="true">
                <svg viewBox="0 0 120 120" fill="none">
                  <path d="M32 30h56l20 27-48 49L12 57l20-27Z" fill="currentColor" fillOpacity="0.08" />
                  <path d="m38 57 22 49 22-49H38Z" fill="currentColor" fillOpacity="0.12" />
                  <path d="M32 30h56l20 27-48 49L12 57l20-27Zm-20 27h96M32 30l6 27 22 49 22-49 6-27M38 57l22-27 22 27" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M104 14v12m-6-6h12M16 85v8m-4-4h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="profile-award__copy">
                <p className="eyebrow"><span className="eyebrow__dot" /> SPECIAL RECOGNITION</p>
                <h3>{specialAward.title}</h3>
                <p className="profile-award__name">{specialAward.name}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title" data-reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow__dot" /> THE THINGS I BUILT</p>
              <h2 id="projects-title">A few projects. <em>A lot of learning.</em></h2>
            </div>
            <p className="section-heading__aside">Different problems, different tools — each one taught me something new.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} canTilt={canTilt} />)}
          </div>
        </section>

        <section className="awards-section" id="awards" aria-labelledby="awards-title" data-reveal>
          <div className="section-wrap">
            <div className="section-heading section-heading--awards">
              <div>
                <p className="eyebrow"><span className="eyebrow__dot" /> TEAMWORK THAT MATTERS</p>
                <h2 id="awards-title">Achievements <em>&amp; Team Activities</em></h2>
              </div>
              <p className="section-heading__aside">Competition milestones, international representation, and community work with my teams.</p>
            </div>
            <TeamStories stories={teamStories} />
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title" data-reveal>
          <div className="about-card">
            <div className="about-card__copy">
              <p className="eyebrow"><span className="eyebrow__dot" /> THE PERSON BEHIND THE PROJECTS</p>
              <h2 id="about-title">Curious by nature. <em>Hands-on by choice.</em></h2>
              <p>{profile.bio}</p>
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

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title" data-reveal>
          <div className="contact-card">
            <p className="eyebrow"><span className="eyebrow__dot" /> GOT SOMETHING IN MIND?</p>
            <h2 id="contact-title">Let’s make <em>something good.</em></h2>
            <p className="contact-card__lead">Have a question, an idea, or just want to say hi? I’d love to hear from you.</p>
            <SocialLinks />
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <a className="brand brand--footer" href="#top" aria-label={`${profile.fullName} portfolio home`}>
              <span className="brand__mark"><Star size={18} /></span>
              <span className="brand__text"><strong>{profile.name.toUpperCase()}<span className="brand__period" aria-hidden="true">.</span></strong><small>PERSONAL PORTFOLIO</small></span>
            </a>
            <p className="site-footer__tagline">Computer Engineering student at KMUTNB, exploring AI, robotics, and software.</p>
          </div>
          <nav className="site-footer__contact" aria-label="Contact links">
            <SocialLinks compact includeGitHub={false} />
          </nav>
        </div>
        <div className="site-footer__meta">
          <small>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</small>
          <a className="back-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  )
}

export default App
