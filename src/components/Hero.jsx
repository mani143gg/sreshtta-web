import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "../styles/home.css"
import { useEffect, useState } from "react"

function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
  const handleScroll = () => {
    setOffsetY(window.scrollY)
  }
  window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <section className="hero" style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Sreshtta Performing Arts
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Where Tradition Meets Expression
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link to="/courses" className="btn-primary">
            Explore Courses
          </Link>

          <Link to="/contact" className="btn-secondary">
            Join Now
          </Link>
        </motion.div>
      </motion.div>

      <div className="scroll-indicator">↓</div>
    </section>
  )
}

export default Hero