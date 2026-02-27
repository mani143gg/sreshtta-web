import { motion } from "framer-motion"
import { awards, certifications } from "../data/awards"
import "../styles/about.css"

function Awards() {
  return (
    <section className="awards-section">
      <h2 className="section-title">Awards & Certifications</h2>

      {/* Awards */}
      <div className="awards-grid">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            className="award-card glass-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="award-icon">🏆</div>
            <h3>{award.title}</h3>
            <p>{award.organization}</p>
            <span>{award.year}</span>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="cert-card glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={cert.logo} alt={cert.name} />
            <p>{cert.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Awards