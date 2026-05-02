import { Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
]

export default function Footer() {
  return (
    <footer
      style={{
        padding: '3rem 1.5rem',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                color: 'var(--muted-foreground)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--foreground)'
                e.currentTarget.style.borderColor = 'var(--muted-foreground)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted-foreground)'
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--muted-foreground)',
            }}
          >
            Designed & Built with care
          </p>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'var(--muted-foreground)',
            }}
          >
            {new Date().getFullYear()} Jane Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
