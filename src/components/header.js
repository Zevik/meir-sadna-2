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
        padding: '4rem 1rem',
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : '20px'})`,
        transition: 'opacity 0.6s, transform 0.6s',
      }}
    >
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary)' }}>
        אומנות השחרור
      </h1>
      <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}>
        סדנה עם מאיר אבינר
      </h2>
    </header>
  )
}

export default Header
