import React from "react"
import { useInView } from "react-intersection-observer"

const Header = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <header
      ref={ref}
      style={{
        textAlign: 'center',
        padding: '6rem 1rem',
        background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)',
        borderRadius: '0 0 50px 50px',
        marginBottom: '4rem',
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : '20px'})`,
        transition: 'opacity 0.6s, transform 0.6s',
      }}
    >
      <h1 style={{ 
        fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
        color: 'white',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '1rem'
      }}>
        אומנות השחרור
      </h1>
      <h2 style={{ 
        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
        color: 'rgba(255,255,255,0.9)',
        fontWeight: '400'
      }}>
        סדנה עם מאיר אבינר
      </h2>
    </header>
  )
}

export default Header
