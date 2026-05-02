import { useEffect, useRef, useState } from 'react'

export default function CatBackground() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      // Calculate mouse position as percentage from center
      const x = (clientX - innerWidth / 2) / innerWidth
      const y = (clientY - innerHeight / 2) / innerHeight
      
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Smooth parallax effect
  useEffect(() => {
    const animate = () => {
      setOffset(prev => ({
        x: prev.x + (mousePosition.x * 15 - prev.x) * 0.05,
        y: prev.y + (mousePosition.y * 15 - prev.y) * 0.05,
      }))
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [mousePosition])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Scottish Straight Cat SVG */}
      <svg
        viewBox="0 0 400 400"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '500px',
          height: '500px',
          opacity: 0.12,
          transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)`,
          transition: 'opacity 0.3s ease',
          filter: 'blur(1px)',
        }}
      >
        {/* Cat body - soft curves */}
        <ellipse
          cx="200"
          cy="260"
          rx="100"
          ry="80"
          fill="url(#catGradient)"
        />
        
        {/* Cat head */}
        <circle
          cx="200"
          cy="140"
          r="70"
          fill="url(#catGradient)"
        />
        
        {/* Left ear (straight, not folded - Scottish Straight) */}
        <path
          d="M 145 90 L 155 55 L 175 85 Z"
          fill="url(#catGradient)"
        />
        <path
          d="M 152 80 L 158 60 L 170 82 Z"
          fill="url(#earInnerGradient)"
        />
        
        {/* Right ear (straight) */}
        <path
          d="M 255 90 L 245 55 L 225 85 Z"
          fill="url(#catGradient)"
        />
        <path
          d="M 248 80 L 242 60 L 230 82 Z"
          fill="url(#earInnerGradient)"
        />
        
        {/* Eyes */}
        <ellipse
          cx="170"
          cy="135"
          rx="12"
          ry="15"
          fill="var(--accent)"
          opacity="0.6"
        />
        <ellipse
          cx="230"
          cy="135"
          rx="12"
          ry="15"
          fill="var(--accent)"
          opacity="0.6"
        />
        
        {/* Eye pupils */}
        <ellipse
          cx="170"
          cy="135"
          rx="5"
          ry="8"
          fill="var(--background)"
          opacity="0.8"
        />
        <ellipse
          cx="230"
          cy="135"
          rx="5"
          ry="8"
          fill="var(--background)"
          opacity="0.8"
        />
        
        {/* Nose */}
        <path
          d="M 195 155 L 200 165 L 205 155 Z"
          fill="var(--muted-foreground)"
          opacity="0.4"
        />
        
        {/* Mouth */}
        <path
          d="M 200 165 Q 185 175 180 172"
          stroke="var(--muted-foreground)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M 200 165 Q 215 175 220 172"
          stroke="var(--muted-foreground)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        
        {/* Whiskers */}
        <line x1="150" y1="155" x2="110" y2="150" stroke="var(--muted-foreground)" strokeWidth="1" opacity="0.3" />
        <line x1="150" y1="160" x2="110" y2="165" stroke="var(--muted-foreground)" strokeWidth="1" opacity="0.3" />
        <line x1="150" y1="165" x2="115" y2="180" stroke="var(--muted-foreground)" strokeWidth="1" opacity="0.3" />
        <line x1="250" y1="155" x2="290" y2="150" stroke="var(--muted-foreground)" strokeWidth="1" opacity="0.3" />
        <line x1="250" y1="160" x2="290" y2="165" stroke="var(--muted-foreground)" strokeWidth="1" opacity="0.3" />
        <line x1="250" y1="165" x2="285" y2="180" stroke="var(--muted-foreground)" strokeWidth="1" opacity="0.3" />
        
        {/* Front paws */}
        <ellipse cx="150" cy="320" rx="25" ry="20" fill="url(#catGradient)" />
        <ellipse cx="250" cy="320" rx="25" ry="20" fill="url(#catGradient)" />
        
        {/* Tail */}
        <path
          d="M 300 260 Q 340 240 350 280 Q 360 320 330 340"
          stroke="url(#catGradient)"
          strokeWidth="25"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Chest/belly highlight */}
        <ellipse
          cx="200"
          cy="230"
          rx="40"
          ry="50"
          fill="url(#chestGradient)"
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="catGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--muted-foreground)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--muted)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--muted-foreground)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="earInnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--muted)" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="chestGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--muted)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Floating animation overlay */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
