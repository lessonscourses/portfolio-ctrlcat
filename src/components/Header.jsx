import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = location.pathname === '/'

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.projects'), href: isHomePage ? '#projects' : '/#projects' },
    { name: t('nav.about'), href: isHomePage ? '#about' : '/#about' },
    { name: t('nav.contact'), href: isHomePage ? '#contact' : '/#contact' },
  ]

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1rem 1.5rem',
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(10, 10, 11, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: 'var(--foreground)',
          }}
        >
          <span
            style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            C+C
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 600 }}>Ctrl+Cat</span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--muted-foreground)',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--foreground)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--muted-foreground)')}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--muted-foreground)',
                  transition: 'color 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--foreground)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--muted-foreground)')}
              >
                {link.name}
              </Link>
            )
          ))}
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              backgroundColor: 'var(--muted)',
              color: 'var(--foreground)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--border)')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--muted)')}
          >
            <Globe size={16} />
            {language === 'en' ? 'RU' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-controls">
          <button
            onClick={toggleLanguage}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              padding: '0.4rem 0.6rem',
              fontSize: '0.8rem',
              fontWeight: 500,
              backgroundColor: 'var(--muted)',
              color: 'var(--foreground)',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
            className="mobile-lang-btn"
          >
            <Globe size={14} />
            {language === 'en' ? 'RU' : 'EN'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.5rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--foreground)',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(10, 10, 11, 0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem 1.5rem',
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--muted-foreground)',
                  textDecoration: 'none',
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--muted-foreground)',
                  textDecoration: 'none',
                }}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-lang-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  )
}
