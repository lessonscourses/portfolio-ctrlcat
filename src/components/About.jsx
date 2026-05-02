import { Code2, Database, Zap, Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
  'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'Git', 'Docker',
  'Tailwind CSS', 'Python', 'TensorFlow', 'AWS',
]

export default function About() {
  const { t, language } = useLanguage()

  const highlights = [
    {
      icon: Code2,
      title: language === 'en' ? 'Clean Code' : 'Чистый код',
      description: language === 'en' 
        ? 'Writing maintainable, well-documented code that scales.' 
        : 'Поддерживаемый, документированный код, который масштабируется.',
    },
    {
      icon: Database,
      title: language === 'en' ? 'Backend & APIs' : 'Бэкенд и API',
      description: language === 'en' 
        ? 'Building robust APIs and database architectures.' 
        : 'Создание надёжных API и архитектуры баз данных.',
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Performance' : 'Производительность',
      description: language === 'en' 
        ? 'Optimizing for speed and smooth user experiences.' 
        : 'Оптимизация скорости и плавности UX.',
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Full-Stack' : 'Full-Stack',
      description: language === 'en' 
        ? 'End-to-end development from idea to deployment.' 
        : 'Разработка от идеи до деплоя.',
    },
  ]

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
            {language === 'en' ? 'About Me' : 'Обо мне'}
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginTop: '0.5rem',
            }}
          >
            {t('about.title')}
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
              {t('about.bio')}
            </p>

            {/* Experience List */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                {t('about.experience')}:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {t('about.experienceItems').map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '0.5rem 0',
                      color: 'var(--muted-foreground)',
                      fontSize: '0.95rem',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'var(--accent)',
                        borderRadius: '50%',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

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
              {t('about.skills')}
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

            {/* CTA Note */}
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
                {language === 'en' 
                  ? 'Open to interesting projects and collaborations. Let\'s build something great together!'
                  : 'Открыт для интересных проектов и сотрудничества. Давайте создадим что-то классное вместе!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
