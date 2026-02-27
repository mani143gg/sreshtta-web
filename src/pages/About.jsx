import { motion } from "framer-motion"
import Teachers from "../components/Teachers"
import Awards from "../components/Awards"
import Timeline from "../components/Timeline"
import "../styles/about.css"

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Sreshtta Performing Arts</h1>
        <p>Preserving Tradition. Inspiring Expression. Empowering Talent.</p>
      </section>

      {/* Story Section */}
      <motion.section
        className="about-section glass-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Story</h2>
        <p>
          Founded with a vision to blend classical heritage with modern creativity,
          Sreshtta Performing Arts has become a nurturing ground for passionate
          performers. We believe dance and martial arts are not just skills —
          they are a way of life that builds discipline, confidence, and expression.
        </p>
        <p>
          Over the years, our academy has trained students across various age groups,
          preparing them for stage performances, competitions, and professional careers.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="about-section dual-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="glass-card">
          <h2>Our Mission</h2>
          <p>
            To cultivate artistic excellence by providing structured training,
            inspiring mentorship, and a platform for creative expression.
          </p>
        </div>

        <div className="glass-card">
          <h2>Our Vision</h2>
          <p>
            To be a leading performing arts institution that empowers individuals
            through cultural education and transformative performance experiences.
          </p>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="glass-card">
            <h3>Discipline</h3>
            <p>Structured training that builds commitment and focus.</p>
          </div>

          <div className="glass-card">
            <h3>Creativity</h3>
            <p>Encouraging innovation while respecting tradition.</p>
          </div>

          <div className="glass-card">
            <h3>Excellence</h3>
            <p>Striving for the highest standards in performance.</p>
          </div>

          <div className="glass-card">
            <h3>Community</h3>
            <p>Building a supportive and inspiring artistic family.</p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="about-section glass-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose Sreshtta?</h2>
        <ul className="why-list">
          <li>Certified and experienced instructors</li>
          <li>Stage performance opportunities</li>
          <li>Structured curriculum for all levels</li>
          <li>Safe and professional training environment</li>
          <li>Focus on both physical and artistic development</li>
        </ul>
      </motion.section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Begin Your Artistic Journey Today</h2>
        <p>Join Sreshtta Performing Arts and discover your true potential.</p>
      </section>

      <Teachers />
      <Awards />
      <Timeline />

    </div>
  )
}

export default About