import { ArrowDown, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '800px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            color: 'var(--muted-foreground)',
            marginBottom: '2rem',
          }}
        >
          <Sparkles size={16} style={{ color: 'var(--accent)' }} />
          <span>{language === 'en' ? 'Available for new projects' : 'Открыт для новых проектов'}</span>
        </div>

        {/* Greeting */}
        <p
          style={{
            fontSize: '1.25rem',
            color: 'var(--muted-foreground)',
            marginBottom: '0.75rem',
          }}
        >
          {t('hero.greeting')}
        </p>

        {/* Name & Title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('hero.name')}
          </span>
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            fontWeight: 600,
            color: 'var(--foreground)',
            marginBottom: '1.5rem',
          }}
        >
          {t('hero.role')}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: 'var(--muted-foreground)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#projects"
            style={{
              padding: '0.875rem 1.75rem',
              fontSize: '0.9375rem',
              fontWeight: 600,
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)',
              borderRadius: '10px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            {t('hero.cta')}
          </a>
          <a
            href="#contact"
            style={{
              padding: '0.875rem 1.75rem',
              fontSize: '0.9375rem',
              fontWeight: 600,
              backgroundColor: 'transparent',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--muted-foreground)'
              e.target.style.backgroundColor = 'var(--card)'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--border)'
              e.target.style.backgroundColor = 'transparent'
            }}
          >
            {t('hero.contact')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--muted-foreground)',
          animation: 'bounce 2s infinite',
        }}
      >
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {language === 'en' ? 'Scroll' : 'Листайте'}
        </span>
        <ArrowDown size={16} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </section>
  )
}
