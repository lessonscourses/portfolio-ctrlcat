import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, Folder } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { getFeaturedProjects } from '../data/projects'

export default function Projects() {
  const { language, t } = useLanguage()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getFeaturedProjects()
        setProjects(data)
      } catch (error) {
        console.error('Failed to load projects:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', color: 'var(--muted-foreground)' }}>Loading...</div>
      </section>
    )
  }

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '3rem' }}>
        <span
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
          className="font-mono"
        >
          {language === 'en' ? 'Selected Work' : 'Избранные работы'}
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginTop: '0.5rem',
          }}
        >
          {t('projects.title')}
        </h2>
        <p
          style={{
            color: 'var(--muted-foreground)',
            fontSize: '1.125rem',
            marginTop: '0.5rem',
          }}
        >
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((project) => {
          const content = project.content[language]
          
          return (
            <article
              key={project.id}
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--muted-foreground)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Project Image */}
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={project.images[0]}
                  alt={content.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)',
                  }}
                />
              </div>

              {/* Card Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {content.title}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: 'var(--muted-foreground)', 
                        transition: 'color 0.2s ease',
                        flexShrink: 0,
                        marginLeft: '8px',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                      aria-label={`Visit ${content.title} website`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {content.shortDescription}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '1rem',
                  }}
                >
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--muted-foreground)',
                        padding: '0.25rem 0.625rem',
                        backgroundColor: 'var(--muted)',
                        borderRadius: '6px',
                      }}
                      className="font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <Link
                  to={`/project/${project.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '1.25rem',
                    color: 'var(--accent)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                >
                  {t('projects.viewProject')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
