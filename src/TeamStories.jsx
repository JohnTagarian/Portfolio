import { useCallback, useEffect, useRef, useState } from 'react'
import { useMotionPreferences } from './motion'
import './TeamStories.css'

function StoryIcon({ activity = false }) {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {activity ? <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        <circle cx="9" cy="7" r="4" />
      </> : <path d="M7 3h10v6a5 5 0 0 1-10 0V3Zm0 2H4v3a4 4 0 0 0 4 4m9-7h3v3a4 4 0 0 1-4 4M12 14v5m-4 2h8m-6-2h4" />}
    </svg>
  )
}

const awardStyles = {
  '1st Place': 'gold',
  '2nd Place': 'silver',
  '3rd Place': 'bronze',
  'Best Autonomous': 'technical',
  'Special Prize': 'special',
}

function GalleryArrow({ previous = false }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d={previous ? 'm12 5-5 5 5 5' : 'm8 5 5 5-5 5'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function StoryCarousel({ images, title }) {
  const { reducedMotion } = useMotionPreferences()
  const carouselRef = useRef(null)
  const movingRef = useRef(false)
  const count = images.length
  const multiple = count > 1
  const [position, setPosition] = useState(multiple ? 1 : 0)
  const [animated, setAnimated] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const index = (position - (multiple ? 1 : 0) + count) % count
  const image = images[index]
  const slides = multiple ? [images[count - 1], ...images, images[0]] : images
  const running = multiple && playing && visible && !hovered && !focused && !reducedMotion

  const move = useCallback(direction => {
    if (count < 2 || (!reducedMotion && movingRef.current)) return
    movingRef.current = !reducedMotion
    setAnimated(!reducedMotion)
    setPosition(current => {
      const next = ((current - 1 + count) % count) + 1 + direction
      return reducedMotion ? ((next - 1 + count) % count) + 1 : next
    })
  }, [count, reducedMotion])

  useEffect(() => {
    let inViewport = !('IntersectionObserver' in window)
    const update = () => setVisible(inViewport && !document.hidden)
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => {
        inViewport = entry.isIntersecting
        update()
      }, { threshold: 0.1 })
      : null

    update()
    observer?.observe(carouselRef.current)
    document.addEventListener('visibilitychange', update)
    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion) movingRef.current = false
  }, [reducedMotion])

  useEffect(() => {
    if (!running) return
    const timer = window.setInterval(() => move(1), 2000)
    return () => window.clearInterval(timer)
  }, [running, move])

  function finishSlide(event) {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return
    movingRef.current = false
    if (position === 0 || position === count + 1) {
      // Move from the duplicate edge image to its matching slide without animation.
      setAnimated(false)
      setPosition(position === 0 ? count : 1)
    }
  }

  function handleKeyDown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
    if (multiple && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
      event.preventDefault()
      move(event.key === 'ArrowLeft' ? -1 : 1)
    }
  }

  return (
    <div ref={carouselRef} className="story-carousel" role="group" aria-roledescription="carousel" aria-label={`${title} photos`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }} onKeyDown={handleKeyDown}>
      <div className="team-card__cover story-carousel__viewport">
        <div className={`story-carousel__track ${animated ? 'is-sliding' : ''}`} style={{ transform: `translateX(-${position * 100}%)` }} onTransitionEnd={finishSlide}>
          {slides.map((photo, slideIndex) => (
            <div className={`story-carousel__slide ${photo.type === 'certificate' ? 'story-carousel__slide--certificate' : ''}`} key={`${photo.src}-${slideIndex}`} aria-hidden={slideIndex !== position}>
              <img src={photo.src} alt={photo.alt || `${title}, photo ${index + 1}`} loading="lazy" decoding="async" style={{ objectPosition: photo.position || '50% 50%' }} />
            </div>
          ))}
        </div>
        {multiple && <>
          <button className="story-carousel__arrow story-carousel__arrow--previous" type="button" aria-label={`Previous photo for ${title}`} onClick={() => move(-1)}><GalleryArrow previous /></button>
          <button className="story-carousel__arrow story-carousel__arrow--next" type="button" aria-label={`Next photo for ${title}`} onClick={() => move(1)}><GalleryArrow /></button>
        </>}
      </div>
      <div className="story-carousel__footer">
        <div className="story-carousel__caption" aria-live={running ? 'off' : 'polite'} aria-atomic="true"><span>{index + 1} / {count}</span><p>{image.caption || image.alt || title}</p></div>
        {multiple && !reducedMotion && <button className="story-carousel__play" type="button" aria-label={`${playing ? 'Pause' : 'Resume'} slideshow for ${title}`} onClick={() => setPlaying(current => !current)}>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">{playing ? <path d="M4 3h3v12H4zm7 0h3v12h-3z" /> : <path d="m5 3 10 6-10 6z" />}</svg>
        </button>}
      </div>
    </div>
  )
}

function TeamStoryCard({ story }) {
  const cover = story.images[0]
  const title = `${story.title}${story.year ? ` ${story.year}` : ''}`
  const activity = story.kind === 'activity'

  return (
    <article className={`team-card ${activity ? 'team-card--activity' : ''}`} aria-labelledby={`story-${story.id}`}>
      {cover ? (
        <StoryCarousel key={story.images.length} images={story.images} title={title} />
      ) : (
        <div className="team-card__cover team-card__cover--illustration" aria-hidden="true">
          <span className="team-cover__category">{activity ? 'COMMUNITY & TEAMWORK' : 'COMPETITION SEASON'}</span>
          <span className="team-cover__year">{story.year || 'iRAP'}</span>
          <div className="team-cover__art"><span className="team-cover__orbit" /><span className="team-cover__emblem"><StoryIcon activity={activity} /></span><i /><i /><i /></div>
          <span className="team-cover__caption">{story.title}</span>
        </div>
      )}
      <div className="team-card__body">
        <div className="team-card__meta"><span>{activity ? 'TEAM ACTIVITY' : 'TEAM ACHIEVEMENT'}</span><span>{story.year || story.team}</span></div>
        <h3 id={`story-${story.id}`}>{title}</h3>
        <ul className="team-milestones" aria-label={`${title} milestones`}>
          {story.milestones.map((milestone, index) => {
            const awardStyle = milestone.kind === 'award' ? awardStyles[milestone.result] || 'special' : null
            return (
              <li className={`team-milestone team-milestone--${milestone.kind}`} key={`${milestone.event}-${index}`}>
                <span className={`team-milestone__result ${awardStyle ? `team-milestone__result--${awardStyle}` : ''}`}>
                  {awardStyle && <span className={`award-mark award-mark--${awardStyle} ${['gold', 'silver', 'bronze'].includes(awardStyle) ? 'award-mark--medal' : ''}`} aria-hidden="true" />}
                  {milestone.result}
                </span>
                <span className="team-milestone__event">{milestone.event}{milestone.detail && <small>{milestone.detail}</small>}</span>
              </li>
            )
          })}
        </ul>
        {story.summary && <p className="team-card__summary">{story.summary}</p>}
        {story.role && <div className="contribution team-card__role"><span className="contribution__label">MY ROLE</span><p>{story.role}</p></div>}
      </div>
    </article>
  )
}

export default function TeamStories({ stories }) {
  return <div className="team-stories-grid">{stories.map(story => <TeamStoryCard key={story.id} story={story} />)}</div>
}
