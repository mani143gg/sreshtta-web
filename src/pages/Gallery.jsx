import { useState } from "react"
import { motion } from "framer-motion"
import { galleryImages } from "../data/gallery"
import "../styles/gallery.css"

function Gallery() {
  const [category, setCategory] = useState("All")

  const categories = ["All", "Classical", "Modern", "Events"]

  const filtered =
    category === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category)

  return (
    <section className="gallery-section">
      <h2 className="section-title">Our Performances</h2>

      {/* Filter Buttons */}
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {filtered.map((image, index) => (
          <motion.div
            key={image.id}
            className="gallery-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <img src={image.image} alt={image.title} />
            <div className="overlay">
              <h3>{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Gallery