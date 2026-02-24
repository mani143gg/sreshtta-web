import { motion } from "framer-motion"
import "../styles/home.css"

function Artists() {
  const artists = [
    "Guru Meenakshi",
    "Arjun Varma",
    "Divya Raman",
    "Rahul Krishna",
    "Sahana Nair",
    "Vikram Dev"
  ]

  return (
    <motion.section
      className="artists-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Featured Artists</h2>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <motion.div
            key={index}
            className="artist-card"
            whileHover={{ scale: 1.08 }}
          >
            <h3>{artist}</h3>
            <p>Professional Performer & Instructor</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Artists