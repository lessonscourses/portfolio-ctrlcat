import { useState } from 'react'
import { Send, Mail, MapPin, Loader2, Instagram } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

// Set to true to show the contact form, false to hide it
const SHOW_CONTACT_FORM = false

export default function Contact() {
  const { t, language } = useLanguage()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const inputStyles = {
    width: '100%',
    padding: '0.875rem 1rem',
    fontSize: '0.9375rem',
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    color: 'var(--foreground)',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  }

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
          {language === 'en' ? 'Get in Touch' : 'Контакты'}
        </span>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginTop: '0.5rem',
          }}
        >
          {t('contact.title')}
        </h2>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'var(--muted-foreground)',
            maxWidth: '500px',
            margin: '1rem auto 0',
          }}
        >
          {t('contact.subtitle')}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '3rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Contact Info */}
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Mail size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--muted-foreground)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:ctrlcatmy@proton.me"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--foreground)',
                  }}
                >
                  ctrlcatmy@proton.me
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Instagram size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--muted-foreground)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Instagram
                </p>
                <a
                  href="https://instagram.com/ctrlcat.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--foreground)',
                  }}
                >
                  @ctrlcat.my
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--muted-foreground)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {language === 'en' ? 'Location' : 'Локация'}
                </p>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--foreground)',
                  }}
                >
                  {language === 'en' ? 'Remote / Worldwide' : 'Удалённо / Весь мир'}
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
            }}
          >
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--muted-foreground)',
                lineHeight: 1.7,
                fontStyle: 'italic',
              }}
            >
              {language === 'en' 
                ? '"The best way to predict the future is to create it."'
                : '"Лучший способ предсказать будущее — создать его."'}
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--muted-foreground)',
                marginTop: '0.75rem',
              }}
            >
              — Peter Drucker
            </p>
          </div>
        </div>

        {/* Contact Form - Hidden but preserved */}
        {SHOW_CONTACT_FORM && (
        <form onSubmit={handleSubmit}>
          {submitted ? (
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}
              >
                <Send size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}
              >
                {t('contact.success')}
              </h3>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--muted-foreground)',
                }}
              >
                {language === 'en' 
                  ? 'Thanks for reaching out. I\'ll get back to you soon.'
                  : 'Спасибо за обращение. Скоро свяжусь с вами.'}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--foreground)',
                  cursor: 'pointer',
                }}
              >
                {language === 'en' ? 'Send Another' : 'Отправить ещё'}
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder={language === 'en' ? 'Your name' : 'Ваше имя'}
                  style={inputStyles}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  style={inputStyles}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={language === 'en' 
                    ? 'Tell me about your project...' 
                    : 'Расскажите о вашем проекте...'}
                  style={{
                    ...inputStyles,
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.target.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.target.style.opacity = '1'
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    {t('contact.send')}
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          )}

          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </form>
        )}
      </div>
    </section>
  )
}
