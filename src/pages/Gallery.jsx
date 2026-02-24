import { useState } from "react";
import { motion } from "framer-motion";
import galleryImages from "../data/galleryData";
import "../styles/gallery.css";
import courses from "../data/coursesData";

const categories = courses.map(course => course.title);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          image => image.category === activeCategory
        );

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Our Performances</h1>

      {/* Category Filters */}
      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {filteredImages.map(image => (
          <motion.div
            key={image.id}
            className="gallery-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedImage(image.image)}
          >
            <img src={image.image} alt="Dance Performance" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Large view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;