import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'TaskFlow Pro',
    description: 'A collaborative project management app with real-time updates, drag-and-drop kanban boards, and team analytics.',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'EcoTrack',
    description: 'Carbon footprint tracker that helps users monitor and reduce their environmental impact through daily logging.',
    tags: ['Next.js', 'Prisma', 'Chart.js', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'DevConnect API',
    description: 'RESTful API service for developer portfolios with authentication, rate limiting, and webhook integrations.',
    tags: ['Express', 'MongoDB', 'Redis', 'JWT'],
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'Rhythm',
    description: 'Music streaming interface prototype with playlist management and audio visualization features.',
    tags: ['React', 'Web Audio API', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'CodeSnippets',
    description: 'Browser extension for saving and organizing code snippets with syntax highlighting and tags.',
    tags: ['TypeScript', 'Chrome APIs', 'IndexedDB'],
    github: 'https://github.com',
  },
  {
    title: 'WeatherNow',
    description: 'Minimalist weather app with location-based forecasts and customizable widgets.',
    tags: ['React Native', 'OpenWeather API', 'Expo'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
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
          Selected Work
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginTop: '0.5rem',
          }}
        >
          Projects I&apos;ve Built
        </h2>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((project, index) => (
          <article
            key={index}
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
              cursor: 'default',
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
            {/* Card Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
              }}
            >
              <Folder
                size={40}
                style={{ color: 'var(--accent)', strokeWidth: 1 }}
              />
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--muted-foreground)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--foreground)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--muted-foreground)')}
                    aria-label="View source code on GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--muted-foreground)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--foreground)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--muted-foreground)')}
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Card Content */}
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--muted-foreground)',
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1.5rem',
              }}
            >
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
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
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
