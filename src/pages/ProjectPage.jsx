import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Check } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { getProjectById } from '../data/projects'

export default function ProjectPage() {
  const { id } = useParams()
  const { language, t } = useLanguage()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    async function fetchProject() {
      try {
        setLoading(true)
        const data = await getProjectById(id)
        setProject(data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProject()
  }, [id])

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner} />
      </div>
    )
  }

  if (error || !project) {
    return (
      <div style={styles.errorContainer}>
        <h2 style={styles.errorTitle}>Project not found</h2>
        <Link to="/#projects" style={styles.backLink}>
          <ArrowLeft size={20} />
          {t('projects.backToProjects')}
        </Link>
      </div>
    )
  }

  const content = project.content[language]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Link to="/#projects" style={styles.backLink}>
          <ArrowLeft size={20} />
          {t('projects.backToProjects')}
        </Link>
      </div>

      <div style={styles.heroSection}>
        <h1 style={styles.title}>{content.title}</h1>
        <p style={styles.shortDescription}>{content.shortDescription}</p>
        
        <div style={styles.actions}>
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.primaryButton}
            >
              {t('projects.visitSite')}
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div style={styles.stackContainer}>
          <span style={styles.stackLabel}>{t('projects.techStack')}:</span>
          <div style={styles.stackTags}>
            {project.stack.map((tech) => (
              <span key={tech} style={styles.stackTag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.gallerySection}>
        <h2 style={styles.sectionTitle}>{t('projects.gallery')}</h2>
        <div style={styles.mainImage}>
          <img 
            src={project.images[activeImage]} 
            alt={content.title}
            style={styles.image}
          />
        </div>
        {project.images.length > 1 && (
          <div style={styles.thumbnails}>
            {project.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                style={{
                  ...styles.thumbnail,
                  ...(index === activeImage ? styles.thumbnailActive : {}),
                }}
              >
                <img src={img} alt={`${content.title} ${index + 1}`} style={styles.thumbnailImage} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={styles.contentGrid}>
        <div style={styles.contentCard}>
          <h2 style={styles.cardTitle}>{t('projects.challenge')}</h2>
          <p style={styles.cardText}>{content.challenge}</p>
        </div>

        <div style={styles.contentCard}>
          <h2 style={styles.cardTitle}>{t('projects.solution')}</h2>
          <p style={styles.cardText}>{content.solution}</p>
        </div>
      </div>

      <div style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>{t('projects.features')}</h2>
        <div style={styles.featuresList}>
          {content.features.map((feature, index) => (
            <div key={index} style={styles.featureItem}>
              <div style={styles.featureIcon}>
                <Check size={16} />
              </div>
              <span style={styles.featureText}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.fullDescription}>
        <h2 style={styles.sectionTitle}>{t('projectDetails.overview')}</h2>
        <p style={styles.descriptionText}>{content.fullDescription}</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '120px 24px 80px',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '3px solid var(--muted)',
    borderTopColor: 'var(--accent)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    gap: '24px',
  },
  errorTitle: {
    fontSize: '1.5rem',
    color: 'var(--foreground)',
  },
  header: {
    marginBottom: '40px',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--muted-foreground)',
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  },
  heroSection: {
    marginBottom: '60px',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 700,
    color: 'var(--foreground)',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  shortDescription: {
    fontSize: '1.25rem',
    color: 'var(--muted-foreground)',
    marginBottom: '24px',
    lineHeight: 1.6,
  },
  actions: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 28px',
    backgroundColor: 'var(--accent)',
    color: 'var(--accent-foreground)',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  stackContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  stackLabel: {
    color: 'var(--muted-foreground)',
    fontSize: '0.95rem',
  },
  stackTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  stackTag: {
    padding: '6px 14px',
    backgroundColor: 'var(--muted)',
    color: 'var(--foreground)',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  gallerySection: {
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'var(--foreground)',
    marginBottom: '24px',
  },
  mainImage: {
    width: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '16px',
    backgroundColor: 'var(--card)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    aspectRatio: '16/9',
    objectFit: 'cover',
  },
  thumbnails: {
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    paddingBottom: '8px',
  },
  thumbnail: {
    flexShrink: 0,
    width: '100px',
    height: '60px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '2px solid transparent',
    cursor: 'pointer',
    padding: 0,
    background: 'none',
    opacity: 0.6,
    transition: 'all 0.2s ease',
  },
  thumbnailActive: {
    borderColor: 'var(--accent)',
    opacity: 1,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '60px',
  },
  contentCard: {
    backgroundColor: 'var(--card)',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid var(--border)',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: 'var(--foreground)',
    marginBottom: '16px',
  },
  cardText: {
    color: 'var(--muted-foreground)',
    lineHeight: 1.7,
    fontSize: '1rem',
  },
  featuresSection: {
    marginBottom: '60px',
  },
  featuresList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 20px',
    backgroundColor: 'var(--card)',
    borderRadius: '12px',
    border: '1px solid var(--border)',
  },
  featureIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  featureText: {
    color: 'var(--foreground)',
    fontSize: '0.95rem',
  },
  fullDescription: {
    marginBottom: '40px',
  },
  descriptionText: {
    color: 'var(--muted-foreground)',
    lineHeight: 1.8,
    fontSize: '1.05rem',
  },
}
