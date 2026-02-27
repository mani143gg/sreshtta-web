import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "../styles/footer.css"

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">Sreshtta</h2>
          <p>
            Sreshtta Performing Arts is dedicated to nurturing talent
            in dance and martial arts through discipline, creativity,
            and excellence.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-buttons">
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noreferrer">YouTube</a>
            <a href="#" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Trivandrum, Kerala, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 sreshttaperformingarts@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sreshtta Performing Arts. All rights reserved.
      </div>
    </motion.footer>
  )
}

export default Footer