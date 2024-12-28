import React from "react"
import { useInView } from "react-intersection-observer"

const WorkshopInfo = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem',
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : '20px'})`,
        transition: 'opacity 0.6s, transform 0.6s',
      }}
    >
      <div className="info-card">
        <h3>על הסדנה</h3>
        <p>גלו את אומנות השחרור בסדנה מעשית ומעמיקה</p>
      </div>
      <div className="info-card">
        <h3>למי מיועד</h3>
        <p>הסדנה מתאימה לכל מי שמעוניין להעמיק בתהליכי שחרור</p>
      </div>
      <div className="info-card">
        <h3>מה נלמד</h3>
        <p>טכניקות מעשיות, תרגילים והבנה תיאורטית</p>
      </div>
    </section>
  )
}

export default WorkshopInfo
