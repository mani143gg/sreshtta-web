import { motion } from "framer-motion"
import { teachers } from "../data/teachers"
import "../styles/about.css"

function Teachers() {
  return (
    <section className="teachers-section">
      <h2 className="section-title">Meet Our Gurus</h2>

      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.id}
            className="teacher-card glass-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="teacher-image">
              <img src={teacher.image} alt={teacher.name} />
            </div>

            <h3>{teacher.name}</h3>
            <span className="teacher-specialty">{teacher.specialty}</span>
            <span className="teacher-exp">{teacher.experience}</span>

            <p>{teacher.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Teachers