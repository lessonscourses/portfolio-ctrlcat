import { Code2, Palette, Zap, Users } from 'lucide-react'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
  'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Git',
  'Tailwind CSS', 'Figma', 'Docker', 'AWS',
]

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, well-documented code that scales.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and smooth user experiences.',
  },
  {
    icon: Palette,
    title: 'Design Sense',
    description: 'Bridging the gap between design and development.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with teams and stakeholders.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 1.5rem',
        backgroundColor: 'var(--card)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
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
            About Me
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginTop: '0.5rem',
            }}
          >
            A Bit About Myself
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Bio */}
          <div>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--muted-foreground)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              Hi there! I&apos;m a full-stack developer with 4+ years of experience 
              building web applications. I love turning complex problems into 
              simple, beautiful solutions.
            </p>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--muted-foreground)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              When I&apos;m not coding, you&apos;ll find me exploring new coffee shops, 
              contributing to open-source projects, or tinkering with side projects 
              that probably involve too many API integrations.
            </p>

            {/* Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'var(--background)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                  }}
                >
                  <item.icon
                    size={20}
                    style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}
                  />
                  <h4
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              Tech Stack
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.625rem',
              }}
            >
              {skills.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--foreground)',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    transition: 'border-color 0.2s ease, background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.backgroundColor = 'var(--background)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience Note */}
            <div
              style={{
                marginTop: '2rem',
                padding: '1.25rem',
                backgroundColor: 'var(--background)',
                borderRadius: '12px',
                borderLeft: '3px solid var(--accent)',
              }}
            >
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.6,
                }}
              >
                Currently freelancing and open to full-time opportunities. 
                Let&apos;s build something great together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
