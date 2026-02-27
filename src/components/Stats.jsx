import CountUp from "react-countup"
import { motion } from "framer-motion"
import "../styles/home.css"

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">

        <motion.div
          className="stat-card glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>
            <CountUp end={1200} duration={5} />+
          </h2>
          <p>Students Trained</p>
        </motion.div>

        <motion.div
          className="stat-card glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>
            <CountUp end={15} duration={5} />+
          </h2>
          <p>Years of Excellence</p>
        </motion.div>

        <motion.div
          className="stat-card glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>
            <CountUp end={300} duration={5} />+
          </h2>
          <p>Stage Performances</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Stats