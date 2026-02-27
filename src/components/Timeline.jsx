import { motion } from "framer-motion"
import { timeline } from "../data/timeline"
import "../styles/about.css"

function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="section-title">Our Journey</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content glass-card">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline