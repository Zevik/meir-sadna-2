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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        padding: '0 2rem 4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : '20px'})`,
        transition: 'opacity 0.6s, transform 0.6s',
      }}
    >
      <div className="info-card">
        <h3>על הסדנה</h3>
        <p>סדנה מעשית ומעמיקה המשלבת תרגול, למידה והתנסות אישית. נלמד טכניקות מעשיות לשחרור והתפתחות אישית.</p>
      </div>
      <div className="info-card">
        <h3>למי מיועד</h3>
        <p>הסדנה מתאימה לכל מי שמעוניין להעמיק בתהליכי שחרור ולפתח כלים מעשיים להתמודדות עם אתגרי החיים.</p>
      </div>
      <div className="info-card">
        <h3>מה נלמד</h3>
        <p>טכניקות מעשיות לשחרור, תרגילי נשימה והרפיה, כלים להתמודדות עם מתח וחרדה, ושיטות לפיתוח מודעות עצמית.</p>
      </div>
    </section>
  )
}

export default WorkshopInfo
